import { createContext } from "react";
import { useNavigate } from "react-router";
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
<<<<<<< HEAD
  const navigate = useNavigate();
=======

  const navigate = useNavigate()
>>>>>>> 9ae0de2fdafe699c649e65919df9992727444021

  async function submitFormRegister(data: iData) {

    try {
      const response = await api.post("/register", data);
      
      toast.success("Conta criada com sucesso!");
<<<<<<< HEAD
      navigate("/login");
=======
      navigate('/login')
>>>>>>> 9ae0de2fdafe699c649e65919df9992727444021
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
