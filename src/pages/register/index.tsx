import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { UserContext } from "./contextRegister/ContextRegister";
import { DivPrimari } from "./style";

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
  return (
    <DivPrimari>
      <h1>Kenzie Donation</h1>
      <section>
        <span>
          <p> Cadastro</p>
        </span>
        <form onSubmit={handleSubmit(SubmitForm)}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="digite seu nome"
            {...register("name")}
          />
          <p>
            {errors.name &&
              errors.name.message &&
              errors.name.message.toString()}
          </p>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Email" {...register("email")} />
          <p>
            {errors.name &&
              errors.name.message &&
              errors.email &&
              errors.email.message &&
              errors.email.message.toString()}
          </p>
          <input
            type="password"
            placeholder="digite sua senha..."
            {...register("password")}
          />
          <p>
            {errors.name &&
              errors.name.message &&
              errors.password &&
              errors.password.message &&
              errors.password.message.toString()}
          </p>
          <input
            placeholder="Confirme Sua senha..."
            type="password"
            {...register("confirmPassword")}
          />
          <p>
            {errors.name &&
              errors.name.message &&
              errors.confirmPassword &&
              errors.confirmPassword.message &&
              errors.confirmPassword.message.toString()}
          </p>
          <button onSubmit={handleSubmit(SubmitForm)}>Cadastrar</button>
        </form>
      </section>
    </DivPrimari>
  );
};

export default FormRegister;
