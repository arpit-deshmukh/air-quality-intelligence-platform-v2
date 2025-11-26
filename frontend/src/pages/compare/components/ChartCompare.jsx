import BarChart from "../../../components/charts/BarChart";
import LineChart from "../../../components/charts/LineChart";

export default function ChartCompare({ city1, city2, aqi1, aqi2 }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">AQI Comparison Charts</h2>

      {/* Bar Chart */}
      <div className="mb-8">
        <BarChart labels={[city1, city2]} values={[aqi1 || 0, aqi2 || 0]} />
      </div>

      {/* Trend (dummy for now)
      <LineChart
        labels={["1", "2", "3", "4", "5"]}
        values={[50, 70, 90, 60, 80]}
      /> */}
    </div>
  );
}
