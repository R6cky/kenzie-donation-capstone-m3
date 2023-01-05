import { StyledCreatePost } from "./style"


export const ModalCreatePost = () => {
    


   return(
       <StyledCreatePost>
          <div className="header-modal">
               <h4>Novo post</h4>
               <span><img src="" alt="closeModal" /></span>
          </div>
          <form className="createPost" action="">
               <div className="form-title">
                    <label htmlFor="">Título</label>
                    <input type="text" placeholder="Digite aqui o título" />
               </div>
               <div className="form-description">
                    <label htmlFor="">Descrição</label>
                    <input type="text" placeholder="Digite aqui o título" />
               </div>
               <div className="form-post-category">
                    <label htmlFor="">Categoria</label>
                    <select name="" id="">
                         <option value="">Roupas</option>
                         <option value="">Brinquedos</option>

                    </select>
               </div>
               <div className="form-post-type">
                    <label htmlFor="">Escolha o nível da postagem</label>
                    <select name="" id="">
                         <option value="">Fazer doação</option>
                         <option value="">Solicitar doação</option>
                    </select>
               </div>
               <div className="form-post-image">
                    <label htmlFor="">Adicione uma imagem (opcional)</label>
                    <input type="text" placeholder="Adicionar imagem" />
               </div>
               <div className="form-button">
                    <button>Publicar</button>
                    <button>Cancelar</button>
               </div>
          </form>
       </StyledCreatePost>
   )
}
