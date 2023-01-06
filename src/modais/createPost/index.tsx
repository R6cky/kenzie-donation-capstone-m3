import { useForm } from "react-hook-form"
import { StyledCreatePost } from "./style"
import { useContext } from "react"
import { CreatePostContext } from "./contextCreatePost"
import { useNavigate } from "react-router-dom"

interface iCreatePosts{
     title: string,
     content: string,
     category: string,
     type: string,
     image: string,
     userId: number,
     id: number
 }



export const ModalCreatePost = () => {

     const navigate = useNavigate()
     

     const userId = 8

     const {createPost,createRequest, modalCreatepost, setModalCreatepost} = useContext(CreatePostContext)
     const { register, handleSubmit} = useForm()


     const submit = (data:iCreatePosts) => {
          data = {
               ...data,
               userId: userId
          }

          
          if(data.type === 'Fazer doacao'){
               createPost(data)
          }else{
               createRequest(data)
          }
     }


   return(
       <StyledCreatePost>

          <form onSubmit={handleSubmit(submit)} className="createPost" action="">
               <div className="form-header">
                    <h4>Novo post</h4>
                    <span><img src="" alt="closeModal" /></span>
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
                         <option value="Moveis">Moveis</option>
                         <option value="Eletro">Eletro</option>
                    </select>
               </div>
               <div className="form-post-type">
                    <label htmlFor="">Escolha o nível da postagem</label>
                    <select id="" {...register('type')}>
                         <option value="Fazer doacao">Fazer doacao</option>
                         <option value="Solicitar doacao">Solicitar doação</option>
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
