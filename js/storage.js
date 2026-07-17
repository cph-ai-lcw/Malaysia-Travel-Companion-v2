import { APP_CONFIG, CONSTANTS } from "../data/system/index.js";

const key = (name) => `${APP_CONFIG.storagePrefix}:${name}`;

export const storage = {
  get(name, fallback = null) {
    try {
      const raw = localStorage.getItem(key(name));
      return raw === null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  },
  set(name, value) {
    localStorage.setItem(key(name), JSON.stringify(value));
  },
  remove(name) {
    localStorage.removeItem(key(name));
  },
  clearAppData() {
    Object.values(CONSTANTS.STORAGE_KEYS).forEach((name) => this.remove(name));
  }
};
