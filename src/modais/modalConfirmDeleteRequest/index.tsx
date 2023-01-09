import { useContext } from 'react'
import Modal from 'react-modal'
import { ModalContext } from '../modalContext'
import { StyledModalConfirmDeleteRequest } from './styled'

Modal.setAppElement('#root')

export const ModalConfirmDeleteRequest = () => {
   const {
      modalDeleteRequestIsOpen,
      setModalDeleteRequestIsOpen,
      // handleModalDelete,
      // deletePostRequest,
   } = useContext(ModalContext)

   return (
      <div className='container-delete'>
         <Modal
            isOpen={modalDeleteRequestIsOpen ? true : false}
            onRequestClose={() => setModalDeleteRequestIsOpen(null)}
            overlayClassName='modal-overlay-delete'
            contentLabel='Example Modal'
            className='modal-content-delete'
         >
            <StyledModalConfirmDeleteRequest>

               <div className='modal-request'>MODAL REQUEST</div>
               {/* <div className='modal-header-delete'>
                  <h2 className='title-modal-delete'>
                     Tem certeza que deseja excluir este post?
                  </h2>
                  <div className='box-btn-modal-delete'>
                     <button
                        className='btn-cancel'
                        onClick={() =>
                           handleModalDelete(modalDeleteRequestIsOpen as number)
                        }
                     >
                        Cancelar
                     </button>
                     <button
                        onClick={() =>
                           deletePostRequest(modalDeleteRequestIsOpen as number)
                        }
                        className='btn-confirm-delete'
                     >
                        Sim, excluir post!
                     </button>
                  </div>
               </div> */}
            </StyledModalConfirmDeleteRequest>
         </Modal>
      </div>
   )
}
