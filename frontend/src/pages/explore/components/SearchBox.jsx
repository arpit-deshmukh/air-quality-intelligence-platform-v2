export default function SearchBox({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search city..."
      className="w-full mt-4 px-4 py-3 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-2"
      style={{
        background: "#1e293b",
        border: "1px solid rgba(51, 65, 85, 0.5)",
        color: "#f1f5f9",
      }}
    />
  );
}
