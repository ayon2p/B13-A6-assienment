import React, { useState, useEffect } from 'react';
import Product from '../product/Product';
import CardList from '../ProductCard/CardList'; 

const ProductCard = ({ ProductCardPromise, cart, setCart, onAddToCart }) => {
    const [activeTab, setActiveTab] = useState('products');
    const [data, setData] = useState([]);

  
    useEffect(() => {
        if (ProductCardPromise) {
            ProductCardPromise
                .then(res => setData(res))
                .catch(err => console.error("Data fetch error:", err));
        }
    }, [ProductCardPromise]);

    return (
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Premium Digital Tools</h2>
                <p className="text-gray-500 mb-8 text-lg">
                    Choose from our curated collection of premium digital products.
                </p>
            </div>

          
            <div className="flex justify-center gap-4 mb-12">
                <button
                    onClick={() => setActiveTab('products')}
                    className={`btn rounded-full border-none px-8 py-3 font-semibold transition-all ${
                        activeTab === 'products' 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    Products
                </button>
                <button
                    onClick={() => setActiveTab('cards')}
                    className={`btn rounded-full border-none px-8 py-3 font-semibold transition-all ${
                        activeTab === 'cards' 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    Cards ({cart?.length || 0})
                </button>
            </div>

       
            <div className="container mx-auto px-4">
                {activeTab === 'products' ? (
                    <Product data={data} onAddToCart={onAddToCart} cart={cart} />
                ) : (
                    <CardList cartItems={cart} setCartItems={setCart} />
                )}
            </div>
        </section>
    );
};

export default ProductCard;