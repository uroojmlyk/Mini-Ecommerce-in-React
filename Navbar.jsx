import React from 'react';

function Navbar({ cartCount }) {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
           
            <h1 className="text-2xl font-bold text-white">TechStore</h1>
          </div>
          
          {/* Cart */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="text-2xl">🛒</div>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-medium">Shopping Cart</div>
              <div className="text-xs text-gray-500">{cartCount} items</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;