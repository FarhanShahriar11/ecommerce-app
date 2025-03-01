import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-2" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <Link href={`/products/${product._id}`}>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          View Details
        </button>
      </Link>
    </div>
  );
}
