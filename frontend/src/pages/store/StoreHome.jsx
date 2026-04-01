import { Link } from "react-router-dom";

export default function StoreHome() {
  return (
    <div className="min-h-screen" style={{ background: "#030712" }}>
      <div className="container mx-auto px-4 py-16">
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-center mb-8" style={{ color: "#e2e8f0" }}>
            AQI Store
          </h1>
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-semibold" style={{ color: "#cbd5e1" }}>
              Clean Air Intelligence Products
            </h2>
            <p className="text-lg" style={{ color: "#94a3b8" }}>
              Reports, data, and insights powered by AQI technology.
              Get access to premium air quality analytics and monitoring tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/store/products"
                className="inline-block px-6 py-3 font-medium rounded-lg transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#ffffff" }}
              >
                Browse Products
              </Link>
              <Link
                to="/store/cart"
                className="inline-block px-6 py-3 font-medium rounded-lg transition-colors duration-200"
                style={{ border: "1px solid rgba(51, 65, 85, 0.5)", color: "#94a3b8" }}
              >
                View Cart
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}