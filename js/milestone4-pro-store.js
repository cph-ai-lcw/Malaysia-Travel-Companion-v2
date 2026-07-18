const PRO_KEY = 'amt-m4-pro-data-v1';
const LEGACY_NOTICE_KEY = 'mtc-custom-announcements';

const clone = (value) => JSON.parse(JSON.stringify(value));
const nowIso = () => new Date().toISOString();

function legacyJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || 'null');
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function buildAttendanceRecords(members) {
  const records = [];
  for (let day = 1; day <= 5; day += 1) {
    members.forEach((member) => {
      const status = localStorage.getItem(`mtc-checkin-d${day}-m${member.id}`);
      if (status) {
        records.push({
          id: `legacy-d${day}-${member.id}`,
          sessionId: `daily-day-${day}`,
          memberId: member.id,
          status,
          checkedAt: null,
          source: 'legacy-migration'
        });
      }
    });
  }
  return records;
}

export function createProDatabase({ members = [], rooms = [], announcements = [] } = {}) {
  const createdAt = nowIso();
  const customAnnouncements = legacyJson(LEGACY_NOTICE_KEY, []);
  return {
    meta: {
      schema: 'amt-travel-pro',
      schemaVersion: 1,
      milestone: '4-8',
      appVersion: '4.8.0',
      createdAt,
      updatedAt: createdAt,
      migration: {
        completed: true,
        source: 'Malaysia-Travel-Companion-v2',
        migratedAt: createdAt
      }
    },
    trip: {
      id: 'amt-malaysia-2026',
      titleZh: '國能馬來西亞員工旅遊 2026',
      titleVi: 'Du lịch nhân viên Malaysia 2026',
      startDate: '2026-09-20',
      endDate: '2026-09-24',
      timezone: 'Asia/Taipei'
    },
    members: members.map((member) => ({
      ...clone(member),
      role: member.number === 32 ? 'leader' : 'traveler',
      department: member.department || '',
      phone: member.phone || '',
      emergencyContact: member.emergencyContact || '',
      emergencyPhone: member.emergencyPhone || '',
      qrCode: `AMT-MY26-${member.id}`,
      checkinStatus: 'pending',
      roomCardReceived: false,
      luggageTagReceived: false,
      active: true
    })),
    rooms: clone(rooms),
    announcements: [...clone(customAnnouncements), ...clone(announcements)].map((item, index) => ({
      ...item,
      pinned: item.pinned ?? index === 0,
      active: item.active ?? true,
      createdAt: item.createdAt || createdAt,
      updatedAt: item.updatedAt || createdAt,
      createdBy: item.createdBy || 'system'
    })),
    attendanceSessions: [1, 2, 3, 4, 5].map((day) => ({
      id: `daily-day-${day}`,
      day,
      titleZh: `Day ${day} 每日簽到`,
      titleVi: `Điểm danh ngày ${day}`,
      type: 'daily',
      locationZh: '',
      locationVi: '',
      scheduledAt: null,
      status: 'draft',
      createdAt
    })),
    attendanceRecords: buildAttendanceRecords(members),
    checkinRecords: [],
    leaderSettings: {
      authMode: 'local-pin',
      pinConfigured: false,
      pinHash: '',
      sessionTimeoutMinutes: 30,
      allowAnnouncementEdit: true,
      allowAttendanceEdit: true,
      allowQrCheckin: true,
      allowBackupRestore: true,
      allowMemberDataView: true,
      failedAttempts: 0,
      lockedUntil: null
    },
    sync: {
      provider: 'local',
      enabled: false,
      status: 'disconnected',
      useAnonymousAuth: true,
      realtime: true,
      autoUpload: true,
      lastSyncAt: null,
      lastRemoteUpdateAt: null,
      lastError: '',
      firebaseConfig: { apiKey: '', authDomain: '', projectId: '', storageBucket: '', messagingSenderId: '', appId: '' },
      documentPath: 'trips/amt-malaysia-2026/state/current'
    }
  };
}

export function loadProDatabase(seed) {
  try {
    const current = JSON.parse(localStorage.getItem(PRO_KEY) || 'null');
    if (current?.meta?.schema === 'amt-travel-pro') {
      current.meta.milestone = '4-8'; current.meta.appVersion = '4.8.0';
      current.checkinRecords = Array.isArray(current.checkinRecords) ? current.checkinRecords : [];
      current.leaderSettings = { authMode: 'local-pin', pinConfigured: false, pinHash: '', sessionTimeoutMinutes: 30, allowAnnouncementEdit: true, allowAttendanceEdit: true, allowQrCheckin: true, allowBackupRestore: true, allowMemberDataView: true, failedAttempts: 0, lockedUntil: null, ...(current.leaderSettings || {}) };
      current.sync = { provider: 'local', enabled: false, status: 'disconnected', useAnonymousAuth: true, realtime: true, autoUpload: true, lastSyncAt: null, lastRemoteUpdateAt: null, lastError: '', firebaseConfig: { apiKey: '', authDomain: '', projectId: '', storageBucket: '', messagingSenderId: '', appId: '' }, documentPath: 'trips/amt-malaysia-2026/state/current', ...(current.sync || {}), firebaseConfig: { apiKey: '', authDomain: '', projectId: '', storageBucket: '', messagingSenderId: '', appId: '', ...(current.sync?.firebaseConfig || {}) } };
      current.members = (current.members || []).map(m => ({...m, qrCode: m.qrCode || `AMT-MY26-${m.id}`, checkinStatus: m.checkinStatus || 'pending'}));
      saveProDatabase(current); return current;
    }
  } catch {}
  const database = createProDatabase(seed);
  saveProDatabase(database);
  return database;
}

export function saveProDatabase(database) {
  const next = clone(database);
  next.meta = next.meta || {};
  next.meta.updatedAt = nowIso();
  localStorage.setItem(PRO_KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent('amt:m4-datachange', { detail: next }));
  return next;
}

export function exportProDatabase(database) {
  const blob = new Blob([JSON.stringify(database, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `amt-malaysia-m4-backup-${new Date().toISOString().slice(0, 10)}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

export async function importProDatabase(file) {
  const text = await file.text();
  const parsed = JSON.parse(text);
  if (parsed?.meta?.schema !== 'amt-travel-pro' || !Array.isArray(parsed.members)) {
    throw new Error('INVALID_PRO_BACKUP');
  }
  return saveProDatabase(parsed);
}

export function resetProDatabase(seed) {
  localStorage.removeItem(PRO_KEY);
  return loadProDatabase(seed);
}

export const PRO_STORAGE_KEY = PRO_KEY;
