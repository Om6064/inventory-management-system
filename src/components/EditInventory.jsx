import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateStocks } from "../feature/stock/stockSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DarkVeil from "./DarkVeil";

const EditInventory = () => {
    const [input, setInput] = useState({
        name: "",
        color: "",
        catagory: "",
        price: ""
    });

    const { id } = useParams();

    const [error, setError] = useState({});
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const stocks = useSelector((state) => {
        return state.stock.list;
    });

    useEffect(() => {
        const existingStock = stocks.find((sto) => sto.id === id);
        if (existingStock) {
            setInput(existingStock);
        } else {
            navigate("/inventorydetail")
        }
    }, [id]);

    const handleChange = (e) => {
        const key = e.target.name || e.target.id;
        setInput({ ...input, [key]: e.target.value });
        setError({ ...error, [key]: "" });
    };

    const validate = () => {
        const tempErrors = {};
        if (!input.name.trim()) tempErrors.name = "Product name is required";
        if (!input.color) tempErrors.color = "Please select a color";
        if (!input.catagory) tempErrors.catagory = "Please select a category";
        if (!input.price || Number(input.price) <= 0) tempErrors.price = "Enter a valid price";
        return tempErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setError(errors);
            return;
        }

        toast.warn("Product Updated successfully!");


        setInput({
            name: "",
            color: "",
            catagory: "",
            price: ""
        });

        dispatch(updateStocks(input))
        setTimeout(() => {
            navigate("/inventorydetail");
        }, 1000);

    };

    return (
        <div className="min-h-[91.4vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center px-4 py-12">
            <div className="absolute inset-0 z-0 overflow-hidden md:">
                <DarkVeil />
            </div>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-3xl bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-white/20"
            >
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                    Update Product
                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                    <div>
                        <label htmlFor="name" className="block text-sm mb-2 font-medium text-white">
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={input.name}
                            onChange={handleChange}
                            placeholder="Apple MacBook Pro 17"
                            className={`w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border ${error.name ? "border-red-500" : "border-white/30"
                                } focus:outline-none focus:ring-2 focus:ring-purple-400`}
                        />
                        {error.name && <p className="text-red-400 text-sm mt-1">{error.name}</p>}
                    </div>


                    <div>
                        <label htmlFor="catagory" className="block text-sm mb-2 font-medium text-white">
                            Category
                        </label>
                        <select
                            id="catagory"
                            value={input.catagory}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-lg bg-white/20 text-white border ${error.catagory ? "border-red-500" : "border-white/30"
                                } focus:outline-none focus:ring-2 focus:ring-purple-400`}
                        >
                            <option className="text-black" value="">--- Choose Category ---</option>
                            <option className="text-black" value="Laptop">Laptop</option>
                            <option className="text-black" value="Tablet">Tablet</option>
                            <option className="text-black" value="Mobile">Mobile</option>
                        </select>
                        {error.catagory && <p className="text-red-400 text-sm mt-1">{error.catagory}</p>}
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-white mb-2">Color</label>
                        <div className="flex flex-wrap gap-4">
                            {["Silver", "White", "Black", "Gray"].map((color) => (
                                <label key={color} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value={color}
                                        onChange={handleChange}
                                        checked={input.color === color}
                                        className="accent-purple-500"
                                        name="color"
                                    />
                                    <span className="text-sm">{color}</span>
                                </label>
                            ))}
                        </div>
                        {error.color && <p className="text-red-400 text-sm mt-1">{error.color}</p>}
                    </div>


                    <div>
                        <label htmlFor="price" className="block text-sm mb-2 font-medium text-white">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            value={input.price}
                            onChange={handleChange}
                            placeholder="$1000"
                            className={`w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border ${error.price ? "border-red-500" : "border-white/30"
                                } focus:outline-none focus:ring-2 focus:ring-purple-400`}
                        />
                        {error.price && <p className="text-red-400 text-sm mt-1">{error.price}</p>}
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-8 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 py-3 rounded-lg font-semibold shadow-lg transition duration-300"
                >
                    Update
                </button>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default EditInventory;
