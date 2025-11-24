const breakpoints = {
  pm25: [
    { c: [0, 30], a: [0, 50] },
    { c: [31, 60], a: [51, 100] },
    { c: [61, 90], a: [101, 200] },
    { c: [91, 120], a: [201, 300] },
    { c: [121, 250], a: [301, 400] },
    { c: [251, 500], a: [401, 500] }
  ],
  pm10: [
    { c: [0, 50], a: [0, 50] },
    { c: [51, 100], a: [51, 100] },
    { c: [101, 250], a: [101, 200] },
    { c: [251, 350], a: [201, 300] },
    { c: [351, 430], a: [301, 400] },
    { c: [431, 600], a: [401, 500] }
  ]
};

const compute = (value, arr) => {
  for (const r of arr) {
    const [cl, ch] = r.c;
    const [al, ah] = r.a;
    if (value >= cl && value <= ch) {
      return Math.round(((ah - al) / (ch - cl)) * (value - cl) + al);
    }
  }
  return null;
};

export const calculateAQI = ({ pm25, pm10 }) => {
  const values = [];
  if (pm25 != null) values.push(compute(pm25, breakpoints.pm25));
  if (pm10 != null) values.push(compute(pm10, breakpoints.pm10));
  values.filter(v => v !== null);

  return values.length ? Math.max(...values) : null;
};
