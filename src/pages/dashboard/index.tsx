import { StyledDashboard } from "./style";
import { DashboardList } from "../../components/dashboardUl";
import { ModalCreatePost } from "../../modais/createPost";
import { CreatePostContext } from "../../modais/createPost/contextCreatePost";
import { useContext } from "react";
import { HeaderHome } from "../../components/header";
import ImageAfterHeader from "../../assets/image-top-before-donations.png";
import ImageAfterHeaderLarge from "../../assets/image-top-before-donations-large.png";
import { FooterDashboard } from "../../components/footerDashboard";
import ModalEditProfile from "../../modalProfile";
import { ModalEditContext } from "../../modalProfile/contexts";
import { UserContextLogin } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { Loading } from "../../components/loading";
import { DashboardListContext } from "../../components/dashboardUl/contextList";

export const Dashboard: () => JSX.Element = () => {
  const { modalCreatepost } = useContext(CreatePostContext);
  const { open } = useContext(ModalEditContext);
  const { user, loading } = useContext(UserContextLogin);
  const { setFilterdonation } = useContext(DashboardListContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {user.length !== 0 ? (
        <StyledDashboard>
          <HeaderHome />

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
                <li onClick={() => setFilterdonation("Eletrônicos")}>
                  Eletrônicos
                </li>
                <li onClick={() => setFilterdonation("Móveis")}>Móveis</li>
              </ul>
            </div>
          </div>
          <div className="list-post">
            <DashboardList />
          </div>
          {modalCreatepost && <ModalCreatePost />}
          {open && <ModalEditProfile />}
          <FooterDashboard />
        </StyledDashboard>
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
};
