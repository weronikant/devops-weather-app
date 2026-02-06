import './Home.css';
import { convertFromCelsius } from '../functions/temperature';
import { AppLayout } from '../components/AppLayout';
import { CityCard } from '../components/CityCard';
import { AddCityCard } from '../components/AddCityCard';
import { useReducer } from 'react';
import { Details } from '../components/details/Details';

const initialState = {
  view: 'LIST',      
  selectedCitySlug: null,
};

function homeReducer(state, action) {
  switch (action.type) {
    case 'OPEN_DETAILS':
      return {
        view: 'DETAILS',
        selectedCitySlug: action.payload,
      };

    case 'BACK_TO_LIST':
      return initialState;

    default:
      return state;
  }
}

export function Home() {
  const [state, dispatch] = useReducer(homeReducer, initialState);
  
  const cities = [
    {
      name: 'Warsaw',
      country: 'Poland',
      tempC: 2,
      feelsLikeC: -1,
      condition: 'Cloudy',
      highC: 4,
      lowC: -1,
      humidity: 72,
      icon: '☁️',
      slug: 'warsaw',
    },
    {
      name: 'Krakow',
      country: 'Poland',
      tempC: 4,
      feelsLikeC: 2,
      condition: 'Sunny',
      highC: 6,
      lowC: 1,
      humidity: 45,
      icon: '☀️',
      slug: 'krakow',
    },
    {
      name: 'Wroclaw',
      country: 'Poland',
      tempC: 3,
      feelsLikeC: 1,
      condition: 'P. Cloudy',
      highC: 5,
      lowC: 0,
      humidity: 60,
      icon: '🌤️',
      slug: 'wroclaw',
    },
    {
      name: 'Gdansk',
      country: 'Poland',
      tempC: 1,
      feelsLikeC: -3,
      condition: 'Light Rain',
      highC: 3,
      lowC: -2,
      humidity: 88,
      icon: '💧',
      slug: 'gdansk',
    },
    {
      name: 'Poznan',
      country: 'Poland',
      tempC: 2,
      feelsLikeC: 0,
      condition: 'Foggy',
      highC: 4,
      lowC: -1,
      humidity: 95,
      icon: '🌫️',
      slug: 'poznan',
    },
  ];

 return (
    <AppLayout>
      {({ unit, searchQuery }) => {
        const query = (searchQuery ?? '').trim().toLowerCase();

        const filteredCities = cities.filter((city) =>
          city.name.toLowerCase().includes(query)
        );

        const visibleCities = filteredCities.map((c) => ({
          ...c,
          temp: convertFromCelsius(c.tempC, unit),
          feelsLike: convertFromCelsius(c.feelsLikeC, unit),
          high: convertFromCelsius(c.highC, unit),
          low: convertFromCelsius(c.lowC, unit),
          unit,
        }));

        return (
          <div className="home">
            <h1 className="home__title">Weather Dashboard</h1>

            {state.view === 'DETAILS' ? (
              <Details
                citySlug={state.selectedCitySlug}
                unit={unit}
                onBack={() => dispatch({ type: 'BACK_TO_LIST' })}
              />
            ) : visibleCities.length === 0 ? (
              <div className="home__empty">
                No cities found for “{searchQuery}”
              </div>
            ) : (
              <div className="home__grid">
                {visibleCities.map((city) => (
                  <CityCard
                    key={city.slug}
                    city={city}
                    onSelect={(slug) =>
                      dispatch({ type: 'OPEN_DETAILS', payload: slug })
                    }
                  />
                ))}
                <AddCityCard />
              </div>
            )}
          </div>
        );
      }}
    </AppLayout>
  );
}