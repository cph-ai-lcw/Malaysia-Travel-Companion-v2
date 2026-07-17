export function showToast(message, duration = 2200) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), duration);
}

export function openSheet() {
  const sheet = document.getElementById("sideSheet");
  const backdrop = document.getElementById("sheetBackdrop");
  if (!sheet || !backdrop) return;
  backdrop.hidden = false;
  requestAnimationFrame(() => sheet.classList.add("open"));
  sheet.setAttribute("aria-hidden", "false");
}

export function closeSheet() {
  const sheet = document.getElementById("sideSheet");
  const backdrop = document.getElementById("sheetBackdrop");
  if (!sheet || !backdrop) return;
  sheet.classList.remove("open");
  sheet.setAttribute("aria-hidden", "true");
  setTimeout(() => { backdrop.hidden = true; }, 250);
}
