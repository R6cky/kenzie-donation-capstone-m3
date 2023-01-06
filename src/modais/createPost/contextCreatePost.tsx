import exp from "constants";
import { Children, createContext, useEffect } from "react";
import { api } from "../../services/api";

interface iChildren{
    children: React.ReactNode
}


interface iCreatePostContext{
    createPost: (data:any) => void
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

            const token = localStorage.getItem('@UserToken') || ''

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


    return(
        <CreatePostContext.Provider value={{createPost}}>
            {children}
        </CreatePostContext.Provider>
    )

}