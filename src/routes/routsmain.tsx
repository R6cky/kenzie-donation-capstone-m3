import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../pages/login";

export const RoutesMain = () => {

    return(
        <Routes>
            <Route path="/" element={<Navigate to="/login" />}/>    
            <Route path="/home" element={''}/>    
            <Route path="/login" element={<Login />}/>    
            <Route path="/register" element={''}/>    
            <Route path="/dashboard" element={''}/>    
        </Routes>
    )
   
}