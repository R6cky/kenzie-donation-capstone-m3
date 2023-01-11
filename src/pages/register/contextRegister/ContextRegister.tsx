import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { useNavigate } from "react-router";

interface iUserContext {
  submitFormRegister: (data: iData) => Promise<void>;
}
interface iData {
  name?: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}
interface iUserContextProps {
  children: React.ReactNode;
}
export const UserContext = createContext({} as iUserContext);
export const UserProvider = ({ children }: iUserContextProps) => {

  const navigate = useNavigate()

  async function submitFormRegister(data: iData) {

    try {
      const response = await api.post("/register", data);
      console.log(response);
      toast.success("Conta criada com sucesso!");
      navigate('/login')
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  }
  return (
    <UserContext.Provider
      value={{
        submitFormRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
