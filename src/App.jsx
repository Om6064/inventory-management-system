import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Header from "./components/Header"
import Sarvice from "./page/Sarvice"
import Contect from "./page/Contect"
import AddInventory from "./components/AddInventory"
import Invantorydetails from "./page/Invantorydetails"
import { ToastContainer } from "react-toastify"
import EditInventory from "./components/EditInventory"
import Login from "./page/Login"
import ProtectedRouter from "./components/ProtectedRouter"



const App = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sarvice" element={<Sarvice/>}/>
                <Route path="/contect" element={<Contect/>}/>
                <Route path="/addinventory" element={<ProtectedRouter Component={AddInventory} />} />
                <Route path="/inventorydetail" element={<ProtectedRouter Component={Invantorydetails}/>}/>
                <Route path="/editinventory/:id" element={<ProtectedRouter Component={EditInventory}/>}/>
                <Route path="/login/" element={<Login/>}/>
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    )   
}

export default App