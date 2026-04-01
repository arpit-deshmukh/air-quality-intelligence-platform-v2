const POLLUTANT_DATA = [
  { name: "PM2.5", label: "Fine Particles", unit: "μg/m³" },
  { name: "PM10", label: "Coarse Particles", unit: "μg/m³" },
  { name: "NO₂", label: "Nitrogen Dioxide", unit: "ppb" },
  { name: "SO₂", label: "Sulphur Dioxide", unit: "ppb" },
  { name: "O₃", label: "Ozone", unit: "ppb" },
  { name: "CO", label: "Carbon Monoxide", unit: "ppm" },
];

export default function AQICard({ city, aqi, pm25, pm10, no2, so2, o3, co }) {
  const getAQIStatus = (aqi) => {
    if (aqi <= 50) return { label: "Good", bg: "#10b981" };
    if (aqi <= 100) return { label: "Moderate", bg: "#f59e0b" };
    if (aqi <= 200) return { label: "Unhealthy", bg: "#f97316" };
    if (aqi <= 300) return { label: "Very Unhealthy", bg: "#ef4444" };
    if (aqi <= 400) return { label: "Hazardous", bg: "#7c3aed" };
    return { label: "Hazardous", bg: "#be123c" };
  };

  const status = getAQIStatus(aqi);
  const pollutantValues = [pm25, pm10, no2, so2, o3, co];

  return (
    <div
      className="w-full max-w-2xl rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 animate-scale-in"
      style={{
        background: "rgba(15, 23, 42, 0.8)",
        border: "1px solid rgba(51, 65, 85, 0.5)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold" style={{ color: "#f1f5f9" }}>{city}</h2>
          <p className="text-sm" style={{ color: "#94a3b8" }}>Real-time Air Quality Index</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div
            className="px-4 py-2 rounded-xl font-bold text-lg shadow-lg"
            style={{ background: status.bg, color: "#ffffff" }}
          >
            AQI {aqi}
          </div>
          <div className="text-xs font-medium" style={{ color: status.bg }}>{status.label}</div>
        </div>
      </div>

      <div className="h-px mb-6" style={{ background: "linear-gradient(90deg, transparent, rgba(51,65,85,0.5), transparent)" }} />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {POLLUTANT_DATA.map((p, i) => (
          <div
            key={p.name}
            className="rounded-lg p-3 transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "rgba(30, 41, 59, 0.6)" }}
          >
            <div className="text-xs uppercase tracking-wide font-medium mb-1" style={{ color: "#64748b" }}>
              {p.name}
            </div>
            <div className="text-lg font-bold" style={{ color: "#f1f5f9" }}>
              {pollutantValues[i]}
            </div>
            <div className="text-xs" style={{ color: "#94a3b8" }}>{p.unit}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4" style={{ borderTop: "1px solid rgba(51, 65, 85, 0.3)" }}>
        <p className="text-xs text-center" style={{ color: "#475569" }}>
          Last updated: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}
