import { useCallback, useEffect, useState, useMemo } from 'react';
import { TEMPERATURE_UNITS, STORAGE_KEYS } from '../constants/temperatureUnits';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import './AppLayout.css';

const getInitialUnit = () => {
  const saved = localStorage.getItem(STORAGE_KEYS.TEMPERATURE_UNIT);
  return TEMPERATURE_UNITS.isValid(saved)
    ? saved
    : TEMPERATURE_UNITS.CELSIUS;
};

export function AppLayout({ children }) {
  const [unit, setUnit] = useState(getInitialUnit);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TEMPERATURE_UNIT, unit);
  }, [unit]);

  const handleUnitChange = useCallback((newUnit) => {
    setUnit(newUnit);
  }, []);

  const unitInfo = useMemo(() => {
  return {
    unit,
    isCelsius: unit === 'C',
    isFahrenheit: unit === 'F',
    isKelvin: unit === 'K',
  };
  }, [unit]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value);
  }, []);

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Topbar unit={unit} unitInfo={unitInfo} onUnitChange={handleUnitChange} searchQuery={searchQuery} onSearchChange={handleSearchChange}/>
        <div className="page">
          {children({ unit, searchQuery })}
        </div>
      </main>
    </div>
  );
}