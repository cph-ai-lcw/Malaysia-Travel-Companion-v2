const allowed=new Set(['home','itinerary','my-travel','checklist','wallet','guide','info','leader','leader-rooms','leader-announcements','leader-attendance','leader-backup']);
export function route(){const raw=location.hash.replace(/^#\/?/,'')||'home';return allowed.has(raw)?raw:'home'}
export function initRouter(render){addEventListener('hashchange',render);if(!location.hash)history.replaceState(null,'','#/home')}
