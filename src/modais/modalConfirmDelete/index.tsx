import React, { useContext } from 'react'
import Modal from 'react-modal'
import { ModalContext } from '../modalContext'
import '../../modais/modalConfirmDelete/styles.css'
import { StyledModalConfirmDelete } from './styled'

Modal.setAppElement('#root')

export const ModalConfirmDelete = () => {
   const { modalDeleteIsOpen, handleModalDelete } = useContext(ModalContext)

   return (
      <div className='container-delete'>
         <Modal
            isOpen={modalDeleteIsOpen}
            onRequestClose={handleModalDelete}
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
                        onClick={() => handleModalDelete()}
                     >
                        Cancelar
                     </button>
                     <button className='btn-confirm-delete'>
                        Sim, excluir post!
                     </button>
                  </div>
               </div>
            </StyledModalConfirmDelete>
         </Modal>
      </div>
   )
}
