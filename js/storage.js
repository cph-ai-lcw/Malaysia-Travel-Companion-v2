import { APP_CONFIG } from "../data/system/index.js";

const prefix = APP_CONFIG.storagePrefix || "mtc-v2";
const key = (name) => `${prefix}:${name}`;

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
  }
};
