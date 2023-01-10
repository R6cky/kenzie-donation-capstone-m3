import { useState } from "react";
import { useNavigate } from "react-router";
import { api } from "../services/api";
import { toast } from 'react-toastify';
import { createContext } from "react";
import { iDefaultProviderProps, iUserContext, iUserLogin, iUserLoginResponse } from "./@types";

export const UserContext = createContext({} as iUserContext);


export const UserProvider = ({ children }: iDefaultProviderProps) => {
  const [ user, setUser ] = useState<any>([])
  const navigate = useNavigate();

  const login = async (data: iUserLogin) => {
    try {
      const response = await api.post<iUserLoginResponse>("login", data);
      const { accessToken, user: userResponse } = response.data;
      localStorage.setItem("@TOKEN", accessToken);
      localStorage.setItem("@USERID", JSON.stringify(userResponse.id))

      console.log(response)
      setUser(userResponse)
      toast.success("Logado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Email ou senha inválidos!");
    }
  };

  return (
    <UserContext.Provider value={{ login }}>
      {children}
    </UserContext.Provider>
  );
};