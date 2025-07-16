import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Header from "./components/Header"
import Sarvice from "./page/Sarvice"
import Contect from "./page/Contect"

const App = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sarvice" element={<Sarvice/>}/>
                <Route path="/contect" element={<Contect/>}/>
                <Route path="/addinventory" />
                <Route path="/inventorydetail" />
            </Routes>
        </BrowserRouter>
    )
}

export default App