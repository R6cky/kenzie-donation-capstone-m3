import React, { useContext } from 'react'
import Modal from 'react-modal'
import { ModalContext } from '../modalContext'
import '../../modais/modalEditPost/styles.css'
import { StyledModalContentEditPost } from './styled'

Modal.setAppElement('#root')

const ModalEditPost = () => {
   const { modalEditPostHandle, editPostIsOpenModal, setEditPostIsOpenModal } = useContext(ModalContext)
   return (
      <div className='container-modal-edit-post'>
         <Modal
            isOpen={editPostIsOpenModal?true:false}
            onRequestClose={() => setEditPostIsOpenModal(null)}
            contentLabel='Example Modal'
            overlayClassName='modal-overlay-edit-post'
            className='modal-content-edit-post'
         >
            <StyledModalContentEditPost>
               <div className='box-header'>
                  <h2>Editar Post</h2>
                  <button onClick={() => modalEditPostHandle(editPostIsOpenModal as number)}>X</button>
               </div>

               <form className='create-post' action=''>
                  <div className='box-form'>
                     <label htmlFor=''>Título</label>
                     <input type='text' placeholder='Digite aqui o título' />
                  </div>
                  <div className='box-form'>
                     <label htmlFor=''>Descrição</label>
                     <input type='text' placeholder='Digite aqui o título' />
                  </div>
                  <div className='box-form'>
                     <label htmlFor=''>Categoria</label>
                     <select id=''>
                        <option value='Roupas'>Roupas</option>
                        <option value='Brinquedos'>Brinquedos</option>
                        <option value='Móveis'>Móveis</option>
                        <option value='Eletrônicos'>Eletrônicos</option>
                     </select>
                  </div>
                  <div className='box-form'>
                     <label htmlFor=''>Escolha o nível da postagem</label>
                     <select id=''>
                        <option value='donation'>Fazer doacão</option>
                        <option value='request'>Solicitar doação</option>
                     </select>
                  </div>
                  <div className='box-form'>
                     <label htmlFor=''>Adicione uma imagem (opcional)</label>
                     <input type='text' placeholder='Adicionar imagem' />
                  </div>
                  <div className='form-button'>
                     <button className='btn-update'>Atualizar</button>
                     <button onClick={() => modalEditPostHandle(editPostIsOpenModal as number)}>
                        Cancelar
                     </button>
                  </div>
               </form>
            </StyledModalContentEditPost>
         </Modal>
      </div>
   )
}

export default ModalEditPost
