import { HeaderHome } from "../../components/header";
import { StyledFigureBanner } from "./style";
import { DashboardList } from "../../components/dashboardUl";
import { FooterDashboard } from "../../components/footerDashboard";
import ImageAfterHeader from "../../assets/image-top-before-donations.png";
import ImageAfterHeaderLarge from "../../assets/image-top-before-donations-large.png";
import { useContext } from "react";
import { DashboardListContext } from "../../components/dashboardUl/contextList";

export const HomePage = () => {
  const { setFilterdonation } = useContext(DashboardListContext);

  return (
    <>
      <HeaderHome />
      <StyledFigureBanner>
        <div className="image-after-header">
          <img src={ImageAfterHeader} alt="" />
        </div>

        <div className="image-after-header-large">
          <img src={ImageAfterHeaderLarge} alt="" />
        </div>

        <div className="menu-large">
          <div
            className="all-donations"
            onClick={() => setFilterdonation("Todas as doações")}
          >
            <h3>Todas as doações</h3>
          </div>
          <div className="filter-menu-container">
            <h4 className="filter-menu-title">Procurando por ?</h4>
            <ul className="list-filter-menu">
              <li onClick={() => setFilterdonation("Roupas")}>Roupas</li>
              <li onClick={() => setFilterdonation("Brinquedos")}>
                Brinquedos
              </li>
              <li onClick={() => setFilterdonation("Eletrônicos")}>Eletro</li>
              <li onClick={() => setFilterdonation("Móveis")}>Móveis</li>
            </ul>
          </div>
        </div>
      </StyledFigureBanner>
      <DashboardList />

      <FooterDashboard />
    </>
  );
};
