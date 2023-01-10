import { useContext } from 'react'
import Modal from 'react-modal'
import '../../modais/modalDeleteRequest/styles.css'
import { ModalContext } from '../modalContext'
import { StyledModalConfirmDeleteRequest } from './styled'

Modal.setAppElement('#root')

export const ModalConfirmDeleteRequest = () => {
    const { modalDeleteRequestIsOpen, setModalDeleteRequestIsOpen, handleModalDeleteRequest, deletePostRequest } = useContext(ModalContext)
   return (
      <div className='container-delete-request'>
         <Modal
            isOpen={modalDeleteRequestIsOpen ? true : false}
            onRequestClose={() => setModalDeleteRequestIsOpen(null)}
            overlayClassName='modal-overlay-delete-request'
            contentLabel='Example Modal'
            className='modal-content-delete-request'
         >
            <StyledModalConfirmDeleteRequest>
               <div className='modal-header-delete-request'>
                  <h2 className='title-modal-delete-request'>
                     Tem certeza que deseja excluir este post?
                  </h2>
                  <div className='box-btn-modal-delete-request'>
                     <button
                        className='btn-cancel-request'
                        onClick={() =>
                            handleModalDeleteRequest(modalDeleteRequestIsOpen as number)
                        }
                     >
                        Cancelar
                     </button>
                     <button
                        onClick={() =>
                            deletePostRequest(modalDeleteRequestIsOpen as number)
                        }
                        className='btn-confirm-delete-request'
                     >
                        Sim, excluir post!
                     </button>
                  </div>
               </div>
            </StyledModalConfirmDeleteRequest>
         </Modal>
      </div>
   )
}
