export default function PollutantTable({ cityA, cityB }) {
  const pollutants = ["pm25", "pm10", "no2", "so2", "o3", "co"];

  return (
    <table className="w-full border mb-10 rounded-xl overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3">Pollutant</th>
          <th className="p-3">{cityA.city}</th>
          <th className="p-3">{cityB.city}</th>
        </tr>
      </thead>

      <tbody>
        {pollutants.map((p) => (
          <tr key={p} className="text-center border-t">
            <td className="p-3 uppercase">{p}</td>
            <td className="p-3">{cityA[p]}</td>
            <td className="p-3">{cityB[p]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
