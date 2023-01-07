<<<<<<< HEAD
export const Teste = () => {}
=======
import { StyledDashboard } from "./style"
import { DashboardHeader } from "../../components/dashboardHeader"
import { DashboardList } from "../../components/dashboardUl"
import { ModalCreatePost } from "../../modais/createPost"
import {useContext} from 'react'
import { CreatePostContext } from "../../modais/createPost/contextCreatePost"

export const Dashboard: () => JSX.Element = () => {
    

   const {modalCreatepost, setModalCreatepost} = useContext(CreatePostContext)


   return(
   
        <StyledDashboard> 

                              
                <DashboardHeader/>
                <div className="list-post">
                    <DashboardList/>
                </div>
                <div className="list-request">
                    <DashboardList/>
                </div>
                {modalCreatepost === true ? <ModalCreatePost/> : false}
           
               
            
        </StyledDashboard>
    
   )
}
>>>>>>> 8f6cef14d6010831f7c0d6390f0906f7a0b8a14b
