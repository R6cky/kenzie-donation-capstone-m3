import React, { useContext } from 'react'
import Modal from 'react-modal'
import { ModalContext } from '../modalContext'
import '../../modais/modalSeusItens/styles.css'
import { StyleModalYourItems } from './styled'
import { ModalConfirmDelete } from '../modalConfirmDelete'
import ModalEditPost from '../modalEditPost'

Modal.setAppElement('#root')

export const ModalDash = () => {
   const {
      modalIsOpen,
      handleModal,
      handleModalDelete,
      modalDeleteIsOpen,
      modalEditPostHandle,
      editPostIsOpenModal,
   } = useContext(ModalContext)

   return (
      <div className='container'>
         <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleModal}
            overlayClassName='modal-overlay'
            contentLabel='Example Modal'
            className='modal-content'
         >
            <StyleModalYourItems className='modal-container-your-items'>
               <div className='modal-header'>
                  <h2 className='title-modal'>Seus Itens</h2>
                  <button className='btn-close' onClick={() => handleModal()}>
                     X
                  </button>
               </div>
               <div className='modal-body scrollbar'>
                  <div className='box-container-ul'>
                     <h2 className='title-card'>Itens para Doação</h2>
                     <ul className='scrollbar'>
                        <li className='card-donations-list box-card'>
                           <p>Blusa de Frio Infantil</p>
                           <div className='box-btn-card'>
                              <button
                                 onClick={() => modalEditPostHandle()}
                                 className='btn-edit'
                              >
                                 Editar
                              </button>
                              <button
                                 onClick={() => handleModalDelete()}
                                 className='btn-delete'
                              >
                                 Excluir
                              </button>
                              {modalDeleteIsOpen && <ModalConfirmDelete />}
                              {editPostIsOpenModal && <ModalEditPost />}
                           </div>
                        </li>
                     </ul>
                  </div>
                  <div className='box-container-ul'>
                     <h2 className='title-card'>Itens Solicitados</h2>
                     <ul className='scrollbar'>
                        <li className='card-donations-list box-card'>
                           <p>Blusa de Frio Infantil</p>
                           <div className='box-btn-card'>
                              <button className='btn-edit'>Editar</button>
                              <button className='btn-delete'>Excluir</button>
                           </div>
                        </li>
                     </ul>
                  </div>
                  <div className='box-container-ul'>
                     <h2 className='title-card'>Doações Feitas</h2>
                     <ul className='scrollbar'>
                        <li className='card-donations-list box-card'>
                           <p>Blusa de Frio Infantil</p>
                           <div className='box-btn-card'>
                              <button className='btn-view'>Ver</button>
                           </div>
                        </li>
                     </ul>
                  </div>
                  <div className='box-container-ul'>
                     <h2 className='title-card'>Solicitações Atendidas</h2>
                     <ul className='scrollbar'>
                        <li className='card-donations-list box-card'>
                           <p>Blusa de Frio Infantil</p>
                           <div className='box-btn-card'>
                              <button className='btn-view'>Ver</button>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </StyleModalYourItems>
         </Modal>
      </div>
   )
}