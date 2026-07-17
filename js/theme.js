import { APP_CONFIG } from "../data/system/index.js";
import { storage } from "./storage.js";

const media = window.matchMedia("(prefers-color-scheme: dark)");
let selectedTheme = storage.get("theme", APP_CONFIG.defaultTheme);

function resolvedTheme() {
  return selectedTheme === "auto" ? (media.matches ? "dark" : "light") : selectedTheme;
}

export function applyTheme() {
  document.documentElement.dataset.theme = resolvedTheme();
  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", resolvedTheme() === "dark" ? "#10201e" : "#0f766e");
}

export function getTheme() {
  return selectedTheme;
}

export function setTheme(theme) {
  if (!["light", "dark", "auto"].includes(theme)) return;
  selectedTheme = theme;
  storage.set("theme", theme);
  applyTheme();
  window.dispatchEvent(new CustomEvent("app:themechange", { detail: theme }));
}

export function cycleTheme() {
  const order = ["auto", "light", "dark"];
  setTheme(order[(order.indexOf(selectedTheme) + 1) % order.length]);
}

media.addEventListener?.("change", () => {
  if (selectedTheme === "auto") applyTheme();
});
