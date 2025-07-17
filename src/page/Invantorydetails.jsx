import { Link } from "react-router-dom"
import { removeStocks } from "../feature/stock/stockSlice"
import { useDispatch, useSelector } from "react-redux"
import { toast, ToastContainer } from "react-toastify";

const Invantorydetails = () => {
  const products = useSelector((state) => state.stock.list);
    const dispatch = useDispatch()

  const handleDelete = (id) => {
      dispatch(removeStocks(id))
      toast.error("Product Deleted Succesfully")
  }
  

  console.log(products)

  return (
    <div className="container mx-auto h-screen ">
      <div className="flex my-10 justify-between">
        <h1 className="text-2xl">Invantory Details</h1>
        <Link to={"/addinventory"} className="bg-blue-600 p-3 rounded-md text-white hover:bg-blue-500">+ Add Product</Link>
      </div>

      {products.length === 0 ? (
        <h1>No Products Found</h1>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Product name</th>
                <th scope="col" className="px-6 py-3">Color</th>
                <th scope="col" className="px-6 py-3">Category</th>
                <th scope="col" className="px-6 py-3">Price</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.name}
                  </th>
                  <td className="px-6 py-4">{product.color}</td>
                  <td className="px-6 py-4">{product.catagory}</td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4 flex gap-3">
                    <Link to={`/editinventory/${product.id}`} className="font-medium text-blue-600 hover:underline">Edit</Link>
                    <button onClick={() => {
                      handleDelete(product.id)
                    }} className="font-medium text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <ToastContainer />
    </div>
  )
}

export default Invantorydetails;
