import { useState,createContext, useContext} from "react";
import { DashboardListContext } from "../../components/dashboardUl/contextList";
import { api } from "../../services/api";
import {toast} from 'react-toastify'

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
                
                     const token = localStorage.getItem('@USERTOKEN')

                    try {
                        const request = await api.post('/donation',data, {
                            headers: {
                                authorization: `Bearer ${token}`
                            }
                        })
                        await  setDashboardListPosts([...dashboardListPosts, request.data])
                        setModalCreatepost(false)
                        toast.success("Criado com sucesso!");
                    } catch (error) {
                        console.error(error)
                        toast.error("Ops, algo deu errado!");
                    }
                }
            

    


      
       


        const createRequest =  async (data:iCreatePosts) => {

            const token = localStorage.getItem('@TOKEN')

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