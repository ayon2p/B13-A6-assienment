import React from 'react';
import Card from '../card/Card'; 

const Product = ({ data=[], onAddToCart, cart=[] }) => { 
    return (
        <div className="grid mx-auto max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item) => {
                
                const isAdded = cart.some(cartItem => cartItem?.id === item.id);
                return (
                    <Card 
                        key={item.id} 
                        item={item} 
                        onAddToCart={onAddToCart} 
                        isAdded={isAdded} 
                    />
                );
            })}
        </div>
    );
};

export default Product;