export async function createPaymentIntent({ amount, orderId }) {
  return {
    paymentId: `pay_${Date.now()}`,
    amount,
    orderId,
    status: "CREATED"
  };
}

export async function verifyPayment(payload) {
  return payload && payload.paymentId;
}