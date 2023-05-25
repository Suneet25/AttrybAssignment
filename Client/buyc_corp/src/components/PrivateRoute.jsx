import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({children}){
    let {isAuth,loading,error,name}=useSelector(store=>store.authManager);
let navigate=useNavigate();
    if(isAuth)
    {
        return <>{children}</>;
    }else
    {
navigate("/signin")
    }
}