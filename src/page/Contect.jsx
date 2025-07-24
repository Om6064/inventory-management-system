import DarkVeil from "../components/DarkVeil";


const Contect = () => {
    return (
        <section className="min-h-[91.4vh] flex items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 px-6">
            <div className="absolute inset-0 z-0 overflow-hidden md:">
                <DarkVeil />
            </div>
            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">

              
                <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/10 shadow-xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 text-transparent bg-clip-text">
                        We didn't reinvent the wheel
                    </h2>
                    <p className="text-gray-300 text-lg mb-4">
                        We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.
                    </p>
                    <p className="text-gray-400">
                        We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.
                    </p>
                </div>

           
                <div className="grid grid-cols-2 gap-6 relative z-10">
                    <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                        alt="office 1"
                        className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                        alt="office 2"
                        className="w-full h-full object-cover mt-6 lg:mt-12 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contect;
