import { Route, Routes } from 'react-router-dom'
import { ModalProvider } from '../modais/modalContext'
import { Dashboard, DashboardHome } from '../pages/dashboard'
import { HomePage } from '../pages/home'

export const RoutesMain = () => {
   return (
      <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/login' element={''} />
         <Route path='/register' element={''} />
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
