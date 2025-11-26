export default function SearchBox({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search city..."
      className="w-full mt-4 p-3 rounded-xl border bg-white shadow-sm focus:outline-blue-400"
    />
  );
}
