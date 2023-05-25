
import { AUTH_ERROR,AUTH_LOADING,AUTH_SUCCESS,AUTH_LOGOUT,AUTH_REGISTER_ERROR,AUTH_REGISTER_LOADING,AUTH_REGISTER_SUCCESS } from "./auth.actionTypes";
import axios from "axios";



//register

export let registerfun=(data)=>async(dispatch)=>{
 
    dispatch({type:AUTH_REGISTER_LOADING});
    try {
        let res=await axios.post(`http://localhost:8000/api/user/register`,{name:data.name,email:data.email,password:data.password});
        console.log(res.data);
        if(res.data.success)
        {

            dispatch({type:AUTH_REGISTER_SUCCESS,payload:res.data});
        }


}catch (error) {
        console.log(error);
        dispatch({type:AUTH_REGISTER_ERROR})
    }
}





//login
export let loginfun=(data)=>async(dispatch)=>{
 
    dispatch({type:AUTH_LOADING});
    try {
        let res=await axios.post(`http://localhost:8000/api/user/login`,{email:data.email,password:data.password});
        console.log(res.data);
    dispatch({type:AUTH_SUCCESS,payload:res.data});


}catch (error) {
        console.log(error);
        dispatch({type:AUTH_ERROR})
    }
}


//logout
export let logoutfun=()=>async(dispatch)=>{
    dispatch({type:AUTH_LOGOUT});
}