export default function ProductCard({ product }) {
  return (
    <div
      className="
        group
        rounded-2xl border border-gray-200
        bg-gray-50 p-5
        shadow-sm transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-lg hover:scale-[1.02]
        hover:bg-white
      "
    >
      {/* Image Section */}
      <div
        className="
          mb-4 flex h-40 items-center justify-center
          rounded-xl bg-gray-100
          transition-transform duration-300 ease-out
          group-hover:rotate-[1deg] group-hover:scale-105
        "
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-28 object-contain transition-transform duration-300"
        />
      </div>

      <div className="mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700">
        {product.tag}
      </div>

      <h3 className="text-lg font-semibold text-gray-900">
        {product.name}
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        {product.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-base font-medium text-gray-900">
          {product.price}
        </span>

        <button
          disabled
          className="
            cursor-not-allowed rounded-lg
            bg-gray-200 px-4 py-2
            text-sm text-gray-600
          "
        >
          Coming Soon
        </button>
      </div>
    </div>
  );
}
