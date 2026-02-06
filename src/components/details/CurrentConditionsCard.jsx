import './DetailsCards.css';

export function CurrentConditionsCard({ current }) {
  return (
    <section className="bigCard">
      <div className="bigCard__badge">LIVE CONDITIONS</div>

      <div className="bigCard__row">
        <div className="bigCard__temp">
          <span className="bigCard__tempValue">{current.temp}°{current.unit}</span>
        </div>

        <div className="bigCard__icon">{current.icon}</div>
      </div>

      <div className="bigCard__condition">{current.condition}</div>

      <div className="bigCard__footer">
        <div className="miniStat">
          <div className="miniStat__label">FEELS LIKE</div>
          <div className="miniStat__value">{current.feelsLike}°{current.unit}</div>
        </div>
        <div className="miniStat">
          <div className="miniStat__label">HUMIDITY</div>
          <div className="miniStat__value">{current.humidity}%</div>
        </div>
        <div className="miniStat">
          <div className="miniStat__label">VISIBILITY</div>
          <div className="miniStat__value">{current.visibilityKm} km</div>
        </div>
      </div>
    </section>
  );
}
