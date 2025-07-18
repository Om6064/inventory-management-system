import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import { setLogin } from "../feature/stock/stockSlice"

const Header = () => {
    const { pathname } = useLocation()

    const isLogin = useSelector((state) => {
        return state.stock.isLogin
    })

    let dispatch = useDispatch();


    return (
        <>
            <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-lg border-b border-slate-700/50 shadow-2xl w-full z-20 top-0 start-0 sticky">
                <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse group">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </div>
                        <span className="self-center text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                            InventoryPro
                        </span>
                    </a>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-700/30 rounded-2xl bg-slate-800/50 backdrop-blur-sm md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                            <li>
                                <Link
                                    to={"/"}
                                    className={`block py-3 px-6 ${pathname == "/" ? "text-white bg-[#ae54ef] rounded-xl font-medium shadow-lg  transform hover:scale-105 transition-all duration-300" : "text-slate-300 rounded-xl font-medium hover:text-white hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-600 transform hover:scale-105 transition-all duration-300"}`}
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/sarvice"}
                                    className={`block py-3 px-6 ${pathname == "/sarvice" ? "text-white bg-[#ae54ef] rounded-xl font-medium shadow-lg  transform hover:scale-105 transition-all duration-300" : "text-slate-300 rounded-xl font-medium hover:text-white hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-600 transform hover:scale-105 transition-all duration-300"}`}
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/contect"}
                                    className={`block py-3 px-6 ${pathname == "/contect" ? "text-white bg-[#ae54ef] rounded-xl font-medium shadow-lg  transform hover:scale-105 transition-all duration-300" : "text-slate-300 rounded-xl font-medium hover:text-white hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-600 transform hover:scale-105 transition-all duration-300"}`}
                                >
                                    Contact
                                </Link>
                            </li>
                            {
                                isLogin && <li>
                                    <Link
                                        to={"/inventorydetail"}
                                        className={`block py-3 px-6 ${(pathname == "/inventorydetail" || pathname == "/addinventory" || pathname.includes("/editinventory")) ? "text-white bg-[#ae54ef] rounded-xl font-medium shadow-lg  transform hover:scale-105 transition-all duration-300" : "text-slate-300 rounded-xl font-medium hover:text-white hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-600 transform hover:scale-105 transition-all duration-300"}`}
                                    >
                                        Inventory
                                    </Link>
                                </li>
                            }
                            {isLogin ? <Link to={"/"} class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center" onClick={() => {
                                dispatch(setLogin(false))
                            }}>Log Out</Link> : <Link to={"/login"} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center">Log in</Link>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header