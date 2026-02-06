import './Topbar.css';
import { UnitToggle } from './UnitToggle';

export function Topbar({ unit, unitInfo, onUnitChange, searchQuery, onSearchChange }) {
  return (
    <div className="topbar">
      <div className="search">
        <span className="search__icon">🔍</span>
        <input
          type="text"
          placeholder="Search city..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search__input"
        />
      </div>

      <div className="topbar__right">
        <UnitToggle unit={unit} 
        onChange={onUnitChange} 
        isCelsius={unitInfo.isCelsius} 
        isFahrenheit={unitInfo.isFahrenheit}
        isKelvin={unitInfo.isKelvin} />
      </div>
    </div>
  );
}
