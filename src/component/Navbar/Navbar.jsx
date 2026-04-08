import React from 'react';
import cartImg from "../../assets/products/shopping-cart.png"

const Navbar = ({ cartCount }) => { 
  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="navbar-start">
          <h1 className="text-2xl font-bold gradient-text cursor-pointer">DigiTools</h1>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-gray-600">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

       
        <div className="navbar-end gap-4 flex items-center">
          
        
          <div className="relative flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
          
            {cartCount > 0 && (
              <span className="absolute -top-2 -left-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                {cartCount}
              </span>
            )}

            <img className="w-5 h-5" src={cartImg} alt="cart" />
            <span className="font-medium">Login</span>
          </div>

          <button className="btn btn-primary rounded-full px-6 normal-case text-white bg-gradient-to-r from-purple-600 to-blue-500 border-none">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;