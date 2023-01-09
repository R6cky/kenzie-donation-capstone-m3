import { useState,createContext, useContext, useEffect} from "react";
import { DashboardListContext } from "../../components/dashboardUl/contextList";
import { api } from "../../services/api";


interface iChildren{
    children: React.ReactNode
}


interface iCreatePostContext{
    createPost: (data:any) => void
    createRequest: ((data:any) => void)
    modalCreatepost:boolean
    setModalCreatepost: ()=>void
}


interface iCreatePosts{
    title: string,
    content: string,
    category: string,
    type: string,
    image: string,
    userId: number,
    id: number
}





export const CreatePostContext = createContext({} as iCreatePostContext | any)





export const CreatePostProvider = ({children}:iChildren) => {

    const {dashboardListPosts, setDashboardListPosts, dashboardListRequests, setDashboardListRequests}:any = useContext(DashboardListContext)

        const [modalCreatepost, setModalCreatepost] = useState(false)


                const createPost =  async (data:iCreatePosts) => {
                
                    // const token = localStorage.getItem('@UserToken') || ''
                    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY2tzb25AbWFpbC5jb20iLCJpYXQiOjE2NzMyMzgxNDAsImV4cCI6MTY3MzI0MTc0MCwic3ViIjoiMyJ9.a-UFBsD8VSoFzJgb9MwjYd1nXk6qdM1DRGXw1rK_DFU'
        
                    try {
                        const request = await api.post('/donation',data, {
                            headers: {
                                authorization: `Bearer ${token}`
                            }
                        })
                        await  setDashboardListPosts([...dashboardListPosts, request.data])
                        setModalCreatepost(false)
                    } catch (error) {
                        console.error(error)
                    }finally{
        
                    }
                }
            

    


      
       


        const createRequest =  async (data:iCreatePosts) => {

            // const token = localStorage.getItem('@UserToken') || ''
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY2tzb25AbWFpbC5jb20iLCJpYXQiOjE2NzMyMzgxNDAsImV4cCI6MTY3MzI0MTc0MCwic3ViIjoiMyJ9.a-UFBsD8VSoFzJgb9MwjYd1nXk6qdM1DRGXw1rK_DFU'

            try {
                const request = await api.post('/request',data, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                
               await setDashboardListRequests([...dashboardListRequests, request.data])
               setModalCreatepost(false)
            } catch (error) {
                console.error(error)

            }finally{
                
            }
        }


    return(
        <CreatePostContext.Provider value={{createPost, createRequest, modalCreatepost, setModalCreatepost}}>
            {children}
        </CreatePostContext.Provider>
    )

}