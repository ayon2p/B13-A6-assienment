
import React from 'react';
import userIcon from '../../assets/user.png';
import packageIcon from '../../assets/package.png';
import rocketIcon from '../../assets/rocket.png';
const GetStarted = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center mb-8">
               
                <h2 className="text-4xl md:text-5xl font-black text-[#0B1B35] mb-4">
                    Get Started In 3 Steps
                </h2>
                <p className="text-gray-500 font-medium mb-16 cursor-pointer">
                    Start using premium digital tools in minutes, not hours.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative p-10 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all group">
                        <div className="absolute top-6 right-6 w-10 h-10 bg-[#6366f1] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                            01
                        </div>
                        <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110">
                            <img src={userIcon} alt="User" className="w-12 h-12 object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0B1B35] mb-4">Create Account</h3>
                        <p className="text-gray-500 leading-relaxed font-medium text-sm">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>

               
                    <div className="relative p-10 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all group">
                        <div className="absolute top-6 right-6 w-10 h-10 bg-[#6366f1] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                            02
                        </div>
                        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110">
                            <img src={packageIcon} alt="Package" className="w-12 h-12 object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0B1B35] mb-4">Choose Products</h3>
                        <p className="text-gray-500 leading-relaxed font-medium text-sm">
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>

            
                    <div className="relative p-10 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all group">
                        <div className="absolute top-6 right-6 w-10 h-10 bg-[#6366f1] text-white flex rounded-full items-center justify-center font-bold text-sm shadow-lg">
                            03
                        </div>
                        <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110">
                            <img src={rocketIcon} alt="Rocket" className="w-12 h-12 object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0B1B35] mb-4">Start Creating</h3>
                        <p className="text-gray-500 leading-relaxed font-medium text-sm">
                            Download and start using your premium tools immediately.
                        </p>
                    </div>

                </div>
            </div>
        </section>
       
    );
};

export default GetStarted;