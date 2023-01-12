import { useContext } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { ModalContext } from "../../modalContext";

export const UlDonation = () => {
  const { handleModalDelete, modalEditPostHandle, viewDonationList } =
    useContext(ModalContext);

  return (
    <>
      <ul className="scrollbar">
        {viewDonationList.length === 0 ? (
          <p>Não tem nada aqui</p>
        ) : (
          viewDonationList.map((elem) => (
            <li key={elem.id} className="card-donations-list box-card">
              <div className="header-card">
                <p>{elem.title}</p>
                <AiOutlineEye className="edit-icon" />
              </div>
              <div className="box-btn-card">
                <button
                  onClick={() => modalEditPostHandle(elem.id)}
                  className="btn-edit"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleModalDelete(elem.id)}
                  className="btn-delete"
                >
                  Excluir
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
};
