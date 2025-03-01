"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    fetch("https://ecommerce-server-eta-seven.vercel.app/cart")
      .then((res) => res.json())
      .then((data) => setCart(data))
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  const removeFromCart = (id) => {
    fetch(`https://ecommerce-server-eta-seven.vercel.app/cart/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => setCart(cart.filter((item) => item._id !== id)))
      .catch((err) => console.error("Error removing item:", err));
  };

  // Function to handle checkout
  const handleCheckout = () => {
    router.push('/checkout'); // Navigate to the checkout page
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
              <div>
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-gray-700">${item.price} x {item.quantity}</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Remove
                </button>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Checkout
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
