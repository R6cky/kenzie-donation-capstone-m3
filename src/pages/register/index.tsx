import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import Register from "../../assets/img/register1.png";
import { UserContext } from "./contextRegister/ContextRegister";
import { RegisterStyled } from "./style";
export interface Idata {
  name: string;
  email: string;
  password: string;
}

const FormRegister = () => {
  interface Iuser {
    name: string;
    email: string;
    password: string;
  }
  const { submitFormRegister } = useContext(UserContext);
  const [user, setUser] = useState<Iuser>();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("O nome é obrigatório !")
      .min(3, "O nome precisa ter pelo menos 3 caracteres")
      .max(200, "O nome pode ter no máximo 200 caracteres"),
    email: yup
      .string()
      .required("O email é obrigatório !")
      .email("Precisa ser um email"),
    password: yup
      .string()
      .required("A senha é obrigatória !")
      .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula")
      .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula")
      .matches(/(?=.*?[0-9])/, "É necessário pelo menos um dígito")
      .matches(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário pelo menos um caractere especial"
      )
      .matches(/.{8,}/, "Comprimento mínimo de oito caracteres"),
    photo: yup.string().required("A imagem é obrigatória !"),
    phone: yup.number().required("O telefone é obrigatório !"),
    state: yup.string().required("O Estado é obrigatório !"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      photo: "",
      phone: "",
      state: "",
    },
    resolver: yupResolver(formSchema),
  });

  const SubmitForm = (FormData: any) => {
    setUser(FormData);
    submitFormRegister(FormData);
  };
  const navigate = useNavigate();

  return (
    <RegisterStyled>
      <div className="desktop animate__animated animate__fadeInDown">
        <figure className="donation">
          <img src={Logo} alt="Logo" />
          <p>
            <Link className="back" to="/login">
              Voltar
            </Link>
          </p>
        </figure>
        <figure className="donationDesktop">
          <img src={Register} alt="Doação" />
        </figure>
        <div className="boxLogin">
          <div className="login">
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit(SubmitForm)} noValidate>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                placeholder="Digite aqui seu nome completo..."
                {...register("name")}
              />
              <p className="error">
                {errors.name?.message && (
                  <p className="error">{errors.name.message}</p>
                )}
              </p>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Digite aqui seu email..."
                {...register("email")}
              />
              <p className="error">
                {errors.email?.message && (
                  <p className="error">{errors.email.message}</p>
                )}
              </p>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                placeholder="Digite aqui sua senha..."
                {...register("password")}
              />
              {errors.password?.message && (
                <p className="error">{errors.password.message}</p>
              )}
              <label htmlFor="photo">Avatar</label>
              <input
                type="link"
                placeholder="Coloque a URL do seu Avatar"
                {...register("photo")}
              />
              {errors.photo?.message && (
                <p className="error">{errors.photo.message}</p>
              )}
              <label htmlFor="phone">Telefone</label>
              <input
                type="number"
                placeholder="Digite seu telefone"
                {...register("phone")}
              />
              {errors.phone?.message && (
                <p className="error">{errors.phone.message}</p>
              )}
              <label htmlFor="state">Estado</label>
              <input
                placeholder="Digite aqui seu estado..."
                {...register("state")}
              />
              {errors.state?.message && (
                <p className="error">{errors.state.message}</p>
              )}
              <button>Cadastrar</button>
              <span className="spanDesktop">
                Já possui um Login? logue
                <Link to="/login">aqui</Link>!
              </span>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <div className="textFooter">
          <span className="span">
            Já possui um Login? logue
            <Link to="/login">aqui</Link>!
          </span>
        </div>
        <div className="textFooterDesktop">
          <p>
            Fortalecendo a cultura de doações através de estratégia. -
            Organização sem fins lucrativos - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </RegisterStyled>
  );
};

export default FormRegister;
