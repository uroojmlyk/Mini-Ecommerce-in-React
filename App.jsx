import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

function App() {
  // State Management
  const [cart, setCart] = useState([]);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  // Add to Cart Function
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  
  // Remove from Cart Function
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };
  
  // Calculate Total Price
  const totalPrice = cart.reduce((total, item) => 
    total + (item.price * item.quantity), 0
  );
  
  // Log cart changes
  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar cartCount={cartCount} />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Welcome to <span className="text-green-600">TechStore</span>
          </h1>
          <p className="text-gray-600">
            Quality tech products with easy shopping experience
          </p>
        </div>
        
        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Products Section - 70% */}
          <div className="lg:w-2/3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Our Products ({products.length})
              </h2>
              <p className="text-gray-500">Click "Add to Cart" to purchase items</p>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
            
            {/* Shopping Instructions */}
            <div className="mt-10 p-5 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                How to Shop:
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">1.</span>
                  Browse products and click "Add to Cart"
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">2.</span>
                  View your cart items in the right panel
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">3.</span>
                  Remove items using ❌ button if needed
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">4.</span>
                  Checkout when ready to purchase
                </li>
              </ul>
            </div>
          </div>
          
          {/* Cart Section - 30% */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              
              {/* Cart Header */}
              <div className="p-5 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🛒</div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Shopping Cart
                    </h2>
                    <p className="text-sm text-gray-500">
                      {cartCount} item{cartCount !== 1 ? 's' : ''} in cart
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Cart Content */}
              <div className="p-5">
                {cart.length === 0 ? (
                  // Empty Cart State
                  <div className="py-8 text-center">
                    <div className="text-5xl text-gray-300 mb-4">🛒</div>
                    <p className="text-gray-500 font-medium">Your cart is empty</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Add products to see them here
                    </p>
                  </div>
                ) : (
                  // Cart Items List
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-start gap-3">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-14 h-14 object-cover rounded border border-gray-200"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="font-medium text-gray-900">
                                {item.name}
                              </h4>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 text-sm"
                              >
                                Remove
                              </button>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-sm text-gray-500">
                                ${item.price} × {item.quantity}
                              </span>
                              <span className="font-bold">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Cart Summary */}
                    <div className="border-t border-gray-200 pt-4 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-bold">${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping:</span>
                        <span className="font-semibold text-green-600">FREE</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
                        <span>Total:</span>
                        <span className="text-green-600">${totalPrice.toFixed(2)}</span>
                      </div>
                      
                      <button className="w-full mt-4 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200">
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Cart Summary Card */}
            {cart.length > 0 && (
              <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">
                  Order Summary
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-green-700">
                      {cartCount}
                    </div>
                    <div className="text-sm text-green-600">Items in Cart</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-700">
                      ${totalPrice.toFixed(2)}
                    </div>
                    <div className="text-sm text-green-600">Total Value</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-12 bg-gray-900 text-white font-medium py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-300 mb-6">
            TechStore - E-commerce Application
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1.5 bg-gray-700 rounded-full text-sm">
              React Hooks
            </span>
            <span className="px-3 py-1.5 bg-gray-700 rounded-full text-sm">
              State Management
            </span>
            <span className="px-3 py-1.5 bg-gray-700 rounded-full text-sm">
              Component Design
            </span>
            <span className="px-3 py-1.5 bg-gray-700 rounded-full text-sm">
              Responsive UI
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;