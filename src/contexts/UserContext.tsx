import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { api } from "../services/api";
import { toast } from 'react-toastify';
import { createContext } from "react";
import { iDefaultProviderProps, iUserContext, iUserLogin, iUserLoginResponse } from "./@types";

export const UserContextLogin = createContext({} as iUserContext);


export const UserProviderLogin = ({ children }: iDefaultProviderProps) => {
  const [ user, setUser ] = useState<any>([])
  const [ loading, setLoading ] = useState<boolean>(true)

  const navigate = useNavigate();


    useEffect(()=>{

          const loadUser =  async () => {
          
              const token = localStorage.getItem('@USERTOKEN')
              const userId = localStorage.getItem('@USERID')

              if(!token){
                setLoading(false)
                return
              }

            try {
              
              const data = await api.get(`users/${userId}`, {
                headers:{
                  authorization: `Bearer ${token}` 
                }
              })

              
              setUser(data)
              

            } catch (error) {
                console.error(error)
            }finally{
                setLoading(false)
            }
    }

    loadUser()
    },[])


  const login = async (data: iUserLogin) => {
    try {

      const response = await api.post<iUserLoginResponse>("login", data);
      const { accessToken, user: userResponse } = response.data;

      localStorage.setItem("@USERTOKEN", accessToken);
      localStorage.setItem("@USERID", JSON.stringify(userResponse.id))

      setUser(userResponse)
      toast.success("Logado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Email ou senha inválidos!");
    }
  };

  return (
    <UserContextLogin.Provider value={{ login, user, loading, setUser }}>
      {children}
    </UserContextLogin.Provider>
  );
};