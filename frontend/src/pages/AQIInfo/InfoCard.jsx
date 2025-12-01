export default function InfoCard({ title, children }) {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
}
