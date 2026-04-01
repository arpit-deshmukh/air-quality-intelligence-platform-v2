import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/client";
import { useCart } from "../../context/CartContext";

export default function StoreProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data.products || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (productId) => {
    const result = await addToCart(productId);
    if (!result.success) {
      alert(result.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-lg">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-lg mb-4">{error}</div>
          <button
            onClick={fetchProducts}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">AQI Store Products</h1>
          <p className="text-slate-300">
            Premium air quality monitoring tools and analytics
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-slate-400 text-lg mb-4">No products available</div>
            <Link
              to="/store"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              Back to Store
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors duration-200"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">
                    <Link
                      to={`/store/products/${product.slug}`}
                      className="hover:text-blue-400 transition-colors duration-200"
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">
                    {product.description}
                  </p>
                  <div className="text-2xl font-bold text-green-400">
                    ₹{product.price}
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(product._id)}
                  className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}