import React from "react";
import { useCart } from "./ccontent";

export default function CartItem({ item }) {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between mb-2">
      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
      <div className="flex-1 mx-2">
        <p className="font-semibold">{item.name}</p>
        <p>${item.price} x {item.qty}</p>
        <p className="text-sm">Subtotal: ${item.price * item.qty}</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <button onClick={() => increaseQty(item.id)} className="bg-green-500 text-white px-2 rounded">+</button>
        <button onClick={() => decreaseQty(item.id)} className="bg-yellow-500 text-white px-2 rounded">-</button>
        <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-2 rounded">x</button>
      </div>
    </div>
  );
}
