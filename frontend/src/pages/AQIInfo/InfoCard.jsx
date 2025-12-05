export default function InfoCard({ title, children }) {
  return (
    <div
      className="
        bg-white border rounded-xl p-5 shadow-sm
        transition-all duration-200 ease-out
        hover:shadow-xl hover:scale-[1.02] hover:border-blue-200
        cursor-pointer
      "
    >
      <h3 className="text-xl text-blue-900 font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
}
