import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function StoreCart() {
  const { cart, loading, updateCartItem, removeFromCart, getCartTotal } = useCart();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#030712" }}>
        <div className="text-lg" style={{ color: "#94a3b8" }}>Loading cart...</div>
      </div>
    );
  }

  if (!cart || !cart.items || cart.items.length === 0) {
    return (
      <div className="min-h-screen" style={{ background: "#030712" }}>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4" style={{ color: "#e2e8f0" }}>Your Cart</h1>
            <div className="text-lg mb-8" style={{ color: "#64748b" }}>Your cart is empty</div>
            <Link
              to="/store/products"
              className="inline-block px-6 py-3 font-medium rounded-lg"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#ffffff" }}
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#030712" }}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8" style={{ color: "#e2e8f0" }}>Your Cart</h1>

          <div className="space-y-4 mb-8">
            {cart.items.map((item) => (
              <div
                key={item.product._id}
                className="rounded-lg p-6"
                style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2" style={{ color: "#e2e8f0" }}>
                      {item.product.name}
                    </h3>
                    <p className="text-sm mb-2" style={{ color: "#94a3b8" }}>{item.product.description}</p>
                    <div className="font-semibold" style={{ color: "#10b981" }}>₹{item.product.price} each</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateCartItem(item.product._id, Math.max(1, item.quantity - 1))}
                        className="px-3 py-1 rounded transition-colors duration-200"
                        style={{ background: "#1e293b", color: "#e2e8f0", border: "1px solid rgba(51,65,85,0.5)" }}
                      >-</button>
                      <span className="px-3 py-1 rounded min-w-[3rem] text-center" style={{ background: "#1e293b", color: "#e2e8f0" }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartItem(item.product._id, item.quantity + 1)}
                        className="px-3 py-1 rounded transition-colors duration-200"
                        style={{ background: "#1e293b", color: "#e2e8f0", border: "1px solid rgba(51,65,85,0.5)" }}
                      >+</button>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-semibold" style={{ color: "#10b981" }}>
                        ₹{item.product.price * item.quantity}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product._id)}
                        className="text-sm mt-1 transition-colors duration-200"
                        style={{ color: "#fca5a5" }}
                      >Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-lg p-6"
            style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="text-lg" style={{ color: "#94a3b8" }}>Total Items: {cart.items.length}</div>
                <div className="text-2xl font-bold" style={{ color: "#10b981" }}>Total: ₹{getCartTotal()}</div>
              </div>
              <div className="flex gap-4">
                <Link
                  to="/store/products"
                  className="px-6 py-3 font-medium rounded-lg transition-colors duration-200"
                  style={{ border: "1px solid rgba(51, 65, 85, 0.5)", color: "#94a3b8" }}
                >Continue Shopping</Link>
                <Link
                  to="/store/checkout"
                  className="px-6 py-3 font-medium rounded-lg transition-colors duration-200"
                  style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#ffffff" }}
                >Proceed to Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}