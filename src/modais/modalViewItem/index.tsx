import { request } from "http";
import { useContext, useEffect, useState } from "react";
import { DefaultModal } from "../../components/modalDafault";
import { api } from "../../services/api";
import { ModalContext } from "../modalContext";
import { iDonationItem } from "./@types";


export const ModalViewItems = () => {
  const { viewItemModal, setViewItemModal } = useContext(ModalContext)
  const [ requestItem, setRequestItem ] = useState<iDonationItem>()
  
  useEffect(()=>{

    const getItem =  async () => {

        try {
            const request = await api.get(`/donation/${viewItemModal}`)
            setRequestItem(request.data)
console.log(request.data)
        } catch (error) {
            console.error(error)
        }
    }

    getItem()
},[])

  
  return (
    <div className="container-item">
      {viewItemModal && (
        <DefaultModal callback={() => setViewItemModal(null)}>
          <div>
            <img src={requestItem?.image} alt="" />
          </div>
          <button> Teste 2</button>
        </DefaultModal>
      )}
    </div>
  );
};
