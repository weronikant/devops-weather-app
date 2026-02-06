import './CityCard.css';


export function CityCard({ city, onSelect }) {
  return (
      <article className="card"
            role="button"
            onClick={() => onSelect(city.slug)}>
        <div className="card__top">
          <div>
            <div className="card__city">{city.name}</div>
            <div className="card__country">{city.country}</div>
          </div>
          <div className="card__icon">{city.icon}</div>
        </div>

        <div className="card__mid">
          <div className="card__temp">
            <span className="card__tempValue">{city.temp}°{city.unit}</span>
          </div>

          <div className="card__desc">
            <div className="card__condition">{city.condition}</div>
            <div className="card__feels">Feels like {city.feelsLike}°{city.unit}</div>
          </div>
        </div>

        <div className="card__stats">
          <div className="stat">
            <div className="stat__label">HIGH</div>
            <div className="stat__value">{city.high}°{city.unit}</div>
          </div>
          <div className="stat">
            <div className="stat__label">LOW</div>
            <div className="stat__value">{city.low}°{city.unit}</div>
          </div>
          <div className="stat">
            <div className="stat__label">HUMIDITY</div>
            <div className="stat__value">{city.humidity}%</div>
          </div>
        </div>
      </article>
    
  );
}
