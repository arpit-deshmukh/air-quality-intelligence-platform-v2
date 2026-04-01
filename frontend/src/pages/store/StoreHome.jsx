import { Link } from "react-router-dom";

export default function StoreHome() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-center mb-8">
            AQI Store
          </h1>

          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-semibold">
              Clean Air Intelligence Products
            </h2>

            <p className="text-slate-300 text-lg">
              Reports, data, and insights powered by AQI technology.
              Get access to premium air quality analytics and monitoring tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/store/products"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Browse Products
              </Link>
              <Link
                to="/store/cart"
                className="inline-block px-6 py-3 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-medium rounded-lg transition-colors duration-200"
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