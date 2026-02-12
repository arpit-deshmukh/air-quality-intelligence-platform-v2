import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { createOrder, initiatePayment, confirmPayment } from "../api/order";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart } = useCart();
  const { token } = useAuth();
  const navigate = useNavigate();

  async function checkout() {
    const orderRes = await createOrder(
      { guestId: localStorage.getItem("guestId") },
      token
    );

    const payment = await initiatePayment(orderRes.order._id);

    await confirmPayment({
      orderId: orderRes.order._id,
      paymentId: payment.payment.paymentId
    });

    navigate("/success");
  }

  if (!cart || cart.items.length === 0) {
    return <p className="text-sm text-muted">Cart is empty</p>;
  }

  const total = cart.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <div className="max-w-md space-y-4">
      <h1 className="text-xl font-semibold">Checkout</h1>

      <div className="space-y-2 text-sm">
        {cart.items.map((i) => (
          <div key={i.product} className="flex justify-between">
            <span>{i.name}</span>
            <span>₹{i.price * i.quantity}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between font-medium">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      <button
        onClick={checkout}
        className="border px-4 py-2 text-sm w-full"
      >
        Pay
      </button>
    </div>
  );
}