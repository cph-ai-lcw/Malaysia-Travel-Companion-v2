import { APP_CONFIG, LANGUAGES, TEXT } from "../../data/system/index.js";
import { storage } from "./storage.js";

let language = storage.get("language", APP_CONFIG.defaultLanguage);

export function getLanguage() { return language; }

export function setLanguage(code) {
  if (!LANGUAGES[code]) return;
  language = code;
  storage.set("language", code);
  document.documentElement.lang = LANGUAGES[code].htmlLang;
  translateStaticText();
  window.dispatchEvent(new CustomEvent("app:languagechange", { detail: code }));
}

export function toggleLanguage() {
  setLanguage(language === "zh-TW" ? "vi" : "zh-TW");
}

export function t(key) {
  return TEXT[language]?.[key] ?? TEXT["zh-TW"]?.[key] ?? key;
}

export function translateStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
}
