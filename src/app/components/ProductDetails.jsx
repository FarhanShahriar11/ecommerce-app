"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`https://ecommerce-server-eta-seven.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product details:", err));
  }, [id]);

  const handleAddToCart = async () => {
    if (!product) return;
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://ecommerce-server-eta-seven.vercel.app/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product._id, // Use the correct field
          quantity: 1, // Default quantity
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Added to cart successfully!");
      } else {
        setMessage(data.message || "Failed to add to cart.");
      }
    } catch (error) {
      setMessage("Error adding to cart.");
    }

    setLoading(false);
  };

  if (!product) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain mb-4"
        />
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg text-gray-700 mt-2">{product.description}</p>
        <p className="text-xl font-semibold mt-4">${product.price}</p>
        
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          onClick={handleAddToCart}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add to Cart"}
        </button>

        {message && <p className="mt-2 text-green-600">{message}</p>}
      </div>
    </div>
  );
}
