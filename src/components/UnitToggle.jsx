import './UnitToggle.css';
import { TEMPERATURE_UNITS } from '../constants/temperatureUnits';

const labelForUnit = (u) => {
  if (u === TEMPERATURE_UNITS.CELSIUS) return 'CELSIUS';
  if (u === TEMPERATURE_UNITS.FAHRENHEIT) return 'FAHR';
  if (u === TEMPERATURE_UNITS.KELVIN) return 'KELVIN';
  return u;
};

export function UnitToggle({ unit, onChange }) {
  return (
    <div className="toggle">
      {TEMPERATURE_UNITS.getAll().map((u) => (
        <button
          key={u}
          className={`toggle__btn ${unit === u ? 'toggle__btn--active' : ''}`}
          onClick={() => onChange(u)}
        >
          {labelForUnit(u)}
        </button>
      ))}
    </div>
  );
}