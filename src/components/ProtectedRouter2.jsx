import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute2 = ({ Component }) => {

    const navigate = useNavigate()

    const loginStatus = useSelector((state) => {
        return state.stock.isLogin;
    });

    useEffect(() => {
        console.log(loginStatus);
        
        if (loginStatus) {
            navigate("/inventorydetail")
        }
    }, [])

    return (
        <Component />
    )
}

export default ProtectedRoute2