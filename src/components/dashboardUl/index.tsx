import { StyledDashboardList } from "./style"
import { DashboardCard } from "./dashboardCard"
import { useContext } from "react"
import { DashboardListContext } from "./contextList"
import { CreatePostContext } from "../../modais/createPost/contextCreatePost"
import { ModalCreatePost } from "../../modais/createPost"


export const DashboardList = () => {
    

const {dashboardListPosts, dashboardListRequests}:any = useContext(DashboardListContext)
// const {setModalCreatepost, modalCreatepost} = useContext(CreatePostContext)


interface iDashboardListPosts{
     title: string,
     description: string,
     category: string,
     type: string,
     image: string,
     userId: number | string,
     id: number | string,
     data:[]
}





   return(
        <StyledDashboardList>
               <ul>
                         {
                              
                              dashboardListPosts.map((element:iDashboardListPosts)=>{
                                   return (
                                        
                                        <li key={element.id}>
                                             <div className="product-image">
                                                  <img src={element.image} alt="img"/>
                                             </div>
                                             <div className="product-category">
                                                  <span>{element.title}</span>
                                                  <h4>{element.category}</h4>
                                             </div>
                                                  <div className="product-description">
                                                       <p>{element.description}</p>
                                                  </div>
                                                  <div className="product-buttons">
                                                       <button>ver</button>
                                                       <button>Pegar doação</button>
                                                  </div>
                                        </li>

                                   // <DashboardCard element={element} key={element.id}/>
                                   
                                   )
                              })
                         
                              
                         }
               </ul>

               <ul>
                         {
                              dashboardListRequests.map((element:iDashboardListPosts)=>{
                                   return (
                                        
                                        <li key={element.id}>
                                             <div className="product-image">
                                                  <img src={element.image} alt="img"/>
                                             </div>
                                             <div className="product-category">
                                                  <span>{element.title}</span>
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
               </ul>
             
        </StyledDashboardList>
   )
}
