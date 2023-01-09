import React, { useContext } from 'react'
import Modal from 'react-modal'
import { ModalContext } from '../modalContext'
import '../../modais/modalConfirmDelete/styles.css'
import { StyledModalConfirmDelete } from './styled'

Modal.setAppElement('#root')


export const ModalConfirmDelete = () => {
   const { modalDeleteIsOpen, handleModalDelete, deletePostDonation, setDeleteIsOpen } =
      useContext(ModalContext)

   return (
      <div className='container-delete'>
         <Modal
            isOpen={modalDeleteIsOpen?true:false}
            onRequestClose={() => setDeleteIsOpen(null)}
            overlayClassName='modal-overlay-delete'
            contentLabel='Example Modal'
            className='modal-content-delete'
         >
            <StyledModalConfirmDelete>
               <div className='modal-header-delete'>
                  <h2 className='title-modal-delete'>
                     Tem certeza que deseja excluir este post?
                  </h2>
                  <div className='box-btn-modal-delete'>
                     <button
                        className='btn-cancel'
                        onClick={() => handleModalDelete(modalDeleteIsOpen as number)}
                     >
                        Cancelar
                     </button>
                     <button
                        onClick={() => deletePostDonation(modalDeleteIsOpen as number)}
                        className='btn-confirm-delete'
                     >
                        Sim, excluir post!
                     </button>
                  </div>
               </div>
            </StyledModalConfirmDelete>
         </Modal>
      </div>
   )
}
