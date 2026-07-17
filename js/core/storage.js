import { APP_CONFIG } from "../../data/system/index.js";

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
  clear() {
    Object.keys(localStorage)
      .filter((item) => item.startsWith(`${APP_CONFIG.storagePrefix}:`))
      .forEach((item) => localStorage.removeItem(item));
  }
};
