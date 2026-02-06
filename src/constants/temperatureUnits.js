export const TEMPERATURE_UNITS = {
  FAHRENHEIT: 'F',
  CELSIUS: 'C',
  KELVIN: 'K',

  getAll: () => ['F', 'C', 'K'],

  isValid: (value) => ['F', 'C', 'K'].includes(value),
};

export const STORAGE_KEYS = {
  TEMPERATURE_UNIT: 'weatherapp.temperatureUnit',
};