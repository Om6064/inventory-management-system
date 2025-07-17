import { Link } from "react-router-dom";
import { removeStocks } from "../feature/stock/stockSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const Invantorydetails = () => {
  const products = useSelector((state) => state.stock.list);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeStocks(id));
    toast.error("Product Deleted Successfully");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Inventory Details
          </h1>
          <Link
            to="/addinventory"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 py-2 rounded-xl font-semibold shadow-lg transition-all duration-300"
          >
            + Add Product
          </Link>
        </div>

        {products.length === 0 ? (
          <h2 className="text-center text-gray-300 text-lg">No Products Found</h2>
        ) : (
          <div className="overflow-x-auto rounded-2xl backdrop-blur-md bg-white/10 border border-white/10 shadow-xl">
            <table className="min-w-full text-sm text-left text-white">
              <thead className="text-xs uppercase bg-white/10 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4">Product Name</th>
                  <th className="px-6 py-4">Color</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-white/5 transition-colors duration-300 border-b border-white/10"
                  >
                    <td className="px-6 py-4 font-medium">{product.name}</td>
                    <td className="px-6 py-4">{product.color}</td>
                    <td className="px-6 py-4">{product.catagory}</td>
                    <td className="px-6 py-4">${product.price}</td>
                    <td className="px-6 py-4 flex gap-4">
                      <Link
                        to={`/editinventory/${product.id}`}
                        className="text-blue-400 hover:text-blue-300 font-semibold transition"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-red-400 hover:text-red-300 font-semibold transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <ToastContainer />
      </div>
    </div>
  );
};

export default Invantorydetails;
