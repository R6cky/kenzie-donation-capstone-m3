import { HeaderHome } from '../../components/header'
import { StyledFigureBanner } from './style'
import { DashboardList } from '../../components/dashboardUl'
import { FooterDashboard } from '../../components/footerDashboard'
import ImageAfterHeader from '../../assets/image-top-before-donations.png'
import ImageAfterHeaderLarge from '../../assets/image-top-before-donations-large.png'

export const HomePage = () => {
   return (
      <>
         <HeaderHome />
         <StyledFigureBanner>
            <div className='image-after-header'>
               <img src={ImageAfterHeader} alt='' />
            </div>

<<<<<<< HEAD
            <div className='image-after-header-large'>
               <img src={ImageAfterHeaderLarge} alt='' />
            </div>
         </StyledFigureBanner>
         <DashboardList />
=======
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

                </StyledFigureBanner>
                <DashboardList/>
>>>>>>> 558303cdfd469b26af015efb7a3a5419f7fc3156

         <FooterDashboard />
      </>
   )
}
