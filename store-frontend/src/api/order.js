import { api } from "./client";

export function createOrder(payload, token) {
  return api("/orders", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: token
      ? { Authorization: `Bearer ${token}` }
      : {}
  });
}

export function initiatePayment(orderId) {
  return api("/payments/initiate", {
    method: "POST",
    body: JSON.stringify({ orderId })
  });
}

export function confirmPayment(payload) {
  return api("/payments/confirm", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}