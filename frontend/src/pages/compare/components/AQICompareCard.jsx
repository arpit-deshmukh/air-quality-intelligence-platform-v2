export default function AQICompareCard({ title, aqi }) {
  return (
    <div
      className="p-6 rounded-xl text-center"
      style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
    >
      <h3 className="text-xl font-semibold mb-2" style={{ color: "#e2e8f0" }}>{title}</h3>
      <p className="text-4xl font-bold" style={{ color: "#f1f5f9" }}>{aqi || "N/A"}</p>
      <p className="mt-2" style={{ color: "#64748b" }}>Air Quality Index</p>
    </div>
  );
}
