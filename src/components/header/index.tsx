import Logo from "../../assets/logo.svg";
import Menu from "../../assets/menu.svg";
import Clothes from "../../assets/clothes.svg";
import Rocket from "../../assets/rocket.svg";
import Poltrona from "../../assets/poltrona.svg";
import Smartphone from "../../assets/smartphone.svg";
import ExitBtn from "../../assets/btn-exit-dashboard.png";
import Book from "../../assets/book.png";
import { StyledHeader } from "./style";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CreatePostContext } from "../../modais/createPost/contextCreatePost";
import { ModalEditContext } from "../../modalProfile/contexts";
import { ModalContext } from "../../modais/modalContext";
import { ModalDash } from "../../modais/modalYourItems";
import { UserContextLogin } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { DashboardListContext } from "../dashboardUl/contextList";
import { ModalCreatePost } from "../../modais/createPost";

export const HeaderHome = () => {
  const { setModalCreatepost, modalCreatePost } = useContext(CreatePostContext);
  const { setIsOpen } = useContext(ModalEditContext);
  const { modalIsOpen, handleModal } = useContext(ModalContext);
  const { user, setUser } = useContext(UserContextLogin);
  const { setFilterdonation } = useContext(DashboardListContext);

  const navigate = useNavigate();

  const swapMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  console.log("aqui" + modalCreatePost);

  const [menu, setMenu] = useState(false);

  return (
    <StyledHeader>
      <div className="img-header">
        <img src={Logo} alt="Logo" />
        <div className="dropDown">
          {user ? (
            <>
              <img
                className="btn-menu"
                onClick={() => swapMenu()}
                src={Menu}
                alt="Menu"
              />
              <img
                className="exit-btn"
                onClick={() => logout()}
                src={ExitBtn}
                alt="Menu"
              />

              {menu && (
                <div className="dropDown-content-logged">
                  <button
                    className="buttons-menu-dashboard"
                    onClick={() => setIsOpen(true)}
                  >
                    Editar perfil
                  </button>
                  <button
                    className="buttons-menu-dashboard"
                    onClick={() => setModalCreatepost(true)}
                  >
                    Novo post
                  </button>

                  <button
                    onClick={() => setModalCreatepost(true)}
                    className="buttons-menu-dashboard"
                  >
                    Seus itens
                  </button>
                  {modalIsOpen && <ModalDash />}
                </div>
              )}
            </>
          ) : (
            <>
              <img
                className="btn-menu"
                onClick={() => swapMenu()}
                src={Menu}
                alt="Menu"
              />

              {menu && (
                <div className="dropDown-content">
                  <Link to={"/login"} className="login-home">
                    Entrar
                  </Link>
                  <Link to={"/register"} className="register-home">
                    Cadastrar-se
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div className="btn-filter">
        <div className="box-icon-filter">
          <div className="icon-filter">
            <img src={Clothes} alt="Roupas" />
          </div>
          <p className="icon-name">Roupas</p>
        </div>
        <div className="box-icon-filter">
          <div className="icon-filter">
            <img src={Rocket} alt="Brinquedos" />
          </div>
          <p className="icon-name">Brinquedos</p>
        </div>
        <div className="box-icon-filter">
          <div className="icon-filter">
            <img src={Poltrona} alt="Móveis" />
          </div>
          <p className="icon-name">Móveis</p>
        </div>
        <div className="box-icon-filter">
          <div className="icon-filter">
            <img src={Smartphone} alt="Eletrônicos" />
          </div>
          <p className="icon-name">Eletro</p>
        </div>
        <div className="box-icon-filter">
          <div className="icon-filter">
            <img src={Book} alt="Livros" />
          </div>
          <p className="icon-name">Livros</p>
        </div>
      </div>

      <div className="btn-filter-large">
        {user ? (
          <div className="options-menu-logged">
            <p className="saudation-to-logged">
              <span>Seja bem vindo</span>, {user.name}!
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="options-menu-button"
            >
              Editar perfil
            </button>
            <button
              onClick={() => setModalCreatepost(true)}
              className="options-menu-button"
            >
              Novo post
            </button>
            <button
              onClick={() => handleModal()}
              className="options-menu-button"
            >
              Seus itens
            </button>
            <button onClick={() => logout()} className="options-menu-button">
              Sair
            </button>
            {modalIsOpen && <ModalDash />}
          </div>
        ) : (
          <div className="options-menu">
            <Link to={"/login"} className="options-menu-button">
              Login
            </Link>
            <Link to={"/register"} className="options-menu-button">
              Cadastre-se
            </Link>
          </div>
        )}
      </div>
    </StyledHeader>
  );
};
