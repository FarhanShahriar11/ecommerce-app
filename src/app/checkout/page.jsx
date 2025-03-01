"use client";
import { useState, useEffect } from "react";

export default function CheckoutPage() {
  const [userInfo, setUserInfo] = useState({ name: "", email: "", address: "" });
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState(""); // State for displaying success message

  // Fetch cart items when the page loads
  useEffect(() => {
    fetch("https://ecommerce-server-pi-eosin.vercel.app/cart")
      .then((res) => res.json())
      .then((data) => setCartItems(data))
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before checkout.");
      return;
    }

    fetch("   https://ecommerce-server-pi-eosin.vercel.app/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userInfo, items: cartItems }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Reset the form and display success message
        setMessage("Order placed successfully!");
        setUserInfo({ name: "", email: "", address: "" });
        setCartItems([]); // Clear the cart
      })
      .catch((err) => console.error("Error during checkout:", err));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {message && (
        <div className="bg-green-200 p-4 rounded-lg text-green-800 mb-4">
          {message}
        </div>
      )}

      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 border rounded mb-4"
        value={userInfo.name}
        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded mb-4"
        value={userInfo.email}
        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
      />

      <input
        type="text"
        placeholder="Address"
        className="w-full p-2 border rounded mb-4"
        value={userInfo.address}
        onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
      />

      <button
        onClick={handleCheckout}
        className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Place Order
      </button>
    </div>
  );
}
