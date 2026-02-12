import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Layout() {
  const { token, logout } = useAuth();
  const { cart } = useCart();

  const itemCount =
    cart?.items?.reduce((sum, i) => sum + i.quantity, 0) || 0;

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-lg font-semibold tracking-tight"
          >
            AQI Store
          </Link>

          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/products"
              className="text-gray-600 hover:text-black transition"
            >
              Products
            </Link>

            <Link
              to="/cart"
              className="text-gray-600 hover:text-black transition"
            >
              Cart ({itemCount})
            </Link>

            {token ? (
              <button
                onClick={logout}
                className="text-gray-600 hover:text-black transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-gray-600 hover:text-black transition"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <Outlet />
      </main>
    </div>
  );
}
