import { HeaderHome } from "../../components/header"
import { StyledDivDonations, StyledDivRequests, StyledFigureBanner, StyledFigureCampaign, StyledFigureRegister, StyledFooter, StyledSectionAboutUs, StyledSectionDonationsFilter, StyledSectionProductLists } from "./style"
import banner from "../../assets/campanha.png"
import DonationProducts from "../../components/DonationProducts"
import RequestProducts from "../../components/RequestProducts"
import registerIMG from "../../assets/cadastro.png"
import campaing from "../../assets/hands-campaign.png"
import { DashboardList } from "../../components/dashboardUl"
import { FooterDashboard } from "../../components/footerDashboard"
export const HomePage = () => {
    return (
        <>
            <HeaderHome/>

            <StyledSectionProductLists>
                <StyledFigureBanner>
                    <img src={banner} alt="Campanha do Agasalho Junho/2023" />
                </StyledFigureBanner>
                <DashboardList/>
                <StyledDivRequests>
                    <button>Solicitações</button>
                    <h2>Itens <strong>solicitados</strong></h2>
                </StyledDivRequests>
            </StyledSectionProductLists>

            <FooterDashboard/>
        </>
    )
}
