import React from 'react';
const Card = ({ item,onAddToCart,isAdded }) => {
    return (
        <div className="border border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all relative bg-white">
            <div className={`flex justify-between mb-6`}>
               <p className='w-6 h-6 rounded-full'>{item.icon}</p>
               <div className={`${item.bgIcon} rounded-2xl`}>
                <button>{item.badge}</button>
               </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">{item.description}</p>
            <div className="mb-6 flex items-baseline gap-1">
                <span className="text-3xl font-bold">{item.price}</span>
                <span className="text-gray-400 text-sm font-medium">{item.duration}</span>
            </div>
            {item.features && (
                 <ul className="space-y-4 mb-8">
                 {item.features.map((feature, index) => (
                     <li key={index} className="flex items-center text-gray-700 text-sm font-medium">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>{feature}
                     </li>
                 ))}
             </ul>
            )}
           
            <button 
                onClick={() => onAddToCart(item)}
                disabled={isAdded} 
                className={`w-full py-4 rounded-2xl font-bold transition-all shadow-lg ${
                    isAdded 
                    ? "bg-green-500 text-white cursor-not-allowed opacity-80" 
                    : "bg-gradient-to-r from-purple-600 to-blue-500 text-white" 
                }`}
            >
                {isAdded ? "Added to Cart" : "Buy Now"} 
            </button>
        </div>
    );
};
export default Card;