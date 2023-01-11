import { request } from "http";
import { useContext, useEffect, useState } from "react";
import { DefaultModal } from "../../components/modalDafault";
import { api } from "../../services/api";
import { ModalContext } from "../modalContext";
import { iDonationItem } from "./@types";
import { StyleModalUl } from "./styled";


export const ModalViewItems = () => {
  const { viewItemModal, setViewItemModal } = useContext(ModalContext)
  const [ requestItem, setRequestItem ] = useState<iDonationItem>()
  
  useEffect(()=>{

    const getItem =  async () => {

        try {
            const request = await api.get(`/donation/${viewItemModal}`)
            setRequestItem(request.data)
        } catch (error) {
            console.error(error)
        }
    }

    getItem()
},[])

  
  return (
    <div className=".modal-content-edit-post">
      {viewItemModal && (
        <DefaultModal callback={() => setViewItemModal(null)}>
          <StyleModalUl>
          <picture>
              <img src={requestItem?.image} alt="" />
          </picture>
            <section>
              <span>{requestItem?.title}</span>
              <h4>{requestItem?.category}</h4>
          </section>
          <section>
              <p>{requestItem?.description}</p>
          </section>
          </StyleModalUl>
        </DefaultModal>
      )}
    </div>
  );
};
