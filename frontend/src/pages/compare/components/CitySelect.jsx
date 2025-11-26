export default function CitySelect({ city1, city2, setCity1, setCity2, cities }) {

  if (!cities || !Array.isArray(cities)) {
    return <p className="text-red-500">Cities list not loaded...</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Choose Cities</h2>

      <div className="grid grid-cols-2 gap-4">

        <select
          className="p-3 border rounded-lg"
          value={city1}
          onChange={(e) => setCity1(e.target.value)}
        >
          {cities.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>

        <select
          className="p-3 border rounded-lg"
          value={city2}
          onChange={(e) => setCity2(e.target.value)}
        >
          {cities.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>

      </div>
    </div>
  );
}
