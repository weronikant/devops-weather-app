import './DetailsCards.css';

export function ForecastCard({ forecast }) {
  return (
    <section className="cardPanel2">
      <div className="cardPanel__top">
        <h3 className="cardPanel__title">5-Day Forecast</h3>
      </div>

      <div className="forecast">
        {forecast.map((d) => (
          <div className="forecast__day" key={d.day}>
            <div className="forecast__label">{d.day}</div>
            <div className="forecast__icon">{d.icon}</div>
            <div className="forecast__temp">{d.temp}°{d.unit}</div>
            <div className="forecast__low">{d.low}°{d.unit}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
