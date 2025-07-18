import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ProtectedRouter = ({Component}) => {
    const navigate = useNavigate()

    useEffect(() => {
        let loginStatus = JSON.parse(localStorage.getItem("isLogin")) || false
        console.log(loginStatus);
        if (!loginStatus) {
            navigate("/login")
        }
    }, [])

    return(
        <Component/>
    )
}

export default ProtectedRouter