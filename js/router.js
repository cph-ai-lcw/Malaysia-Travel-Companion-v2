const routes = new Map();
let fallbackRoute = "home";

export function registerRoute(name, renderer) {
  routes.set(name, renderer);
}

export function setFallbackRoute(name) {
  fallbackRoute = name;
}

export function currentRoute() {
  const raw = location.hash.replace(/^#\/?/, "");
  return raw.split("?")[0] || fallbackRoute;
}

export function navigate(name) {
  location.hash = `#/${name}`;
}

export function renderRoute() {
  const requested = currentRoute();
  const name = routes.has(requested) ? requested : fallbackRoute;
  const app = document.getElementById("app");
  const renderer = routes.get(name);

  if (!app || !renderer) return;

  app.innerHTML = renderer();
  app.focus({ preventScroll: true });

  document.querySelectorAll("[data-route]").forEach((item) => {
    item.classList.toggle("active", item.dataset.route === name);
  });

  window.scrollTo({ top: 0, behavior: "instant" });

  window.dispatchEvent(
    new CustomEvent("app:routechange", { detail: name })
  );
}

export function startRouter() {
  window.addEventListener("hashchange", renderRoute);

  if (!location.hash) {
    location.replace("#/home");
  }

  renderRoute();
}
