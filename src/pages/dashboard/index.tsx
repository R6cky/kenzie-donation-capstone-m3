import { StyledDashboard } from './style'
import { DashboardList } from '../../components/dashboardUl'
import { ModalCreatePost } from '../../modais/createPost'
import { CreatePostContext } from '../../modais/createPost/contextCreatePost'
import { useContext } from 'react'
import { HeaderHome } from '../../components/header'
import ImageAfterHeader from '../../assets/image-top-before-donations.png'
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
}

// export const DashboardHome = () => {
//   const { modalIsOpen, handleModal } = useContext(ModalContext)

//   return (
//     <div>
//       <button>OPEN MODAL</button>
//     </div>
//   )
// }
