import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginForm } from "../feature/stock/stockSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginForm(input));

    setTimeout(() => {
      if (JSON.parse(localStorage.getItem("isLogin"))) {
        navigate("/inventorydetail");
      } else {
        alert("Invalid Credentials!");
      }
    }, 100);
  };

  return (
    <div className="min-h-[91.4vh] flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
        {/* Logo & Brand */}
        <div className="flex justify-center items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg ">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <span className="ml-3 text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            InventoryPro
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white text-center mb-6">Sign in to your account</h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={input.email}
              onChange={handleChange}
              placeholder="admin@gmail.com"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm text-gray-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={input.password}
              onChange={handleChange}
              placeholder="admin@123"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 text-white font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 rounded-xl shadow-lg transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-300 mt-6">
          Don’t have an account?{" "}
          <span
            className="text-purple-300 hover:underline hover:text-purple-100"
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
