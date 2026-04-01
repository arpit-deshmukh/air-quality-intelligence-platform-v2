import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function StoreCart() {
  const { cart, loading, updateCartItem, removeFromCart, getCartTotal } = useCart();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-lg">Loading cart...</div>
      </div>
    );
  }

  if (!cart || !cart.items || cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
            <div className="text-slate-400 text-lg mb-8">Your cart is empty</div>
            <Link
              to="/store/products"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

          <div className="space-y-4 mb-8">
            {cart.items.map((item) => (
              <div
                key={item.product._id}
                className="bg-slate-800 rounded-lg p-6 border border-slate-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      <Link
                        to={`/store/products/${item.product.slug}`}
                        className="hover:text-blue-400 transition-colors duration-200"
                      >
                        {item.product.name}
                      </Link>
                    </h3>
                    <p className="text-slate-400 text-sm mb-2">
                      {item.product.description}
                    </p>
                    <div className="text-green-400 font-semibold">
                      ₹{item.product.price} each
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateCartItem(item.product._id, Math.max(1, item.quantity - 1))}
                        className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors duration-200"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 bg-slate-700 text-white rounded min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartItem(item.product._id, item.quantity + 1)}
                        className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors duration-200"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-semibold text-green-400">
                        ₹{item.product.price * item.quantity}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product._id)}
                        className="text-red-400 hover:text-red-300 text-sm mt-1 transition-colors duration-200"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="text-lg text-slate-300">Total Items: {cart.items.length}</div>
                <div className="text-2xl font-bold text-green-400">
                  Total: ₹{getCartTotal()}
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  to="/store/products"
                  className="px-6 py-3 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Continue Shopping
                </Link>
                <Link
                  to="/store/checkout"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}