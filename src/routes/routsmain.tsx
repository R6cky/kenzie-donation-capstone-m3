import { Route, Routes } from 'react-router-dom'
import { ModalProvider } from '../modais/modalContext'
import { Dashboard, DashboardHome } from '../pages/dashboard'
import { HomePage } from '../pages/home'
import { Login } from '../pages/login'
import FormRegister from '../pages/register'

export const RoutesMain = () => {
   return (
      <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<FormRegister/>} />
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route
            path='/dashboard2'
            element={
               <ModalProvider>
                  <DashboardHome />
               </ModalProvider>
            }
         />
      </Routes>
   )
}
