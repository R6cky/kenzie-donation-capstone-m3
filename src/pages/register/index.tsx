import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";
import PictureMobile from "./assets/imgRegister/logomobile.svg";
import Picture from "./assets/imgRegister/photoPageRegister.svg";
import { UserContext } from "./contextRegister/ContextRegister";
import {
  BtnBack,
  ButtonCad,
  DivPrimari,
  DivTest,
  ErrorP,
  FooterText,
  FormStyle,
  InputForAll,
  LabelForAll,
  PictureRe,
  SectionSecundary,
  SpanLogo,
  TitleForm,
} from "./style";
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
  console.log(user);
  const regex = new RegExp(
    "^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$"
  );

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("digite sua senha com 8 digitos e um caractere especial ")
      .matches(
        regex,
        "Sua senha deve conter uma leta Maiusculo , uma minuscula um caracter especial, alem de ter no minimo 8 digitos exemplo: Br@sil2012 "
      ),
    confirmPassword: yup
      .string()
      .required("os campos de senha deve ser iguais")
      .oneOf([yup.ref("password"), "Os campos nao correspondem", null]),
    photo: yup.string().required("Voce não colocou sua foto de perfil "),
    phone: yup.string().required("Telefone não especificado"),
    state: yup.string().required(" nos diga qual é seu estado!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  console.log(errors);

  const SubmitForm = (FormData: any) => {
    setUser(FormData);
    submitFormRegister(FormData);
  };
  const navigate = useNavigate();
  const Back = () => {
    navigate("/login");
  };
  return (
    <DivPrimari>
      <SectionSecundary>
        <FormStyle onSubmit={handleSubmit(SubmitForm)}>
          <SpanLogo>
            <img src={PictureMobile} alt="kenzie donation" />
            <BtnBack onClick={() => Back()}>Voltar</BtnBack>
          </SpanLogo>
          <TitleForm> Cadastro</TitleForm>
          <LabelForAll htmlFor="name">Nome</LabelForAll>
          <InputForAll
            type="text"
            placeholder="digite seu nome"
            {...register("name")}
          />
          <ErrorP>
            {errors.name &&
              errors.name.message &&
              errors.name.message.toString()}
          </ErrorP>
          <LabelForAll htmlFor="email">Email</LabelForAll>
          <InputForAll type="text" placeholder="Email" {...register("email")} />
          <ErrorP>
            {errors.name &&
              errors.name.message &&
              errors.email &&
              errors.email.message &&
              errors.email.message.toString()}
          </ErrorP>
          <LabelForAll htmlFor="password">Senha</LabelForAll>
          <InputForAll
            type="password"
            placeholder="digite sua senha..."
            {...register("password")}
          />
          <ErrorP>
            {errors.name &&
              errors.name.message &&
              errors.password &&
              errors.password.message &&
              errors.password.message.toString()}
          </ErrorP>
          <LabelForAll htmlFor="confirmPassword">
            Confirme sua senha
          </LabelForAll>
          <InputForAll
            placeholder="Confirme Sua senha..."
            type="password"
            {...register("confirmPassword")}
          />
          <ErrorP>
            {errors.name &&
              errors.name.message &&
              errors.confirmPassword &&
              errors.confirmPassword.message &&
              errors.confirmPassword.message.toString()}
          </ErrorP>
          <LabelForAll htmlFor="photo">Avatar</LabelForAll>
          <InputForAll
            type="link"
            placeholder="Coloque a URL do seu Avatar"
            {...register("photo")}
          />
          <ErrorP>
            {errors.name &&
              errors.name.message &&
              errors.photo &&
              errors.photo.message &&
              errors.photo.message.toString()}
          </ErrorP>
          <LabelForAll htmlFor="phone">Telefone</LabelForAll>
          <InputForAll
            type="number"
            placeholder="Digite seu telefone"
            {...register("phone")}
          />
          <ErrorP>
            {errors.name &&
              errors.name.message &&
              errors.phone &&
              errors.phone.message &&
              errors.phone.message.toString()}
          </ErrorP>
          <LabelForAll htmlFor="state">Estado</LabelForAll>
          <InputForAll
            placeholder="Digite aqui seu estado..."
            {...register("state")}
          />
          <ErrorP>
            {errors.name &&
              errors.name.message &&
              errors.state &&
              errors.state.message &&
              errors.state.message.toString()}
          </ErrorP>
          <ButtonCad onSubmit={handleSubmit(SubmitForm)}>Cadastrar</ButtonCad>
        </FormStyle>

        <DivTest>
          <PictureRe
            src={Picture}
            alt="imagem lateral do site inclui uma mesa de trabalho com um texto com a seguinte escrita. Estamos quase lá!"
          />
        </DivTest>
      </SectionSecundary>
      <footer>
        <div>
          <p>
            Já possui um Login? logue <a href="/login">aqui!</a>
          </p>
        </div>
      </footer>
      <FooterText>
        Fortalecendo a cultura de doações através da estratégia. -Organização
        sem fins lucrativos-Todos os direitos reservados.
      </FooterText>
    </DivPrimari>
  );
};

export default FormRegister;
