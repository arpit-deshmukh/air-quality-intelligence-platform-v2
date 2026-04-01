import BarChart from "../../../components/charts/BarChart";

export default function ChartCompare({ city1, city2, aqi1, aqi2 }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4" style={{ color: "#e2e8f0" }}>AQI Comparison Charts</h2>
      <div className="mb-8">
        <BarChart labels={[city1, city2]} values={[aqi1 || 0, aqi2 || 0]} />
      </div>
    </div>
  );
}
