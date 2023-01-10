import { StyledDashboard } from "./style"
import { DashboardHeader } from "../../components/dashboardHeader"
import { DashboardList } from "../../components/dashboardUl"
import { ModalCreatePost } from "../../modais/createPost"
import { CreatePostContext } from "../../modais/createPost/contextCreatePost"
import { useContext } from 'react'
import { ModalDash } from '../../modais/modalSeusItens'
import { ModalContext } from '../../modais/modalContext'
import { HeaderHome } from "../../components/header"
import ImageAfterHeader from '../../assets/image-top-before-donations.png'
import ImageAfterHeaderLarge from '../../assets/image-top-before-donations-large.png'
import { FooterDashboard } from "../../components/footerDashboard"

export const Dashboard: () => JSX.Element = () => {
    

   const {modalCreatepost, setModalCreatepost} = useContext(CreatePostContext)


   return(
   
        <StyledDashboard> 
                  <HeaderHome/>

                <div className="image-after-header">
                     <img src={ImageAfterHeader} alt="" />
                </div>  

                <div className="image-after-header-large">
                     <img src={ImageAfterHeaderLarge} alt="" />
                </div>  
                <div className="list-post">
                    <DashboardList/>
                </div>
                {modalCreatepost === true ? <ModalCreatePost/> : false}
               <FooterDashboard/>
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

