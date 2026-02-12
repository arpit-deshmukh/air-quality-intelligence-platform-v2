import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-semibold">
        Clean air intelligence
      </h1>

      <p className="text-muted text-sm">
        Reports, data, and insights powered by AQI.
      </p>

      <Link
        to="/products"
        className="inline-block text-sm underline"
      >
        Browse products
      </Link>
    </section>
  );
}