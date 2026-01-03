export default function SearchBox({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search city..."
      className="w-full mt-4 px-4 py-3 rounded-xl border border-gray-300 bg-white shadow-sm text-sm text-gray-800
                 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />
  );
}
