import React from "react";
import { useCart } from "./ccontent";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl" />
      <div className="mt-2">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-xl font-semibold">${product.price}</p>
        <div className="flex items-center text-yellow-500">
          {"★".repeat(Math.round(product.rating))}
        </div>
        <button
          onClick={() => addToCart(product)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
