export default function CitySelect({ city1, city2, setCity1, setCity2, cities }) {
  if (!cities || !Array.isArray(cities)) {
    return <p style={{ color: "#fca5a5" }}>Cities list not loaded...</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4" style={{ color: "#e2e8f0" }}>Choose Cities</h2>
      <div className="grid grid-cols-2 gap-4">
        <select
          className="p-3 rounded-lg transition-all duration-200"
          value={city1}
          onChange={(e) => setCity1(e.target.value)}
          style={{ background: "#1e293b", border: "1px solid rgba(51, 65, 85, 0.5)", color: "#f1f5f9" }}
        >
          {cities.map((c) => (
            <option key={c.name} value={c.name}>{c.name}</option>
          ))}
        </select>
        <select
          className="p-3 rounded-lg transition-all duration-200"
          value={city2}
          onChange={(e) => setCity2(e.target.value)}
          style={{ background: "#1e293b", border: "1px solid rgba(51, 65, 85, 0.5)", color: "#f1f5f9" }}
        >
          {cities.map((c) => (
            <option key={c.name} value={c.name}>{c.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
