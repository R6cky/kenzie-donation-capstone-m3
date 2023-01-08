import { LoginStyled } from "./style"
import  Logo  from "../../assets/img/logo.png"

export const Login = () => {
    <LoginStyled>  
        <figure>
            <img src={Logo} alt="Logo" />
        </figure>
        <div>
            <div>
                <h1>Login</h1>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Digite aqui seu email..."/>
                    <label htmlFor="password">Senha</label>
                    <input type="password" placeholder="Digite aqui sua senha..." />
                    <button type="submit">Entrar</button>
                </form>
            </div>
            <p>Não possui uma conta? cadastre-se <a>aqui</a></p>
        </div>
    </LoginStyled>
}
