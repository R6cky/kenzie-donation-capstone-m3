import { useState,createContext, useEffect } from "react";
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

        const [modalCreatepost, setModalCreatepost] = useState(false)

        const createPost =  async (data:iCreatePosts) => {

            // const token = localStorage.getItem('@UserToken') || ''
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbG9AbWFpbC5jb20iLCJpYXQiOjE2NzMwOTQ1MjgsImV4cCI6MTY3MzA5ODEyOCwic3ViIjoiMSJ9.QlkZOTk0j-2q-WeP8ap-R-Z5MJI62IEkanSBYxamQNI'

            try {
                const request = await api.post('/donation',data, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
            } catch (error) {
                console.error(error)
            }finally{

            }
        }


        const createRequest =  async (data:iCreatePosts) => {

            // const token = localStorage.getItem('@UserToken') || ''
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbG9AbWFpbC5jb20iLCJpYXQiOjE2NzMxMjE5MTAsImV4cCI6MTY3MzEyNTUxMCwic3ViIjoiMSJ9.TuO5OXQJXJ7hHEFIEahJXNMVG9Zq3_TWZ-N1TnAO1Lo'

            try {
                const request = await api.post('/request',data, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })

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