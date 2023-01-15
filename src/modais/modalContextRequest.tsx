import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iPosts, iProviderProps } from "./modalContext";

interface iModalRequestContextProps {
  modalDeleteRequestIsOpen: number | null;
  setModalDeleteRequestIsOpen: React.Dispatch<
    React.SetStateAction<number | null>
  >;
  modalDeleteRequest: (id: number) => void;
  deletePostRequest: (id: number) => void;
  viewRequest: iPosts[];
  viewRequestList: iPosts[];
}

export const ModalRequestContext = createContext(
  {} as iModalRequestContextProps
);

export const ModalRequestProvider = ({ children }: iProviderProps) => {
  const [modalDeleteRequestIsOpen, setModalDeleteRequestIsOpen] = useState<
    number | null
  >(null); //modal delete ul request
  const [viewRequest, setViewRequest] = useState([] as iPosts[]); //array request
  const [viewRequestList, setViewRequestList] = useState([] as iPosts[]); //array donation

  useEffect(() => {
    const getAllRequests = async () => {
      try {
        const { data } = await api.get("/request");
        setViewRequest(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllRequests();
  }, []);

  useEffect(() => {
    const userIdVerifyRequest: number = Number(localStorage.getItem("@USERID"));
    const getAllRequestsUser = async (userId: number) => {
      try {
        const token = localStorage.getItem("@USERTOKEN");
        const { data } = await api.get(`/users/${userId}?_embed=request`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setViewRequestList(data.request);
      } catch (error) {
        console.log(error);
      }
    };
    getAllRequestsUser(userIdVerifyRequest);
  }, []);

  const modalDeleteRequest = (id: number) => {
    //abrir e fechar modal delete request
    if (!modalDeleteRequestIsOpen) {
      setModalDeleteRequestIsOpen(id);
    } else {
      setModalDeleteRequestIsOpen(null);
    }
  };

  const deletePostRequest = async (id: number) => {
    //modal deletar request

    const token = localStorage.getItem("@USERTOKEN");
    try {
      await api.delete(`/request/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const deletePostRequest = viewRequestList.filter(
        (request) => request.id !== id
      );
      setViewRequestList(deletePostRequest);
      setModalDeleteRequestIsOpen(null);
    } catch (error: any) {
      if (error.response.status !== 201) {
        toast.error("Houve um erro!");
      }
    }
  };

  return (
    <ModalRequestContext.Provider
      value={{
        modalDeleteRequestIsOpen,
        setModalDeleteRequestIsOpen,
        modalDeleteRequest,
        deletePostRequest,
        viewRequest,
        viewRequestList,
      }}
    >
      {children}
    </ModalRequestContext.Provider>
  );
};
