import React, { createContext, useContext, useReducer, useMemo } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const existing = state.find(item => item.id === action.product.id);
      if (existing) {
        return state.map(item =>
          item.id === action.product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...state, { ...action.product, qty: 1 }];
      }
    }
    case "REMOVE":
      return state.filter(item => item.id !== action.id);
    case "INCREASE":
      return state.map(item => item.id === action.id ? { ...item, qty: item.qty + 1 } : item);
    case "DECREASE":
      return state.map(item =>
        item.id === action.id ? { ...item, qty: Math.max(item.qty - 1, 1) } : item
      );
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const totalItems = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart]);
  const totalPrice = useMemo(() => cart.reduce((sum, item) => sum + item.qty * item.price, 0), [cart]);

  const value = {
    cart,
    addToCart: product => dispatch({ type: "ADD", product }),
    removeFromCart: id => dispatch({ type: "REMOVE", id }),
    increaseQty: id => dispatch({ type: "INCREASE", id }),
    decreaseQty: id => dispatch({ type: "DECREASE", id }),
    totalItems,
    totalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);