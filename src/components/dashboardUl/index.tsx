import { StyledDashboardList } from "./style"
import { DashboardCard } from "./dashboardCard"
import { useContext } from "react"
import { DashboardListContext } from "./contextList"
import { CreatePostContext } from "../../modais/createPost/contextCreatePost"
import { ModalCreatePost } from "../../modais/createPost"


export const DashboardList = () => {
    

const {dashboardListPosts}:any = useContext(DashboardListContext)
// const {setModalCreatepost, modalCreatepost} = useContext(CreatePostContext)


interface iDashboardListPosts{
     title: string,
     content: string,
     category: string,
     type: string,
     image: string,
     userId: number | string,
     id: number | string,
     data:[]
}





   return(
        <StyledDashboardList>

               {
                  
              
                    dashboardListPosts.map((element:any)=>{
                         return (
                              
                              <li key={element.id}>
                                   <div className="product-image">
                                        <img src={element.image} alt="img"/>
                                   </div>
                                   <div className="product-category">
                                        <span>Descrição</span>
                                        <h4>{element.category}</h4>
                                   </div>
                                        <div className="product-description">
                                             <p>{element.description}</p>
                                        </div>
                                        <div className="product-buttons">
                                             <button>ver</button>
                                             <button>doar</button>
                                        </div>
                              </li>

                             // <DashboardCard element={element} key={element.id}/>
                             
                         )
                    })



               }
             
        </StyledDashboardList>
   )
}
