import React, { useContext } from 'react'
import { ModalContext } from '../modalContext'
import '../../modais/modalConfirmDeleteDonation/styles.css'
import { StyledModalConfirmDeleteDonation } from './styled'
import { DefaultModal } from '../../components/modalDafault'

export const ModalConfirmDeleteDonation = () => {
   const {
      modalDeleteIsOpen,
      handleModalDelete,
      deletePostDonation,
      setDeleteIsOpen,
   } = useContext(ModalContext)


   return (
      <div className='container-delete'>
         {modalDeleteIsOpen && (
            <DefaultModal maxWidth={600} callback={() => setDeleteIsOpen(null)}>
               <StyledModalConfirmDeleteDonation>
                  <div className='modal-header-delete'>
                     <h2 className='title-modal-delete'>
                        Tem certeza que deseja excluir este post?
                     </h2>
                     <div className='box-btn-modal-delete'>
                        <button
                           className='btn-cancel'
                           onClick={() =>
                              handleModalDelete(modalDeleteIsOpen as number)
                           }
                        >
                           Cancelar
                        </button>
                        <button
                           onClick={() =>
                              deletePostDonation(modalDeleteIsOpen as number)
                           }
                           className='btn-confirm-delete'
                        >
                           Sim, excluir post!
                        </button>
                     </div>
                  </div>
               </StyledModalConfirmDeleteDonation>
            </DefaultModal>
         )}
      </div>
   )
}
