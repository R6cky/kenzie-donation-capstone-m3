import exp from "constants";
import { Children, createContext, useEffect } from "react";
import { api } from "../../services/api";

interface iChildren{
    children: React.ReactNode
}


interface iCreatePostContext{
    createPost: (data:any) => void
    createRequest: ((data:any) => void)
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





export const CreatePostContext = createContext({} as iCreatePostContext)


export const CreatePostProvider = ({children}:iChildren) => {



        const createPost =  async (data:iCreatePosts) => {

            // const token = localStorage.getItem('@UserToken') || ''
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbG9AbWFpbC5jb20iLCJpYXQiOjE2NzI5Nzc5ODcsImV4cCI6MTY3Mjk4MTU4Nywic3ViIjoiOCJ9.Kb0pB93LKBpH6g9UYjrssHD7v4uCZIZRCilLdXunQaY'

            try {
                const request = await api.post('/posts',data, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
            } catch (error) {
                console.error(error)
            }
        }


        const createRequest =  async (data:iCreatePosts) => {

            // const token = localStorage.getItem('@UserToken') || ''
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbG9AbWFpbC5jb20iLCJpYXQiOjE2NzI5Nzc5ODcsImV4cCI6MTY3Mjk4MTU4Nywic3ViIjoiOCJ9.Kb0pB93LKBpH6g9UYjrssHD7v4uCZIZRCilLdXunQaY'

            try {
                const request = await api.post('/request',data, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
            } catch (error) {
                console.error(error)
            }
        }


    return(
        <CreatePostContext.Provider value={{createPost, createRequest}}>
            {children}
        </CreatePostContext.Provider>
    )

}