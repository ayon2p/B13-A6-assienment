import React from 'react';
import HeroImg from "../../assets/products/banner.png";

const HeroSection = () => {
    return (
        <section className="bg-white">
            
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 flex flex-col lg:flex-row items-center gap-12">
            
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-purple-600 rounded-full ping"></span>
                        New: AI-Powered Tools Available
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                        Supercharge Your <br /> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Digital Workflow</span>
                    </h1>
                    <p className="text-gray-500 text-lg mb-8 max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                    </p>
                    <div className="flex gap-4">
                        <button className="btn btn-primary rounded-full px-8 bg-purple-600 border-none hover:bg-purple-700">
                            Explore Products
                        </button>
                        <button className="btn btn-outline rounded-full px-8 border-purple-600 text-purple-600 hover:bg-purple-50">
                            <span className="mr-2"><i class="fa-solid fa-play"></i></span> Watch Demo
                        </button>
                    </div>
                </div>

             
                <div className="lg:w-1/2">
                    <img src={HeroImg} alt="Hero" className="w-full rounded-2xl shadow-xl" />
                </div>
            </div>

           
            <div className="bg-[#7c3aed] py-12 text-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-purple-400">
                    <div className="text-center py-6 md:py-0">
                        <h2 className="text-4xl font-bold">50K+</h2>
                        <p className="text-purple-100 mt-2">Active Users</p>
                    </div>
                    <div className="text-center py-6 md:py-0">
                        <h2 className="text-4xl font-bold">200+</h2>
                        <p className="text-purple-100 mt-2">Premium Tools</p>
                    </div>
                    <div className="text-center py-6 md:py-0">
                        <h2 className="text-4xl font-bold">4.9</h2>
                        <p className="text-purple-100 mt-2">Rating</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;