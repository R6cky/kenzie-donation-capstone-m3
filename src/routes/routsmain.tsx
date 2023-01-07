import { Route, Routes } from "react-router-dom";
import { ModalCreatePost } from "../modais/createPost";
import { Dashboard } from "../pages/dashboard";

export const RoutesMain = () => {
   return (
      <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/home' element={''} />
         <Route path='/login' element={''} />
         <Route path='/register' element={''} />
         <Route path='/dashboard' element={''} />
      </Routes>
   )
}
