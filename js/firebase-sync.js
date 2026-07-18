import { chooseNewestDatabase, validateAndRepairDatabase } from './data-safety.js';
const FIREBASE_VERSION = '12.0.0';
const APP_URL = `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-app.js`;
const AUTH_URL = `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-auth.js`;
const FIRESTORE_URL = `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-firestore.js`;

let runtime = null;
let unsubscribe = null;
let applyingRemote = false;
let uploadTimer = null;

const clone = (value) => JSON.parse(JSON.stringify(value));

function cleanConfig(config = {}) {
  return {
    apiKey: String(config.apiKey || '').trim(),
    authDomain: String(config.authDomain || '').trim(),
    projectId: String(config.projectId || '').trim(),
    storageBucket: String(config.storageBucket || '').trim(),
    messagingSenderId: String(config.messagingSenderId || '').trim(),
    appId: String(config.appId || '').trim()
  };
}

function validateConfig(config) {
  const c = cleanConfig(config);
  if (!c.apiKey || !c.projectId || !c.appId) throw new Error('FIREBASE_CONFIG_INCOMPLETE');
  return c;
}

function cloudDocumentPath(database) {
  const tripId = database?.trip?.id || 'amt-malaysia-2026';
  return ['trips', tripId, 'state', 'current'];
}

function cloudPayload(database) {
  return {
    schema: 'amt-travel-pro-cloud',
    schemaVersion: 1,
    trip: clone(database.trip || {}),
    members: clone(database.members || []),
    rooms: clone(database.rooms || []),
    announcements: clone(database.announcements || []),
    attendanceSessions: clone(database.attendanceSessions || []),
    attendanceRecords: clone(database.attendanceRecords || []),
    checkinRecords: clone(database.checkinRecords || []),
    sourceUpdatedAt: database?.meta?.updatedAt || new Date().toISOString(),
    syncedAt: new Date().toISOString()
  };
}

function mergeRemote(local, remote) {
  if (!remote || remote.schema !== 'amt-travel-pro-cloud') return local;
  const remoteDb = validateAndRepairDatabase({
    ...local,
    meta:{...(local.meta||{}),updatedAt:remote.sourceUpdatedAt||remote.syncedAt||new Date().toISOString()},
    trip: remote.trip || local.trip,
    members: remote.members,
    rooms: remote.rooms,
    announcements: remote.announcements,
    attendanceSessions: remote.attendanceSessions,
    attendanceRecords: remote.attendanceRecords,
    checkinRecords: remote.checkinRecords
  }).database;
  const decision=chooseNewestDatabase(local,remoteDb);
  if(decision.winner==='local') return {...local,sync:{...(local.sync||{}),status:'connected',lastSyncAt:remote.syncedAt||new Date().toISOString(),lastRemoteUpdateAt:remote.sourceUpdatedAt||null,lastError:'',lastConflictResolution:'local-newer'}};
  return {
    ...remoteDb,
    trip: remote.trip || local.trip,
    members: Array.isArray(remote.members) ? remote.members : local.members,
    rooms: Array.isArray(remote.rooms) ? remote.rooms : local.rooms,
    announcements: Array.isArray(remote.announcements) ? remote.announcements : local.announcements,
    attendanceSessions: Array.isArray(remote.attendanceSessions) ? remote.attendanceSessions : local.attendanceSessions,
    attendanceRecords: Array.isArray(remote.attendanceRecords) ? remote.attendanceRecords : local.attendanceRecords,
    checkinRecords: Array.isArray(remote.checkinRecords) ? remote.checkinRecords : local.checkinRecords,
    sync: {
      ...(local.sync || {}),
      provider: 'firebase',
      enabled: true,
      status: 'connected',
      lastSyncAt: remote.syncedAt || new Date().toISOString(),
      lastRemoteUpdateAt: remote.sourceUpdatedAt || null,
      lastError: '',
      lastConflictResolution:'remote-newer'
    }
  };
}

async function loadRuntime(config, useAnonymousAuth = true) {
  const c = validateConfig(config);
  if (runtime && runtime.config.projectId === c.projectId && runtime.config.appId === c.appId) return runtime;
  const [{ initializeApp, getApps, getApp }, authMod, fsMod] = await Promise.all([
    import(APP_URL), import(AUTH_URL), import(FIRESTORE_URL)
  ]);
  const appName = `amt-m4-${c.projectId}`;
  const existing = getApps().find(app => app.name === appName);
  const app = existing || initializeApp(c, appName);
  const auth = authMod.getAuth(app);
  if (useAnonymousAuth && !auth.currentUser) await authMod.signInAnonymously(auth);
  const db = fsMod.getFirestore(app);
  runtime = { app, auth, db, fsMod, config: c };
  return runtime;
}

export async function testFirebaseConnection(config, options = {}) {
  const rt = await loadRuntime(config, options.useAnonymousAuth !== false);
  return { projectId: rt.config.projectId, uid: rt.auth.currentUser?.uid || null };
}

export async function uploadFirebaseDatabase(database) {
  const settings = database?.sync || {};
  const rt = await loadRuntime(settings.firebaseConfig, settings.useAnonymousAuth !== false);
  const ref = rt.fsMod.doc(rt.db, ...cloudDocumentPath(database));
  await rt.fsMod.setDoc(ref, cloudPayload(database), { merge: false });
  return new Date().toISOString();
}

export async function downloadFirebaseDatabase(database) {
  const settings = database?.sync || {};
  const rt = await loadRuntime(settings.firebaseConfig, settings.useAnonymousAuth !== false);
  const ref = rt.fsMod.doc(rt.db, ...cloudDocumentPath(database));
  const snap = await rt.fsMod.getDoc(ref);
  if (!snap.exists()) return null;
  return mergeRemote(database, snap.data());
}

export async function startFirebaseRealtime(database, onRemote, onStatus) {
  stopFirebaseRealtime();
  const settings = database?.sync || {};
  const rt = await loadRuntime(settings.firebaseConfig, settings.useAnonymousAuth !== false);
  const ref = rt.fsMod.doc(rt.db, ...cloudDocumentPath(database));
  unsubscribe = rt.fsMod.onSnapshot(ref, snap => {
    if (!snap.exists()) {
      onStatus?.({ status: 'connected', message: 'EMPTY_REMOTE' });
      return;
    }
    applyingRemote = true;
    try { onRemote?.(mergeRemote(database, snap.data())); }
    finally { setTimeout(() => { applyingRemote = false; }, 0); }
    onStatus?.({ status: 'connected', at: new Date().toISOString() });
  }, error => onStatus?.({ status: 'error', message: error?.message || String(error) }));
  return true;
}

export function stopFirebaseRealtime() {
  if (unsubscribe) unsubscribe();
  unsubscribe = null;
  if (uploadTimer) clearTimeout(uploadTimer);
  uploadTimer = null;
}

export function scheduleFirebaseUpload(database, onDone, onError) {
  if (applyingRemote || database?.sync?.enabled !== true || database?.sync?.provider !== 'firebase') return;
  if (uploadTimer) clearTimeout(uploadTimer);
  uploadTimer = setTimeout(async () => {
    try { const at = await uploadFirebaseDatabase(database); onDone?.(at); }
    catch (error) { onError?.(error); }
  }, 900);
}
