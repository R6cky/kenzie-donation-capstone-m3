import React, { useContext } from 'react'
import Modal from 'react-modal'
import { ModalContext } from '../modalContext'
import '../../modais/modalEditPost/styles.css'
import { StyledModalContentEditPost } from './styled'

Modal.setAppElement('#root')

const ModalEditPost = () => {
   const { modalEditPostHandle, editPostIsOpenModal } = useContext(ModalContext)
   return (
      <div className='container-modal-edit-post'>
         <Modal
            isOpen={editPostIsOpenModal}
            onRequestClose={modalEditPostHandle}
            contentLabel='Example Modal'
            overlayClassName='modal-overlay-edit-post'
            className='modal-content-edit-post'
         >
            <StyledModalContentEditPost>
               <div className='box-header'>
                  <h2>Editar Post</h2>
                  <button onClick={() => modalEditPostHandle()}>X</button>
               </div>
               
            </StyledModalContentEditPost>
         </Modal>
      </div>
   )
}

export default ModalEditPost
