
import React from 'react';
import { toast } from 'react-toastify';
const CartList = ({ cartItems, setCartItems }) => {
  
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.replace(/[^\d.]/g, '')) 
      : item.price;
    return acc + (price || 0);
  }, 0);

  const handleRemove = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
  };


const handleCheckout = () => {
    if (cartItems.length > 0) {
      setCartItems([]);
      
    
      toast.info("Order placed successfully! 🚀", {
        theme: "colored"
      });
    }
  };

  
  return (
    <div className="max-w-4xl mx-auto mt-10 border-2 border-blue-400 rounded-3xl p-8 bg-white shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Your Cart ({cartItems.length})</h2>
      
      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm border">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-500 font-medium">{item.price}</p>
                </div>
              </div>
              <button 
                onClick={() => handleRemove(index)} 
                className="text-rose-500 font-bold hover:bg-rose-50 px-4 py-2 rounded-xl transition-all">
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-400 font-medium">
            Your cart is empty! Go back to products.
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-between items-center font-bold text-2xl border-t pt-6">
        <span>Total:</span>
        <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
      </div>

      <button 
        onClick={handleCheckout}
        className="w-full mt-6 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-2xl font-bold shadow-lg hover:opacity-90 transition-opacity"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartList;