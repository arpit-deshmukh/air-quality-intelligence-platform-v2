export default function InfoCard({ title, children }) {
  return (
    <div
      className="rounded-xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 anim-fade"
      style={{
        background: "rgba(15, 23, 42, 0.7)",
        border: "1px solid rgba(51, 65, 85, 0.5)",
      }}
    >
      <h3 className="text-lg font-semibold mb-4" style={{ color: "#a5b4fc" }}>
        {title}
      </h3>
      <div className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
        {children}
      </div>
    </div>
  );
}
