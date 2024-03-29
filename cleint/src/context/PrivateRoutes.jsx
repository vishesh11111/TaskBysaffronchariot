import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext"


export const PrivateRoute = ({children})=>{
    const {isAuth} = useContext(AuthContext);

    if(!isAuth){
        return <Navigate to={'/login'} replace={true}/>
    }
    return children;
}