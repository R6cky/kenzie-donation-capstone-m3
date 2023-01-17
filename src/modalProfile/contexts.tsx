import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { iDataEdit } from ".";
import { UserContextLogin } from "../contexts/UserContext";
import { api } from "../services/api";

export interface iDefaultProviderProps {
  children: React.ReactNode;
}

export interface iModalEditContext {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editProfile: (data: any) => Promise<void>;
}

export const ModalEditContext = createContext({} as iModalEditContext);

const ModalEditProvider = ({ children }: iDefaultProviderProps) => {
  const { setUser } = useContext(UserContextLogin);
  const [open, setIsOpen] = useState(false);

  async function editProfile(data: iDataEdit) {
    const token = localStorage.getItem("@USERTOKEN");
    const userId = localStorage.getItem("@USERID");

    if (token) {
      try {
        const response = await api.patch(`/users/${userId}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        await setUser(response);
        toast.success("Usuário atualizado com sucesso!");
        setIsOpen(false);
      } catch (error) {
        console.log(error);
        toast.error("Ops, algum erro aconteceu!");
        setIsOpen(false);
      }
    }
  }

  return (
    <ModalEditContext.Provider value={{ open, setIsOpen, editProfile }}>
      {children}
    </ModalEditContext.Provider>
  );
};

export default ModalEditProvider;
