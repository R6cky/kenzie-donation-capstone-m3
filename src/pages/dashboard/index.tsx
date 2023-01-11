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
import { UserContextLogin } from '../../contexts/UserContext'

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
      <div className='menu-large'>
          <div className='all-donations'>
              <h3>Todas as doações</h3>
          </div>
          <div className='filter-menu-container'>
              <h4 className='filter-menu-title'>Procurando por ?</h4>
              <ul className='list-filter-menu'>
                  <li>Roupas</li>
                  <li>Brinquedos</li>
                  <li>Eletro</li>
                  <li>Móveis</li>
              </ul>
          </div>
      </div>
      <div className="list-post">
        <DashboardList />
      </div>
      {modalCreatepost === true ? <ModalCreatePost /> : false}
      <FooterDashboard />
    </StyledDashboard>
  )
}


