import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";


interface iChildren{
    children: React.ReactNode
}




interface iDashboardListPosts{
        title: string,
        content: string,
        category: string,
        type: string,
        image: string,
        userId: number,
        id: number
        data:[]
}

export const DashboardListContext = createContext({})


export const DashboardListProvider = ({children}:iChildren) => {



    const [dashboardListPosts, setDashboaedListPosts] = useState([])
    const [dashboardListRequests, setDashboardListRequests] = useState([] as iDashboardListPosts[])



    useEffect(()=>{

        const getPost =  async () => {

            const token = localStorage.getItem('@UserToken') ||  ''

            try {
                const request:iDashboardListPosts = await api.get('/posts')
                console.log(request.data)
                setDashboaedListPosts(request.data)

            } catch (error) {
                console.error(error)
            }



        }
        getPost()
    },[])



    useEffect(()=>{

        const getRequests =  async () => {

            try {
                const request:iDashboardListPosts = await api.get('/request')
                console.log(request.data)
                // setDashboaedListPosts(request.data)

            } catch (error) {
                console.error(error)
            }

        }
        getRequests()
    },[])





    return(
        <DashboardListContext.Provider value={{
            dashboardListPosts,
            setDashboaedListPosts,
            dashboardListRequests,
            setDashboardListRequests}}>
            {children}
        </DashboardListContext.Provider>            
    )
}