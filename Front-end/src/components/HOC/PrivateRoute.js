import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} component={(props) => {
        const token = window.localStorage.getItem('token');
        if(token){
            return <Component {...props} />
        }else{
            return <Navigate to={'/admin-login'} />
        }
    }}/>
}

export default PrivateRoute;