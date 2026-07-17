export function flightCard(flight, title) {
  const [from, to] = flight.route.split("→").map((item) => item.trim());
  return `
    <section class="card">
      <span class="status-chip">${title} · ${flight.number}</span>
      <div class="flight-row" style="margin-top:14px">
        <div class="flight-airport">
          <strong>${from}</strong>
          <small>${flight.departureTime}</small>
        </div>
        <div class="flight-arrow">→</div>
        <div class="flight-airport" style="text-align:right">
          <strong>${to}</strong>
          <small>${flight.arrivalTime}</small>
        </div>
      </div>
    </section>
  `;
}
