export function daysBetween(startDate, endDate = new Date()) {
  const start = new Date(`${startDate}T00:00:00`);
  return Math.ceil((start - endDate) / 86400000);
}

export function formatDate(dateString, locale = "zh-TW") {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric", month: "2-digit", day: "2-digit", weekday: "short"
  }).format(new Date(`${dateString}T00:00:00`));
}
