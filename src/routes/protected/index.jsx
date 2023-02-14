import React from "react";
import {useLocation} from "react-router"
import {Navigate,Outlet} from "react-router-dom"
const Protected=({login})=>{
    const location = useLocation();
    return login?(
        <Outlet/>
    ):(
        <Navigate to={"/"} replace state={{from:location}}/>
    )
}

export default Protected;