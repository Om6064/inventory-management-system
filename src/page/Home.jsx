import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 h-screen flex items-center relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
                </div>

                <div className="py-8 px-4 mx-auto container text-center lg:py-16 lg:px-12 relative z-10">
                    {/* Enhanced New Badge */}
                    <div className="inline-flex justify-between items-center py-2 px-2 pr-6 mb-7 text-sm bg-white/10 backdrop-blur-lg border border-white/20 rounded-full group hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/25">
                        <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white px-6 py-2 mr-4 font-semibold shadow-lg">New</span>
                        <span className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">InventoryPro 2.0 is here! See what's new</span>
                        <svg className="ml-3 w-5 h-5 text-white group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>

                    {/* Main Heading */}
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Transform Your
                        </span>
                        <br />
                        <span className="text-white drop-shadow-2xl">
                            Inventory Management
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48 leading-relaxed">
                        Streamline your business operations with our cutting-edge inventory management system. Track, manage, and optimize your stock levels with real-time analytics and intelligent automation.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6">
                        <Link to={"/sarvice"} className="inline-flex justify-center items-center py-4 px-8 text-base font-semibold text-center text-white rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 focus:ring-4 focus:ring-blue-300 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 group">
                            Explore Services
                            <svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <Link to={"/inventorydetail"} className="inline-flex justify-center items-center py-4 px-8 text-base font-semibold text-center text-white rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 focus:ring-4 focus:ring-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl group">
                            <svg className="mr-2 -ml-1 w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                            </svg>
                            Invantory Details
                        </Link>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Home;
