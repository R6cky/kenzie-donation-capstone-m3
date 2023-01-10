import { StyledFooterDashboard } from "./style";
import FirstImageFooterTablet from '../../assets/first-image-footer-tablet.png'
import SecondImageFooterTablet from '../../assets/second-image-footer-tablet.png'
import FirstImageFooterDesktop from '../../assets/first-image-footer-desktop.png'
import SecondImageFooterDesktop from '../../assets/second-image-footer-desktop.png'
import Logo from '../../assets/logo.svg'


export const FooterDashboard = () => {



    return(
        <StyledFooterDashboard>
            <div className="area-info-top">
                <h3>Sobre nós</h3>
                <p>Lorem ipsum dolor sit amet. Aut internos minus sit voluptate voluptas et soluta dolorem et ducimus 
                   possimus nam nesciunt consequatur est sint enim. Ut ipsam culpa vel perferendis tenetur ut nostrum 
                   quibusdam At iure rerum ea corporis omnis et vero quisquam ut dolor repellendus. </p>
            </div>
            <div className="image-area">
                <div><img src={FirstImageFooterTablet} alt="" /></div>
                <div><img src={SecondImageFooterTablet} alt="" /></div>
            </div>
            <div className="image-area-desktop">
                <div><img src={FirstImageFooterDesktop} alt="" /></div>
                <div><img src={SecondImageFooterDesktop} alt="" /></div>
            </div>
            <div className="area-info-bottom">
                <p>Fortalecendo a cultura de doações através de estratégia.</p>
                <img src={Logo} alt="" />
            </div>
        </StyledFooterDashboard>
    )
}
