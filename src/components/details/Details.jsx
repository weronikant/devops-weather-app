import { CurrentConditionsCard } from './CurrentConditionsCard';
import { ForecastCard } from './ForecastCard';
import { MetricCard } from './MetricCard';
import { convertFromCelsius } from '../../functions/temperature';
import './Details.css'; 

const MOCK_DETAILS = {
  warsaw: {
    city: 'Warsaw',
    country: 'Poland',
    region: 'Europe',
    dateText: 'Friday, Oct 27th • 14:30 PM',
    current: {
      tempC: 12,
      condition: 'Partly Cloudy',
      feelsLikeC: 10,
      humidity: 65,
      visibilityKm: 12,
      icon: '⛅',
    },
    forecast: [
      { day: 'SAT', icon: '☀️', tempC: 14, lowC: 8 },
      { day: 'SUN', icon: '🌤️', tempC: 13, lowC: 7 },
      { day: 'MON', icon: '☁️', tempC: 11, lowC: 6 },
      { day: 'TUE', icon: '🌧️', tempC: 9, lowC: 4 },
      { day: 'WED', icon: '❄️', tempC: 4, lowC: -2 },
    ],
    metrics: [
      {
        title: 'Precipitation',
        leftBig: '15%',
        leftLabel: 'Probability',
        rightBig: 'Rain',
        rightLabel: 'Type',
        footerLeft: 'Current Amount',
        footerRight: '1.2 mm/m²',
      },
      {
        title: 'Wind Speed',
        leftBig: '14',
        leftLabel: 'km/h',
        rightBig: 'NORTH-WEST',
        rightLabel: '(NW)',
        footerLeft: 'Direction',
        footerRight: 'Stable',
      },
      {
        title: 'Cloud Cover',
        leftBig: '45%',
        leftLabel: 'Total Coverage',
        rightBig: 'Scattered',
        rightLabel: 'clouds',
        footerLeft: 'Note',
        footerRight: 'Clearing by sunset',
      },
      {
        title: 'UV Index',
        leftBig: 'Moderate',
        leftLabel: 'Level 4',
        rightBig: '',
        rightLabel: '',
        footerLeft: 'Advice',
        footerRight: 'Use SPF',
      },
    ],
  },

  krakow: {
    city: 'Krakow',
    country: 'Poland',
    region: 'Europe',
    dateText: 'Friday, Oct 27th • 13:50 PM',
    current: {
      tempC: 10,
      condition: 'Sunny',
      feelsLikeC: 9,
      humidity: 45,
      visibilityKm: 14,
      icon: '☀️',
    },
    forecast: [
      { day: 'SAT', icon: '☀️', tempC: 12, lowC: 6 },
      { day: 'SUN', icon: '🌤️', tempC: 13, lowC: 7 },
      { day: 'MON', icon: '☁️', tempC: 10, lowC: 5 },
      { day: 'TUE', icon: '🌧️', tempC: 8, lowC: 3 },
      { day: 'WED', icon: '🌧️', tempC: 7, lowC: 2 },
    ],
    metrics: [
      {
        title: 'Precipitation',
        leftBig: '10%',
        leftLabel: 'Probability',
        rightBig: 'None',
        rightLabel: 'Type',
        footerLeft: 'Current Amount',
        footerRight: '0 mm/m²',
      },
      {
        title: 'Wind Speed',
        leftBig: '9',
        leftLabel: 'km/h',
        rightBig: 'WEST',
        rightLabel: '(W)',
        footerLeft: 'Direction',
        footerRight: 'Light breeze',
      },
      {
        title: 'Cloud Cover',
        leftBig: '20%',
        leftLabel: 'Total Coverage',
        rightBig: 'Few',
        rightLabel: 'clouds',
        footerLeft: 'Note',
        footerRight: 'Clear skies',
      },
      {
        title: 'UV Index',
        leftBig: 'Low',
        leftLabel: 'Level 2',
        rightBig: '',
        rightLabel: '',
        footerLeft: 'Advice',
        footerRight: 'No protection needed',
      },
    ],
  },

  wroclaw: {
    city: 'Wroclaw',
    country: 'Poland',
    region: 'Europe',
    dateText: 'Friday, Oct 27th • 14:10 PM',
    current: {
      tempC: 11,
      condition: 'Cloudy',
      feelsLikeC: 9,
      humidity: 60,
      visibilityKm: 11,
      icon: '☁️',
    },
    forecast: [
      { day: 'SAT', icon: '🌤️', tempC: 13, lowC: 7 },
      { day: 'SUN', icon: '☀️', tempC: 14, lowC: 8 },
      { day: 'MON', icon: '☁️', tempC: 11, lowC: 6 },
      { day: 'TUE', icon: '🌧️', tempC: 9, lowC: 4 },
      { day: 'WED', icon: '🌧️', tempC: 8, lowC: 3 },
    ],
    metrics: [
      {
        title: 'Precipitation',
        leftBig: '25%',
        leftLabel: 'Probability',
        rightBig: 'Rain',
        rightLabel: 'Type',
        footerLeft: 'Current Amount',
        footerRight: '0.6 mm/m²',
      },
      {
        title: 'Wind Speed',
        leftBig: '12',
        leftLabel: 'km/h',
        rightBig: 'SOUTH',
        rightLabel: '(S)',
        footerLeft: 'Direction',
        footerRight: 'Moderate',
      },
      {
        title: 'Cloud Cover',
        leftBig: '60%',
        leftLabel: 'Total Coverage',
        rightBig: 'Broken',
        rightLabel: 'clouds',
        footerLeft: 'Note',
        footerRight: 'Overcast afternoon',
      },
      {
        title: 'UV Index',
        leftBig: 'Low',
        leftLabel: 'Level 1',
        rightBig: '',
        rightLabel: '',
        footerLeft: 'Advice',
        footerRight: 'Minimal exposure',
      },
    ],
  },

  gdansk: {
    city: 'Gdansk',
    country: 'Poland',
    region: 'Europe',
    dateText: 'Friday, Oct 27th • 15:00 PM',
    current: {
      tempC: 8,
      condition: 'Light Rain',
      feelsLikeC: 5,
      humidity: 88,
      visibilityKm: 9,
      icon: '🌧️',
    },
    forecast: [
      { day: 'SAT', icon: '🌧️', tempC: 9, lowC: 4 },
      { day: 'SUN', icon: '🌧️', tempC: 8, lowC: 3 },
      { day: 'MON', icon: '☁️', tempC: 7, lowC: 2 },
      { day: 'TUE', icon: '🌧️', tempC: 6, lowC: 1 },
      { day: 'WED', icon: '❄️', tempC: 3, lowC: -1 },
    ],
    metrics: [
      {
        title: 'Precipitation',
        leftBig: '60%',
        leftLabel: 'Probability',
        rightBig: 'Rain',
        rightLabel: 'Type',
        footerLeft: 'Current Amount',
        footerRight: '3.1 mm/m²',
      },
      {
        title: 'Wind Speed',
        leftBig: '22',
        leftLabel: 'km/h',
        rightBig: 'NORTH',
        rightLabel: '(N)',
        footerLeft: 'Direction',
        footerRight: 'Strong wind',
      },
      {
        title: 'Cloud Cover',
        leftBig: '90%',
        leftLabel: 'Total Coverage',
        rightBig: 'Overcast',
        rightLabel: 'clouds',
        footerLeft: 'Note',
        footerRight: 'Stormy conditions',
      },
      {
        title: 'UV Index',
        leftBig: 'Very Low',
        leftLabel: 'Level 0',
        rightBig: '',
        rightLabel: '',
        footerLeft: 'Advice',
        footerRight: 'No risk',
      },
    ],
  },

  poznan: {
    city: 'Poznan',
    country: 'Poland',
    region: 'Europe',
    dateText: 'Friday, Oct 27th • 14:00 PM',
    current: {
      tempC: 9,
      condition: 'Foggy',
      feelsLikeC: 7,
      humidity: 95,
      visibilityKm: 6,
      icon: '🌫️',
    },
    forecast: [
      { day: 'SAT', icon: '🌫️', tempC: 10, lowC: 5 },
      { day: 'SUN', icon: '☁️', tempC: 11, lowC: 6 },
      { day: 'MON', icon: '☁️', tempC: 9, lowC: 4 },
      { day: 'TUE', icon: '🌧️', tempC: 8, lowC: 3 },
      { day: 'WED', icon: '🌤️', tempC: 9, lowC: 4 },
    ],
    metrics: [
      {
        title: 'Precipitation',
        leftBig: '20%',
        leftLabel: 'Probability',
        rightBig: 'Drizzle',
        rightLabel: 'Type',
        footerLeft: 'Current Amount',
        footerRight: '0.4 mm/m²',
      },
      {
        title: 'Wind Speed',
        leftBig: '7',
        leftLabel: 'km/h',
        rightBig: 'EAST',
        rightLabel: '(E)',
        footerLeft: 'Direction',
        footerRight: 'Calm',
      },
      {
        title: 'Cloud Cover',
        leftBig: '70%',
        leftLabel: 'Total Coverage',
        rightBig: 'Dense',
        rightLabel: 'fog',
        footerLeft: 'Note',
        footerRight: 'Reduced visibility',
      },
      {
        title: 'UV Index',
        leftBig: 'Low',
        leftLabel: 'Level 1',
        rightBig: '',
        rightLabel: '',
        footerLeft: 'Advice',
        footerRight: 'No protection needed',
      },
    ],
  },
};

export function Details({ citySlug, unit, onBack }) {
  const data = MOCK_DETAILS[citySlug];


  const current = {
    ...data.current,
    temp: convertFromCelsius(data.current.tempC, unit),
    feelsLike: convertFromCelsius(data.current.feelsLikeC, unit),
    unit,
  };

  const forecast = data.forecast.map((d) => ({
    ...d,
    temp: convertFromCelsius(d.tempC, unit),
    low: convertFromCelsius(d.lowC, unit),
    unit,
  }));

  return (
    <div className="details">
      <div className="details__top">
        <div>
          <div className="details__crumbs">
            {data.region} <span className="details__dot">•</span> {data.country}
          </div>
          <h1 className="details__city">{data.city}</h1>
          <div className="details__date">{data.dateText}</div>
        </div>

        
      </div>

      <div className="details__grid">
        <CurrentConditionsCard current={current} />
        <ForecastCard forecast={forecast} />
        {data.metrics.map((m) => (
          <MetricCard key={m.title} metric={m} />
        ))}
      </div>
      <div className="details__actions">
        <button className="details__btn" onClick={onBack}>← Back</button>
      </div>
    </div>
  );
}