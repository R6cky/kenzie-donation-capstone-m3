import React, { useContext } from 'react'
import { ModalContext } from '../modalContext'
import { StyleModalYourItems } from './styled'
import ModalEditPost from '../modalEditPost'
import { ModalConfirmDeleteDonation } from '../modalConfirmDeleteDonation'
import { UlDonation } from '../componentsModal/ulDonation'
import { UlRequest } from '../componentsModal/ulRequest'
import { ModalConfirmDeleteRequest } from '../modalDeleteRequest'
import { ModalRequestContext } from '../modalContextRequest'
import { DefaultModal } from '../../components/modalDafault'
import { ModalViewItems } from '../modalViewItem'

export const ModalDash = () => {
   const {
      handleModal,
      modalDeleteIsOpen,
      editPostIsOpenModal,
      viewItemModal,
      setViewItemModal,
      viewMyDonationList,
      viewMyRequestList
   } = useContext(ModalContext)
   const { modalDeleteRequestIsOpen } = useContext(ModalRequestContext)

   return (
      <div className='container'>
         <DefaultModal maxWidth={1200} callback={() => handleModal()}>
            <StyleModalYourItems className='modal-container-your-items'>
               <div className='modal-header'>
                  <h2 className='title-modal'>Seus Itens</h2>
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
                        {viewMyDonationList.map((elem) => (
                           <li className='card-donations-list box-card'>
                           <div className='header-card'>
                              <p>{elem.title}</p>
                           </div>
                           <div className='box-btn-card'>
                              <button className='btn-view'>Ver</button>
                           </div>
                        </li>
                        ))}
                     </ul>
                  </div>
                  <div className='box-container-ul'>
                     <h2 className='title-card'>Solicitações Atendidas</h2>
                     <ul className='scrollbar'>
                     {viewMyRequestList.map((elem) => (
                           <li className='card-donations-list box-card'>
                           <div className='header-card'>
                              <p>{elem.title}</p>
                           </div>
                           <div className='box-btn-card'>
                              <button className='btn-view'>Ver</button>
                           </div>
                        </li>
                        ))}
                       
                        {/* <li className='card-donations-list box-card'>
                           <div className='header-card'>
                              <p>Title</p>
                           </div>
                           <div className='box-btn-card'>
                              <button
                                 onClick={() => setViewItemModal(null)}
                                 className='btn-view'
                              >
                                 Ver
                              </button>
                           </div>
                        </li> */}
                     </ul>
                  </div>
               </div>
               {modalDeleteIsOpen && <ModalConfirmDeleteDonation />}
               {modalDeleteRequestIsOpen && <ModalConfirmDeleteRequest />}
               {editPostIsOpenModal && <ModalEditPost />}
               {viewItemModal && <ModalViewItems />}
            </StyleModalYourItems>
         </DefaultModal>
      </div>
   )
}
