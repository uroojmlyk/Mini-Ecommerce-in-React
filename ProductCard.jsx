import React from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-blue-400 transition-colors duration-300">
      
      {/* Product Image - Fixed height for consistency */}
      <div className="h-56 bg-gray-100 flex items-center justify-center p-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-44 w-auto object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x300?text=Product+Image";
          }}
        />
      </div>
      
      {/* Product Details */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;