import React from "react";

const categoriesList = ["Electronics", "Clothing", "Books"];

export default function FilterPanel({ filters, setFilters }) {
  const handleCategoryChange = (category) => {
    const current = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    setFilters({ ...filters, categories: current });
  };

  const handleRatingChange = (e) => {
    setFilters({ ...filters, rating: parseFloat(e.target.value) });
  };

  const handleClearFilters = () => {
    setFilters({ categories: [], price: [0, 500], rating: 0 });
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-lg font-bold mb-2">Filters</h2>
      <div>
        <p className="font-semibold">Category</p>
        {categoriesList.map(cat => (
          <label key={cat} className="block">
            <input
              type="checkbox"
              checked={filters.categories.includes(cat)}
              onChange={() => handleCategoryChange(cat)}
            /> {cat}
          </label>
        ))}
      </div>
      <div className="mt-4">
        <p className="font-semibold">Min Rating</p>
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={filters.rating}
          onChange={handleRatingChange}
          className="w-full"
        />
        <p>{filters.rating} ⭐</p>
      </div>
      <button onClick={handleClearFilters} className="mt-4 px-3 py-1 bg-red-500 text-white rounded-xl">
        Clear Filters
      </button>
    </div>
  );
}
