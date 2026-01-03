export default function InfoCard({ title, children }) {
  return (
    <div
      className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm cursor-pointer
                 transition-all duration-300
                 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 anim-fade"
    >
      <h3 className="text-lg font-semibold text-blue-900 mb-4">
        {title}
      </h3>
      <div className="text-sm text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
