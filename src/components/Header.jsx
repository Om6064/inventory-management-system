import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setLogin } from "../feature/stock/stockSlice";
import { useState } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const isLogin = useSelector((state) => state.stock.isLogin);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItemClass = (path) =>
    `block py-3 px-6 ${
      pathname === path
        ? "text-white bg-[#ae54ef] rounded-xl font-medium shadow-lg transform hover:scale-105 transition-all duration-300"
        : "text-slate-300 rounded-xl font-medium hover:text-white hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-600 transform hover:scale-105 transition-all duration-300"
    }`;

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-lg border-b border-slate-700/50 shadow-2xl w-full z-20 top-0 start-0 sticky">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse group"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <span className="self-center text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
            InventoryPro
          </span>
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden inline-flex items-center p-2 text-sm text-slate-300 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col items-center font-medium border border-slate-700/30 rounded-2xl bg-slate-800/50 backdrop-blur-sm md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link to={"/"} className={navItemClass("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/sarvice"} className={navItemClass("/sarvice")}>
                Services
              </Link>
            </li>
            <li>
              <Link to={"/contect"} className={navItemClass("/contect")}>
                Contact
              </Link>
            </li>
            {isLogin && (
              <li>
                <Link
                  to={"/inventorydetail"}
                  className={navItemClass("/inventorydetail")}
                >
                  Inventory
                </Link>
              </li>
            )}
            <li className="mt-2 md:mt-0">
              {isLogin ? (
                <button
                  onClick={() => dispatch(setLogin(false))}
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-3 px-6 w-full md:w-auto"
                >
                  Log Out
                </button>
              ) : (
                <Link
                  to={"/login"}
                  className="text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  text-sm py-3 px-6 w-full md:w-auto text-center"
                >
                  Log In
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
