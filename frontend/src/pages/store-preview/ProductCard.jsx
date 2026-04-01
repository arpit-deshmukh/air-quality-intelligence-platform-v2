export default function ProductCard({ product }) {
  return (
    <div
      className="group rounded-2xl p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02]"
      style={{
        background: "rgba(15, 23, 42, 0.7)",
        border: "1px solid rgba(51, 65, 85, 0.5)",
      }}
    >
      <div
        className="mb-4 flex h-40 items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:scale-105"
        style={{ background: "rgba(30, 41, 59, 0.6)" }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-28 object-contain transition-transform duration-300"
        />
      </div>

      <div
        className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium"
        style={{ background: "rgba(99, 102, 241, 0.1)", color: "#a5b4fc" }}
      >
        {product.tag}
      </div>

      <h3 className="text-lg font-semibold" style={{ color: "#e2e8f0" }}>
        {product.name}
      </h3>

      <p className="mt-2 text-sm" style={{ color: "#94a3b8" }}>
        {product.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-base font-medium" style={{ color: "#e2e8f0" }}>
          {product.price}
        </span>
        <button
          disabled
          className="cursor-not-allowed rounded-lg px-4 py-2 text-sm"
          style={{ background: "rgba(30, 41, 59, 0.6)", color: "#64748b" }}
        >
          Coming Soon
        </button>
      </div>
    </div>
  );
}
