import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateStocks } from "../feature/stock/stockSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

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
        navigate("/inventorydetail")

    };

    return (
        <div className="container mx-auto my-36 px-4">
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">

                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                            Product name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={input.name}
                            onChange={handleChange}
                            className={`bg-gray-50 border ${error.name ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                            placeholder="Apple MacBook Pro 17"
                        />
                        {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
                    </div>


                    <div>
                        <label className={`block text-sm ${error.color ? "text-red-600" : "text-gray-600"}`}>Colors</label>
                        <div className="flex items-center gap-4 mt-2">
                            {["Silver", "White", "Black", "Gray"].map((color) => (
                                <label className="flex items-center" key={color}>
                                    <input
                                        type="radio"
                                        value={color}
                                        onChange={handleChange}
                                        checked={input.color === color}
                                        className="mr-2 w-4 h-4"
                                        name="color"
                                    />
                                    {color}
                                </label>
                            ))}
                        </div>
                        {error.color && <p className="text-red-500 text-sm mt-1">{error.color}</p>}
                    </div>


                    <div>
                        <label htmlFor="catagory" className="block mb-2 text-sm font-medium text-gray-900">
                            Category
                        </label>
                        <select
                            onChange={handleChange}
                            id="catagory"
                            value={input.catagory}
                            className={`bg-gray-50 border ${error.catagory ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                        >
                            <option value="">---choose Category---</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Tablet">Tablet</option>
                            <option value="Mobile">Mobile</option>
                        </select>
                        {error.catagory && <p className="text-red-500 text-sm mt-1">{error.catagory}</p>}
                    </div>


                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            value={input.price}
                            onChange={handleChange}
                            className={`bg-gray-50 border ${error.price ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                            placeholder="$1000"
                        />
                        {error.price && <p className="text-red-500 text-sm mt-1">{error.price}</p>}
                    </div>
                </div>


                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
                >
                    Submit
                </button>
            </form>

        </div>
    );
};

export default EditInventory;
