import { StyledDashboard } from './style'
import { DashboardHeader } from '../../components/dashboardHeader'
import { DashboardList } from '../../components/dashboardUl'
import { ModalCreatePost } from '../../modais/createPost'
import { CreatePostContext } from '../../modais/createPost/contextCreatePost'
import { useContext } from 'react'
import { ModalDash } from '../../modais/modalYourItems'
import { ModalContext } from '../../modais/modalContext'
import { HeaderHome } from '../../components/header'
import ImageAfterHeader from '../../assets/image-top-before-donations.png'
<<<<<<< HEAD
import { FooterDashboard } from '../../components/footerDashboard'

export const Dashboard: () => JSX.Element = () => {
   const { modalCreatepost, setModalCreatepost } = useContext(CreatePostContext)

   return (
      <StyledDashboard>
         <HeaderHome />
         <div className='image-after-header'>
            <img src={ImageAfterHeader} alt='' />
         </div>
         <div className='list-post'>
            <DashboardList />
         </div>
         {modalCreatepost === true ? <ModalCreatePost /> : false}
         <FooterDashboard />
      </StyledDashboard>
   )
=======
import ImageAfterHeaderLarge from '../../assets/image-top-before-donations-large.png'
import { FooterDashboard } from "../../components/footerDashboard"
import ModalEditProfile from "../../modalProfile"
import { ModalEditContext } from "../../modalProfile/contexts"

export const Dashboard: () => JSX.Element = () => {


  const { modalCreatepost, setModalCreatepost } = useContext(CreatePostContext)
  const { open } = useContext(ModalEditContext)


  return (

    <StyledDashboard>
      <HeaderHome />
      {open ? <ModalEditProfile /> : false}
      

      <div className="image-after-header">
        <img src={ImageAfterHeader} alt="" />
      </div>

      <div className="image-after-header-large">
        <img src={ImageAfterHeaderLarge} alt="" />
      </div>
      <div className="list-post">
        <DashboardList />
      </div>
      {modalCreatepost === true ? <ModalCreatePost /> : false}
      <FooterDashboard />
    </StyledDashboard>
  )
>>>>>>> a15000d07586a7738802366d066938bba7b85af6
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
