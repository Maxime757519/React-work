import React, { useEffect, useState } from "react";
import ProductGrid from "./pgrid";
import FilterPanel from "./fpanel";
import ShoppingCart from "./scart";
import { CartProvider } from "./ccontent";
import productsData from "./product.json";
import './index.css';


export default function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({ categories: [], price: [0, 500], rating: 0 });

  useEffect(() => {
    setProducts(productsData);
  }, []);

  useEffect(() => {
    const { categories, price, rating } = filters;
    const result = products.filter(product => {
      return (
        (categories.length === 0 || categories.includes(product.category)) &&
        product.price >= price[0] &&
        product.price <= price[1] &&
        product.rating >= rating
      );
    });
    setFilteredProducts(result);
  }, [filters, products]);

  return (
    <CartProvider>
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="md:w-1/4">
          <FilterPanel filters={filters} setFilters={setFilters} />
        </div>
        <div className="md:w-2/4">
          <ProductGrid products={filteredProducts} />
        </div>
        <div className="md:w-1/4">
          <ShoppingCart />
        </div>
      </div>
    </CartProvider>
  );
}

