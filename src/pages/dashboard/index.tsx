import { StyledDashboard } from "./style"
import { DashboardHeader } from "../../components/dashboardHeader"
import { DashboardList } from "../../components/dashboardUl"
import { ModalCreatePost } from "../../modais/createPost"
import { CreatePostContext } from "../../modais/createPost/contextCreatePost"
import { useContext } from 'react'
import { ModalDash } from '../../modais/modalSeusItens'
import { ModalContext } from '../../modais/modalContext'
import { HeaderHome } from "../../components/header"


export const Dashboard: () => JSX.Element = () => {
    

   const {modalCreatepost, setModalCreatepost} = useContext(CreatePostContext)


   return(
   
        <StyledDashboard> 

                              
                  <HeaderHome/>
                <div className="list-post">
                    <DashboardList/>
                </div>
                {modalCreatepost === true ? <ModalCreatePost/> : false}
           
               
            
        </StyledDashboard>
   )
   }

export const DashboardHome = () => {
   const { modalIsOpen, handleModal } = useContext(ModalContext)

   return (
      <div>
         <button onClick={() => handleModal()}>OPEN MODAL</button>
         {modalIsOpen && <ModalDash />}
      </div>
   )
}
