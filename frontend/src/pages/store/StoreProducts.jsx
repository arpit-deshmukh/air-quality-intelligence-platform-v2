import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/client";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

export default function StoreProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [pendingProductId, setPendingProductId] = useState(null);
  const { addToCart } = useCart();
  const { user, login } = useAuth();

  useEffect(() => { fetchProducts(); }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data.products || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setError("Failed to load products");
    } finally { setLoading(false); }
  };

  const handleAddToCart = async (productId) => {
    if (!user) { setPendingProductId(productId); setShowLogin(true); return; }
    const result = await addToCart(productId);
    if (!result.success) alert(result.message);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");
    const result = await login(loginEmail, loginPassword);
    if (!result.success) { setLoginError(result.message || "Login failed. Try again."); return; }
    setShowLogin(false); setLoginEmail(""); setLoginPassword("");
    if (pendingProductId) {
      const cartResult = await addToCart(pendingProductId);
      if (!cartResult.success) alert(cartResult.message);
      setPendingProductId(null);
    }
  };

  const closeLogin = () => { setShowLogin(false); setLoginError(""); setPendingProductId(null); };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#030712" }}>
        <div className="text-lg" style={{ color: "#94a3b8" }}>Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#030712" }}>
        <div className="text-center">
          <div className="text-lg mb-4" style={{ color: "#fca5a5" }}>{error}</div>
          <button onClick={fetchProducts} className="px-4 py-2 rounded-lg" style={{ background: "#6366f1", color: "#fff" }}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#030712" }}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#e2e8f0" }}>AQI Store Products</h1>
          <p style={{ color: "#94a3b8" }}>Premium air quality monitoring tools and analytics</p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-lg mb-4" style={{ color: "#64748b" }}>No products available</div>
            <Link to="/store" className="inline-block px-6 py-3 rounded-lg" style={{ background: "#6366f1", color: "#fff" }}>
              Back to Store
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="rounded-lg p-6 transition-all duration-200"
                style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#e2e8f0" }}>{product.name}</h3>
                  <p className="text-sm mb-3" style={{ color: "#94a3b8" }}>{product.description}</p>
                  <div className="text-2xl font-bold" style={{ color: "#10b981" }}>₹{product.price}</div>
                </div>
                <button
                  onClick={() => handleAddToCart(product._id)}
                  className="w-full px-4 py-2 font-medium rounded-lg transition-all duration-200"
                  style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#ffffff" }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(3, 7, 18, 0.8)" }}>
          <div
            className="w-full max-w-md rounded-xl p-6"
            style={{ background: "rgba(15, 23, 42, 0.95)", border: "1px solid rgba(51, 65, 85, 0.5)", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold" style={{ color: "#e2e8f0" }}>Login Required</h2>
              <button onClick={closeLogin} style={{ color: "#64748b" }}>✕</button>
            </div>
            <p className="mb-4" style={{ color: "#94a3b8" }}>Please log in to continue and buy items in the store.</p>
            {loginError && (
              <div className="mb-3 rounded-lg px-3 py-2 text-sm" style={{ background: "rgba(239,68,68,0.1)", color: "#fca5a5" }}>
                {loginError}
              </div>
            )}
            <form onSubmit={handleLoginSubmit} className="space-y-3">
              <input
                type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="Email"
                className="w-full rounded-lg px-4 py-2 focus:outline-none"
                style={{ background: "#1e293b", border: "1px solid rgba(51, 65, 85, 0.5)", color: "#f1f5f9" }}
              />
              <input
                type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="Password"
                className="w-full rounded-lg px-4 py-2 focus:outline-none"
                style={{ background: "#1e293b", border: "1px solid rgba(51, 65, 85, 0.5)", color: "#f1f5f9" }}
              />
              <button type="submit" className="w-full rounded-lg px-4 py-2 font-semibold" style={{ background: "#6366f1", color: "#fff" }}>
                Log In & Add to Cart
              </button>
            </form>
            <div className="mt-4 text-center text-sm" style={{ color: "#64748b" }}>
              Not registered? <Link to="/register" style={{ color: "#818cf8" }}>Create account</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}