export function convertFromCelsius(value, unit) {
  if (typeof value !== 'number') return '-';
    
  switch (unit) {
    case 'F':
      return Math.round((value * 9) / 5 + 32);
    case 'K':
      return Math.round(value + 273.15);
    case 'C':
    default:
      return Math.round(value);
  }
}
