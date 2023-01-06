import { StyledDashboardHeader } from "./style"
import {useContext} from 'react'
import { CreatePostContext } from "../../modais/createPost/contextCreatePost"

export const DashboardHeader: () => JSX.Element = () => {
    
   const {modalCreatepost, setModalCreatepost} = useContext(CreatePostContext)


   return(
        <StyledDashboardHeader>
            <nav className="navbar">
                  <div>
                     <span className="buttons">Editar</span>
                     <span className="buttons" onClick={()=> setModalCreatepost(true)}>Novo post</span>
                     <span className="buttons">Seus itens</span>
                  </div>
            </nav>
            <div className="area-menu">
               <span><img src="" alt="logo" /></span>
               <div><img src="" alt="menu" /></div>
            </div>
            <ul className="category-list">
                <li className="category-card">
                  <div>
                     <img src="" alt="Roupas" />
                  </div>
                  <span>roupas</span>
               </li>
               <li className="category-card">
                  <div>
                     <img src="" alt="Brinquedos" />
                  </div>
                  <span>Brinquedos</span>
               </li>
               <li className="category-card">
                  <div>
                     <img src="" alt="Móveis" />
                  </div>
                  <span>Móveis</span>
               </li>
               <li className="category-card">
                  <div>
                     <img src="" alt="Eléctro" />
                  </div>
                  <span>Eléctro</span>
               </li>
            </ul>
        </StyledDashboardHeader>
   )
}
