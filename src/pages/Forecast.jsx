import './Forecast.css';
import { AppLayout } from '../components/AppLayout';
import { ForecastCard } from '../components/details/ForecastCard';
import { convertFromCelsius } from '../functions/temperature';

const FORECASTS_BY_CITY = {
  warsaw: {
    name: 'Warsaw',
    country: 'Poland',
    forecast: [
      { day: 'SAT', icon: '☀️', tempC: 14, lowC: 8 },
      { day: 'SUN', icon: '🌤️', tempC: 13, lowC: 7 },
      { day: 'MON', icon: '☁️', tempC: 11, lowC: 6 },
      { day: 'TUE', icon: '🌧️', tempC: 9, lowC: 4 },
      { day: 'WED', icon: '❄️', tempC: 4, lowC: -2 },
    ],
  },
  krakow: {
    name: 'Krakow',
    country: 'Poland',
    forecast: [
      { day: 'SAT', icon: '🌤️', tempC: 12, lowC: 6 },
      { day: 'SUN', icon: '☀️', tempC: 13, lowC: 7 },
      { day: 'MON', icon: '☁️', tempC: 10, lowC: 5 },
      { day: 'TUE', icon: '🌧️', tempC: 8, lowC: 3 },
      { day: 'WED', icon: '🌧️', tempC: 7, lowC: 2 },
    ],
  },
  wroclaw: {
    name: 'Wroclaw',
    country: 'Poland',
    forecast: [
      { day: 'SAT', icon: '☀️', tempC: 13, lowC: 7 },
      { day: 'SUN', icon: '🌤️', tempC: 12, lowC: 6 },
      { day: 'MON', icon: '☁️', tempC: 10, lowC: 5 },
      { day: 'TUE', icon: '🌧️', tempC: 9, lowC: 4 },
      { day: 'WED', icon: '☁️', tempC: 8, lowC: 3 },
    ],
  },
  gdansk: {
    name: 'Gdansk',
    country: 'Poland',
    forecast: [
      { day: 'SAT', icon: '🌧️', tempC: 8, lowC: 3 },
      { day: 'SUN', icon: '🌧️', tempC: 7, lowC: 2 },
      { day: 'MON', icon: '☁️', tempC: 6, lowC: 1 },
      { day: 'TUE', icon: '🌧️', tempC: 6, lowC: 1 },
      { day: 'WED', icon: '❄️', tempC: 3, lowC: -1 },
    ],
  },
  poznan: {
    name: 'Poznan',
    country: 'Poland',
    forecast: [
      { day: 'SAT', icon: '🌫️', tempC: 9, lowC: 2 },
      { day: 'SUN', icon: '☁️', tempC: 10, lowC: 3 },
      { day: 'MON', icon: '☁️', tempC: 9, lowC: 2 },
      { day: 'TUE', icon: '🌧️', tempC: 8, lowC: 1 },
      { day: 'WED', icon: '🌤️', tempC: 9, lowC: 2 },
    ],
  },
};

export function Forecast() {
  const cities = Object.entries(FORECASTS_BY_CITY);

  return (
    <AppLayout>
      {({ unit }) => {
        const cards = cities.map(([slug, city]) => {
          const convertedForecast = city.forecast.map((d) => ({
            ...d,
            temp: convertFromCelsius(d.tempC, unit),
            low: convertFromCelsius(d.lowC, unit),
            unit,
          }));

          return (
            <section className="forecastPage__city" key={slug}>
              <div className="forecastPage__cityHeader">
                <div className="forecastPage__cityName">{city.name}</div>
                <div className="forecastPage__cityCountry">{city.country}</div>
              </div>

              <ForecastCard forecast={convertedForecast} />
            </section>
          );
        });

        return (
          <div className="forecastPage">
            <h1 className="forecastPage__title">5-Day Forecast</h1>
            <div className="forecastPage__list">{cards}</div>
          </div>
        );
      }}
    </AppLayout>
  );
}