export function quickLink(icon, route, text) {
  return `
    <button class="quick-link" data-navigate="${route}" type="button">
      <span>${icon}</span>
      <small>${text}</small>
    </button>
  `;
}
