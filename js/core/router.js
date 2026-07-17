const routes = new Map();
let fallback = "home";

export function registerRoute(name, renderer) { routes.set(name, renderer); }

export function currentRoute() {
  const value = location.hash.replace(/^#\/?/, "").split("?")[0];
  return value || fallback;
}

export function navigate(name) { location.hash = `#/${name}`; }

export function renderRoute() {
  const requested = currentRoute();
  const route = routes.has(requested) ? requested : fallback;
  const renderer = routes.get(route);
  const app = document.getElementById("app");

  if (!app || !renderer) return;

  app.innerHTML = renderer();
  app.focus({ preventScroll: true });

  document.querySelectorAll("[data-route]").forEach((item) => {
    item.classList.toggle("active", item.dataset.route === route);
  });

  window.scrollTo({ top: 0, behavior: "instant" });
  window.dispatchEvent(new CustomEvent("app:routechange", { detail: route }));
}

export function startRouter() {
  window.addEventListener("hashchange", renderRoute);
  if (!location.hash) location.replace("#/home");
  renderRoute();
}
