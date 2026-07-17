import { APP_CONFIG } from "../data/system/index.js";
import { storage } from "./storage.js";

const media = window.matchMedia("(prefers-color-scheme: dark)");
let selectedTheme = storage.get("theme", APP_CONFIG.defaultTheme);

function resolvedTheme() {
  if (selectedTheme === "auto") {
    return media.matches ? "dark" : "light";
  }
  return selectedTheme;
}

export function applyTheme() {
  const theme = resolvedTheme();
  document.documentElement.dataset.theme = theme;

  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#10201e" : "#0f766e");
}

export function getTheme() {
  return selectedTheme;
}

export function setTheme(theme) {
  if (!["auto", "light", "dark"].includes(theme)) return;

  selectedTheme = theme;
  storage.set("theme", theme);
  applyTheme();

  window.dispatchEvent(
    new CustomEvent("app:themechange", { detail: theme })
  );
}

export function cycleTheme() {
  const order = ["auto", "light", "dark"];
  const index = order.indexOf(selectedTheme);
  setTheme(order[(index + 1) % order.length]);
}

media.addEventListener?.("change", () => {
  if (selectedTheme === "auto") applyTheme();
});
