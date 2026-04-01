import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/client";
import { useAuth } from "./AuthContext";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const { user } = useAuth();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const guestId =
    localStorage.getItem("guestId") ||
    crypto.randomUUID();

  localStorage.setItem("guestId", guestId);

  useEffect(() => {
    fetchCart();
  }, [user]);

  const fetchCart = async () => {
    try {
      const response = await api.get(`/cart?guestId=${guestId}`);
      setCart(response.data.cart);
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    try {
      const response = await api.post("/cart/add", {
        productId,
        quantity,
        guestId
      });
      setCart(response.data.cart);
      return { success: true };
    } catch (error) {
      console.error("Failed to add to cart:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Failed to add item to cart"
      };
    }
  };

  const updateCartItem = async (productId, quantity) => {
    try {
      const response = await api.put("/cart/update", {
        productId,
        quantity,
        guestId
      });
      setCart(response.data.cart);
      return { success: true };
    } catch (error) {
      console.error("Failed to update cart:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Failed to update cart"
      };
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await api.delete(`/cart/remove/${productId}?guestId=${guestId}`);
      setCart(response.data.cart);
      return { success: true };
    } catch (error) {
      console.error("Failed to remove from cart:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Failed to remove item from cart"
      };
    }
  };

  const clearCart = async () => {
    try {
      const response = await api.delete(`/cart/clear?guestId=${guestId}`);
      setCart(response.data.cart);
      return { success: true };
    } catch (error) {
      console.error("Failed to clear cart:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Failed to clear cart"
      };
    }
  };

  const getCartTotal = () => {
    if (!cart || !cart.items) return 0;
    return cart.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    if (!cart || !cart.items) return 0;
    return cart.items.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cart,
    loading,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemCount,
    refreshCart: fetchCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}