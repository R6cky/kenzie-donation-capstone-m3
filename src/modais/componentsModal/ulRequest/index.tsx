import { useContext } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { ModalContext } from "../../modalContext";
import { ModalRequestContext } from "../../modalContextRequest";

export const UlRequest = () => {
  const { modalEditPostHandle } = useContext(ModalContext);
  const { viewRequestList, modalDeleteRequest } =
    useContext(ModalRequestContext);
  return (
    <>
      <ul className="scrollbar">
        {viewRequestList.length === 0 ? (
          <p>Não tem nada aqui</p>
        ) : (
          viewRequestList.map((elem) => (
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
                  onClick={() => modalDeleteRequest(elem.id)}
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
