import React, { useContext } from 'react'
import Modal from 'react-modal'
import { ModalContext } from '../modalContext'
import './styles.css'
import { StyleModalYourItems } from './styled'
import ModalEditPost from '../modalEditPost'
import { ModalConfirmDeleteDonation } from '../modalConfirmDeleteDonation'
import { UlDonation } from '../componentsModal/ulDonation'
import { UlRequest } from '../componentsModal/ulRequest'
import { ModalConfirmDeleteRequest } from '../modalDeleteRequest'

Modal.setAppElement('#root')

export const ModalDash = () => {
   const { modalIsOpen, handleModal, modalDeleteIsOpen, editPostIsOpenModal, modalDeleteRequestIsOpen } =
      useContext(ModalContext)

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
                     <UlDonation />
                  </div>
                  <div className='box-container-ul'>
                     <h2 className='title-card'>Itens Solicitados</h2>
                     <UlRequest />
                  </div>
                  <div className='box-container-ul'>
                     <h2 className='title-card'>Doações Feitas</h2>
                     <ul className='scrollbar'>
                        <li className='card-donations-list box-card'>
                           <div className='header-card'>
                              <p>Title</p>
                           </div>
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
                           <div className='header-card'>
                              <p>Title</p>
                           </div>
                           <div className='box-btn-card'>
                              <button className='btn-view'>Ver</button>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </StyleModalYourItems>
         </Modal>
         {modalDeleteIsOpen && <ModalConfirmDeleteDonation />}
         {modalDeleteRequestIsOpen && <ModalConfirmDeleteRequest />}
         {editPostIsOpenModal && <ModalEditPost />}
      </div>
   )
}
