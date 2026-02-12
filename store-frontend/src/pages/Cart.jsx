import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart } = useCart();

  if (!cart || cart.items.length === 0) {
    return <p className="text-sm text-muted">Cart is empty</p>;
  }

  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold">Cart</h1>

      {cart.items.map((item) => (
        <div
          key={item.product}
          className="border p-3 flex justify-between"
        >
          <span>{item.name}</span>
          <span>₹{item.price} × {item.quantity}</span>
        </div>
      ))}
    </div>
  );
}