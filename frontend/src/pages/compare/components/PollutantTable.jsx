export default function PollutantTable({ city1, city2, data1 = {}, data2 = {} }) {
  const pollutants = [
    { key: "pm25", label: "PM2.5" },
    { key: "pm10", label: "PM10" },
    { key: "no2", label: "NO₂" },
    { key: "so2", label: "SO₂" },
    { key: "co", label: "CO" },
    { key: "o3", label: "O₃" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Pollutant Level Comparison</h2>

      <table className="w-full border rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Pollutant</th>
            <th className="p-3">{city1}</th>
            <th className="p-3">{city2}</th>
          </tr>
        </thead>

        <tbody>
          {pollutants.map((p) => (
            <tr key={p.key} className="border-t">
              <td className="p-3 font-medium">{p.label}</td>
              <td className="p-3">{data1[p.key] ?? "N/A"}</td>
              <td className="p-3">{data2[p.key] ?? "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
