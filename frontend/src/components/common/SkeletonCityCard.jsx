export default function SkeletonCityCard() {
  return (
    <div
      className="rounded-xl p-5 animate-pulse"
      style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
    >
      <div className="h-4 rounded w-1/3 mb-3" style={{ background: "#1e293b" }} />
      <div className="h-7 rounded w-1/4 mb-4" style={{ background: "#334155" }} />
      <div className="grid grid-cols-3 gap-3">
        <div className="h-3 rounded" style={{ background: "#1e293b" }} />
        <div className="h-3 rounded" style={{ background: "#1e293b" }} />
        <div className="h-3 rounded" style={{ background: "#1e293b" }} />
      </div>
    </div>
  );
}
