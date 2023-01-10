import { HeaderHome } from "../../components/header"
import { StyledFigureBanner} from "./style"
import { DashboardList } from "../../components/dashboardUl"
import { FooterDashboard } from "../../components/footerDashboard"
import ImageAfterHeader from '../../assets/image-top-before-donations.png'
import ImageAfterHeaderLarge from '../../assets/image-top-before-donations-large.png'




export const HomePage = () => {
    return (
        <>
            <HeaderHome/>
                <StyledFigureBanner>
                <div className="image-after-header">
                        <img src={ImageAfterHeader} alt="" />
                  </div>  

                  <div className="image-after-header-large">
                        <img src={ImageAfterHeaderLarge} alt="" />
                    </div> 
                </StyledFigureBanner>
                <DashboardList/>

            <FooterDashboard/>
        </>
    )
}
