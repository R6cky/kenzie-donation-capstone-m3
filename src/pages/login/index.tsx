import Logo from "../../assets/img/logo.png";
import Box from "../../assets/img/box.png";
import Donation from "../../assets/img/donation.PNG";
import { LoginStyled } from "./style";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <LoginStyled>
      <div className="desktop">
        <figure className="donation">
          <img src={Logo} alt="Logo" />
        </figure>
        <figure className="donationDesktop">
          <img src={Donation} alt="Doação" />
        </figure>
        <div className="boxLogin">
          <div className="login">
            <h1>Login</h1>
            <form>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Digite aqui seu email..."
              />
              <label htmlFor="password">Senha</label>
              <input type="password" placeholder="Digite aqui sua senha..." />
              <button type="submit">Entrar</button>
              <span className="spanDesktop">
            Não possui uma conta? cadastre-se<Link to="/register">aqui</Link>!
          </span>
            </form>
          </div>
          <span className="span">
            Não possui uma conta? cadastre-se<Link to="/register">aqui</Link>!
          </span>
        </div>
      </div>
      <footer>
        <figure className="box">
          <img src={Box} alt="Caixas" />
        </figure>
        <div className="textFooter">
          <p>Fortalecendo a cultura de doações através de estratégia.</p>
        </div>
        <div className="textFooterDesktop">
          <p>Fortalecendo a cultura de doações através de estratégia.  - Organização sem fins lucrativos - Todos os direitos reservados.</p>
        </div>
      </footer>
    </LoginStyled>
  );
};
