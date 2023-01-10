import { useContext } from 'react'
import { DefaultModal } from '../../components/modalDafault'
import '../../modais/modalDeleteRequest/styles.css'
import { ModalRequestContext } from '../modalContextRequest'
import { StyledModalConfirmDeleteRequest } from './styled'


export const ModalConfirmDeleteRequest = () => {
   const {
      modalDeleteRequestIsOpen,
      setModalDeleteRequestIsOpen,
      modalDeleteRequest,
      deletePostRequest,
   } = useContext(ModalRequestContext)
   return (
      <div className='container-delete-request'>
         <DefaultModal callback={() => setModalDeleteRequestIsOpen(null)}>
            <StyledModalConfirmDeleteRequest>
               <div className='modal-header-delete-request'>
                  <h2 className='title-modal-delete-request'>
                     Tem certeza que deseja excluir este post?
                  </h2>
                  <div className='box-btn-modal-delete-request'>
                     <button
                        className='btn-cancel-request'
                        onClick={() =>
                           modalDeleteRequest(
                              modalDeleteRequestIsOpen as number
                           )
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
         </DefaultModal>
      </div>
   )
}
