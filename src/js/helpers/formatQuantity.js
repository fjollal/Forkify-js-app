export default function formatQuantity(quantity) {
  if (quantity == null || quantity === '') return '';

  const n = Number(quantity);
  if (Number.isNaN(n)) return String(quantity);

  const map = {
    0.125: '1/8',
    0.25: '1/4',
    0.333: '1/3',
    0.375: '3/8',
    0.5: '1/2',
    0.625: '5/8',
    0.666: '2/3',
    0.75: '3/4',
    0.875: '7/8',
  };

  for (const [val, str] of Object.entries(map)) {
    if (Math.abs(n - Number(val)) < 0.02) return str;
  }

  return n % 1 === 0 ? String(n) : String(Math.round(n * 100) / 100);
}
