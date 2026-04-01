import { useState } from "react";
import { fetchLiveAQI } from "../api/aqi";
import { cities } from "../data/cities";
import LiveAQIResult from "./home-components/LiveAQIResult";
import PollutantInfoGrid from "./home-components/PollutantInfoGrid";

export default function Home() {
  const [city, setCity] = useState("Delhi");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getAQI = async () => {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetchLiveAQI(city);
      setData(res);
    } catch {
      setError("Could not fetch AQI. Try another city or try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] bg-slate-950 text-white">
      <div className="container-dark py-20">
        <div className="text-center space-y-8 animate-fade-in">

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Live AQI Dashboard
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Check real-time air quality data and understand the pollutants
              affecting your city with our comprehensive environmental intelligence platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto">
            <div className="relative w-full sm:w-80">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="
                  w-full appearance-none rounded-xl border-2 border-slate-700
                  bg-slate-800 px-6 py-4 text-slate-100
                  font-medium shadow-lg hover:shadow-xl transition-all duration-300
                  focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500
                  hover:border-slate-500
                " 
              >
                {cities.map((c) => (
                  <option key={c.name} value={c.name} className="bg-slate-800 text-slate-100">
                    {c.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <button
              onClick={getAQI}
              disabled={loading}
              className="
                btn-primary hover-lift disabled:opacity-50 disabled:cursor-not-allowed
                disabled:transform-none disabled:shadow-none px-8 py-4 text-lg font-semibold
                rounded-xl shadow-md hover:shadow-lg transition-all duration-300
                min-w-[140px] flex items-center justify-center gap-2
              "
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get AQI
                </>
              )}
            </button>
          </div>

          <div className="animate-slide-up">
            <LiveAQIResult loading={loading} error={error} data={data} />
          </div>

          <div className="pt-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Pollutant Information
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Learn about different air pollutants and their impact on air quality
              </p>
            </div>
            <PollutantInfoGrid />
          </div>

        </div>
      </div>
    </div>
  );
}
