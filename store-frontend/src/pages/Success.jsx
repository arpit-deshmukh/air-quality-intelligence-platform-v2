import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold">
        Payment successful
      </h1>

      <p className="text-sm text-muted">
        Your order has been placed.
      </p>

      <Link to="/products" className="underline text-sm">
        Continue shopping
      </Link>
    </div>
  );
}