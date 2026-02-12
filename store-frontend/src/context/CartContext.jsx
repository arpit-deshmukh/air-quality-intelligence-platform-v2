import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/client";
import { useAuth } from "./AuthContext";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const { token } = useAuth();
  const [cart, setCart] = useState(null);

  const guestId =
    localStorage.getItem("guestId") ||
    crypto.randomUUID();

  localStorage.setItem("guestId", guestId);

  useEffect(() => {
    const headers = token
      ? { Authorization: `Bearer ${token}` }
      : {};

    api(`/cart?guestId=${guestId}`, { headers })
      .then((res) => setCart(res.cart));
  }, [token]);

  function add(productId) {
    return api("/cart/add", {
      method: "POST",
      body: JSON.stringify({ productId, guestId }),
      headers: token
        ? { Authorization: `Bearer ${token}` }
        : {}
    }).then((res) => setCart(res.cart));
  }

  return (
    <CartContext.Provider value={{ cart, add }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}