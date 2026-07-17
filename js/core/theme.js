import { APP_CONFIG } from "../../data/system/index.js";
import { storage } from "./storage.js";

const media = window.matchMedia("(prefers-color-scheme: dark)");
let theme = storage.get("theme", APP_CONFIG.defaultTheme);

function resolved() {
  return theme === "auto" ? (media.matches ? "dark" : "light") : theme;
}

export function applyTheme() {
  const value = resolved();
  document.documentElement.dataset.theme = value;
  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", value === "dark" ? "#10201e" : "#0f766e");
}

export function getTheme() { return theme; }

export function setTheme(value) {
  if (!["auto","light","dark"].includes(value)) return;
  theme = value;
  storage.set("theme", value);
  applyTheme();
  window.dispatchEvent(new CustomEvent("app:themechange", { detail: value }));
}

export function cycleTheme() {
  const order = ["auto","light","dark"];
  setTheme(order[(order.indexOf(theme) + 1) % order.length]);
}

media.addEventListener?.("change", () => {
  if (theme === "auto") applyTheme();
});
