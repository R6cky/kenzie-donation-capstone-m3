import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("O email é obrigatório !").email("Precisa ser um email"),
  password: yup.string().required("A senha é obrigatória !"),
});
