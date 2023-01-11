import { StyledDashboardList } from "./style"
import { DashboardCard } from "./dashboardCard"
import { useContext } from "react"
import { DashboardListContext } from "./contextList"
import { CreatePostContext } from "../../modais/createPost/contextCreatePost"
import  ImageNotFount  from "../../assets/image-not-found.jpg"
import { ModalContext } from "../../modais/modalContext"
import { ModalViewItems } from "../../modais/modalViewItem"


export const DashboardList = () => {
    

const {dashboardListPosts, dashboardListRequests}:any = useContext(DashboardListContext)
const { viewItemModal, setViewItemModal }= useContext(ModalContext)
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
                                                  {element.image !== ''    ? <img src={element.image} alt="img"/> 
                                                  : <img src={ImageNotFount} alt="img"/>}
                                             </div>
                                             <div className="product-category">
                                                  <span>{element.title}</span>
                                                  <h4>{element.category}</h4>
                                             </div>
                                                  <div className="product-description">
                                                       <p>{element.description}</p>
                                                  </div>
                                                  <div className="product-buttons">
                                                       <button onClick={() => setViewItemModal(element.id as number)}>Ver</button>
                                                       <button>Pegar doação</button>
                                                  </div>
                                        </li>

                                   // <DashboardCard element={element} key={element.id}/>
                                   
                                   )
                              })
                         
                              
                         }
               </ul>
                 <div className="requests-title">
                    <h3> Solicitações</h3>        
                 </div>             
               <ul>
                         {
                              dashboardListRequests.map((element:iDashboardListPosts)=>{
                                   return (
                                        
                                        <li key={element.id}>
                                             <div className="product-image">
                                                  {element.image !== '' ? <img src={element.image} alt="img"/> 
                                                  : <img src={ImageNotFount} alt="img"/>}
                                             </div>
                                             <div className="product-category">
                                                  <span>{element.title}</span>
                                                  <h4>{element.category}</h4>
                                             </div>
                                                  <div className="product-description">
                                                       <p>{element.description}</p>
                                                  </div>
                                                  <div className="product-buttons">
                                                       <button>Ver</button>
                                                       <button>Doar</button>
                                                  </div>
                                        </li>

                                   // <DashboardCard element={element} key={element.id}/>
                                   
                                   )
                              })
                         }
               </ul>
               {viewItemModal && <ModalViewItems />}
        </StyledDashboardList>
   )
}
