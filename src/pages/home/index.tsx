import { HeaderHome } from "../../components/header"
import { StyledButtonRequestsFilter, StyledDivDonations, StyledDivRequests, StyledFigureBanner, StyledFigureCampaign, StyledFigureRegister, StyledFooter, StyledSectionAboutUs, StyledSectionDonationsFilter, StyledSectionProductLists } from "./style"
import banner from "../../assets/campanha.png"
import DonationProducts from "../../components/DonationProducts"
import RequestProducts from "../../components/RequestProducts"
import registerIMG from "../../assets/cadastro.png"
import campaing from "../../assets/hands-campaign.png"
export const HomePage = () => {
    return (
        <>
            <HeaderHome/>


            <StyledSectionProductLists>
                <StyledFigureBanner>
                    <img src={banner} alt="Campanha do Agasalho Junho/2023" />
                </StyledFigureBanner>
                <StyledDivDonations>
                    <StyledSectionDonationsFilter>
                        <h3>Todas as doações</h3>
                        <div>
                            <p>Procurando por:</p>
                            <ul>
                                <li>Roupas</li>
                                <li>Brinquedos</li>
                                <li>Eletro</li>
                                <li>Livros</li>
                                <li>Móveis</li>
                            </ul>
                        </div>
                    </StyledSectionDonationsFilter>
                    <h2>Itens a serem <strong>doados</strong></h2>
                    <DonationProducts/>
                </StyledDivDonations>
                <StyledDivRequests>
                    <StyledButtonRequestsFilter>Solicitações</StyledButtonRequestsFilter>
                    <h2>Itens <strong>solicitados</strong></h2>
                    <RequestProducts/>
                </StyledDivRequests>
            </StyledSectionProductLists>
            <StyledSectionAboutUs>
                <h2>Sobre Nós</h2>
                <p>Lorem ipsum dolor sit amet. Aut internos minus sit voluptate voluptas et soluta dolorem et ducimus possimus nam nesciunt consequatur est sint enim. Ut ipsam culpa vel perferendis tenetur ut nostrum quibusdam At iure rerum ea corporis omnis et vero quisquam ut dolor repellendus. </p>
                
            </StyledSectionAboutUs>

            {/* <StyledFigureCampaign>
                    <img src={campaing} alt="" />
            </StyledFigureCampaign> */}
            <StyledFigureRegister>
                <img src={registerIMG} alt="Cadastro da Campanha" />
            </StyledFigureRegister>
            <StyledFooter>
                <p>Fortalecendo a cultura de doações através de estratégia.</p>
            </StyledFooter>
        </>
    )
}
