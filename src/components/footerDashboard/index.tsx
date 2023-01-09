import { StyledFooterDashboard } from "./style";
import FirstImageFooter from '../../assets/first-image-footer.png'
import SecondImageFooter from '../../assets/second-image-footer.png'



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
                <div><img src={FirstImageFooter} alt="" /></div>
                <div><img src={SecondImageFooter} alt="" /></div>
            </div>
            <div className="area-info-bottom">
                <p>Fortalecendo a cultura de doações através de estratégia.</p>
            </div>
        </StyledFooterDashboard>
    )
}
