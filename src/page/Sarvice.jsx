import React from 'react';

const Service = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-24 pb-12 px-6">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                    Our Services
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    We provide powerful solutions to streamline your inventory and business operations efficiently.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Service Card 1 */}
                    <div className="p-6 bg-white/10 border border-white/10 rounded-2xl shadow-xl backdrop-blur-md hover:scale-105 transform transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-3 text-white">
                            Real-time Tracking
                        </h3>
                        <p className="text-gray-300">
                            Monitor your inventory with up-to-date data and real-time alerts, ensuring accuracy and efficiency.
                        </p>
                    </div>

                    {/* Service Card 2 */}
                    <div className="p-6 bg-white/10 border border-white/10 rounded-2xl shadow-xl backdrop-blur-md hover:scale-105 transform transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-3 text-white">
                            Smart Reporting
                        </h3>
                        <p className="text-gray-300">
                            Generate intelligent reports with insights that help you make better business decisions.
                        </p>
                    </div>

                    {/* Service Card 3 */}
                    <div className="p-6 bg-white/10 border border-white/10 rounded-2xl shadow-xl backdrop-blur-md hover:scale-105 transform transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-3 text-white">
                            User-Friendly Interface
                        </h3>
                        <p className="text-gray-300">
                            Designed for simplicity, so anyone can manage inventory with minimal training or technical knowledge.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
