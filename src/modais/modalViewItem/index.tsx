import { useContext } from "react";
import { DefaultModal } from "../../components/modalDafault";
import { ModalContext } from "../modalContext";


export const ModalViewItems = () => {
  const { viewItemModal, setViewItemModal } =
      useContext(ModalContext)
  return (
    <div className="container-item">
      {viewItemModal && (
        <DefaultModal callback={() => setViewItemModal(null)}>
          <div>Test</div>
          <button> Teste 2</button>
        </DefaultModal>
      )}
    </div>
  );
};
