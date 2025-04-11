import React from "react";
import { useCart } from "./ccontent";
import CartItem from "./citem";

export default function ShoppingCart() {
  const { cart, totalItems, totalPrice } = useCart();

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-lg font-bold mb-2">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => <CartItem key={item.id} item={item} />)}
          <hr className="my-2" />
          <p>Total Items: {totalItems}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <button className="mt-2 w-full bg-green-600 text-white py-2 rounded-xl">Checkout</button>
        </>
      )}
    </div>
  );
}
