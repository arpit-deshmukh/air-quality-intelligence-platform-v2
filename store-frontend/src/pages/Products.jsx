import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/client";
import { useCart } from "../context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { add } = useCart();

  useEffect(() => {
    api("/products")
      .then((res) => setProducts(res.products))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-sm text-muted">Loading…</p>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Products</h2>

      <button
        onClick={() => add(product._id)}
        className="border px-4 py-2 text-sm"
      >
        Add to cart
      </button>

      <ul className="grid gap-4">
        {products.map((p) => (
          <li
            key={p._id}
            className="border border-border p-4 rounded"
          >
            <Link
              to={`/products/${p.slug}`}
              className="font-medium"
            >
              {p.name}
            </Link>

            <p className="text-sm text-muted">
              ₹{p.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
