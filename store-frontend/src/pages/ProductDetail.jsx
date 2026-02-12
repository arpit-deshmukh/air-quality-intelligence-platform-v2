import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/client";

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api(`/products/${slug}`).then((res) =>
      setProduct(res.product)
    );
  }, [slug]);

  if (!product) {
    return <p className="text-sm text-muted">Loading…</p>;
  }

  return (
    <article className="space-y-3">
      <h1 className="text-2xl font-semibold">
        {product.name}
      </h1>

      <p className="text-muted text-sm">
        {product.description}
      </p>

      <p className="font-medium">
        ₹{product.price}
      </p>
    </article>
  );
}