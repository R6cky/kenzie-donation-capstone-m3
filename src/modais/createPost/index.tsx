import { useForm } from "react-hook-form"
import { StyledCreatePost } from "./style"
import { useContext, useEffect } from "react"
import { CreatePostContext } from "./contextCreatePost"
import { useNavigate } from "react-router-dom"
import { DashboardListContext } from "../../components/dashboardUl/contextList"
import CloseModalCreatePost from '../../assets/closeModalCreatePost.png'

interface iCreatePosts{
     title: string,
     content: string,
     category: string,
     type: string,
     image: string,
     userId: number,
     id: number,
     data:[]
 }



export const ModalCreatePost =  () => {


     const userId = 3

     const {createPost,createRequest, modalCreatepost, setModalCreatepost} = useContext(CreatePostContext)
     const { register, handleSubmit} = useForm()
    

     const submit = (data:iCreatePosts | any) => {
          data = {
               ...data,
               userId: userId
          }

        

          if(data.type === 'donation'){
               createPost(data)
          }else if(data.type === 'request'){
               createRequest(data)
          }
     }


   return(
       <StyledCreatePost>

          <form onSubmit={handleSubmit(submit)} className="createPost" action="">
               <div className="form-header">
                    <h4>Novo post</h4>
                    <span className="btn-close-modal" onClick={() => setModalCreatepost(false)}><img src={CloseModalCreatePost} alt="closeModal" /></span>
               </div>
               <div className="form-title">
                    <label htmlFor="">Título</label>
                    <input type="text" placeholder="Digite aqui o título" {...register('title')} />
               </div>
               <div className="form-description">
                    <label htmlFor="">Descrição</label>
                    <input type="text" placeholder="Digite aqui o título" {...register('description')} />
               </div>
               <div className="form-post-category">
                    <label htmlFor="">Categoria</label>
                    <select id="" {...register('category')}>
                         <option value="Roupas">Roupas</option>
                         <option value="Brinquedos">Brinquedos</option>
                         <option value="Móveis">Móveis</option>
                         <option value="Eletrônicos">Eletrônicos</option>
                    </select>
               </div>
               <div className="form-post-type">
                    <label htmlFor="">Escolha o nível da postagem</label>
                    <select id="" {...register('type')}>
                         <option value="donation">Fazer doacão</option>
                         <option value="request">Solicitar doação</option>
                    </select>
               </div>
               <div className="form-post-image">
                    <label htmlFor="">Adicione uma imagem (opcional)</label>
                    <input type="text" placeholder="Adicionar imagem" {...register('image')} />
               </div>
               <div className="form-button">
                    <button>Publicar</button>
                    <button onClick={() => setModalCreatepost(false)}>Cancelar</button>
               </div>
          </form>

       </StyledCreatePost>
   )
}
