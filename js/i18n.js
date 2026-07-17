import { APP_CONFIG, LANGUAGES, TEXT } from "../data/system/index.js";
import { storage } from "./storage.js";

let currentLanguage = storage.get("language", APP_CONFIG.defaultLanguage);

export function getLanguage() {
  return currentLanguage;
}

export function setLanguage(code) {
  if (!LANGUAGES[code]) return;

  currentLanguage = code;
  storage.set("language", code);
  document.documentElement.lang = LANGUAGES[code].htmlLang;
  translateStaticText();

  window.dispatchEvent(
    new CustomEvent("app:languagechange", { detail: code })
  );
}

export function toggleLanguage() {
  setLanguage(currentLanguage === "zh-TW" ? "vi" : "zh-TW");
}

export function t(key) {
  return TEXT[currentLanguage]?.[key]
    ?? TEXT["zh-TW"]?.[key]
    ?? key;
}

export function translateStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
}
