import { useEffect, useState } from "react";
import { fetchHourlyAQI } from "../api/aqi";
import LineChart from "../components/charts/LineChart";

export default function Analytics() {
  const [city, setCity] = useState("Delhi");
  const [labels, setLabels] = useState([]);
  const [aqi, setAqi] = useState([]);
  const [pm25, setPm25] = useState([]);
  const [pm10, setPm10] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    const res = await fetchHourlyAQI(city);
    const d = res.data;

    setLabels(d.hours);
    setAqi(d.aqi);
    setPm25(d.pm25);
    setPm10(d.pm10);

    setLoading(false);
  };

  useEffect(() => {
    load();
  }, [city]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AQI Trends</h1>

      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-3 border rounded-xl mb-6"
      >
        {["Delhi","Mumbai","Bangalore","Hyderabad","Kolkata","Chennai","Pune","Ahmedabad"]
          .map(c => <option key={c}>{c}</option>)}
      </select>

      {loading && (
        <div className="text-lg font-semibold text-gray-500">
          Loading charts…
        </div>
      )}

      {!loading && (
        <div className="space-y-6">
          <LineChart title="AQI" labels={labels} data={aqi} />
          <LineChart title="PM2.5" labels={labels} data={pm25} />
          <LineChart title="PM10" labels={labels} data={pm10} />
        </div>
      )}
    </div>
  );
}
