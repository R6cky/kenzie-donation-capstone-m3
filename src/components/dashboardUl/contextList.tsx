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



    const [dashboardListPosts, setDashboardListPosts] = useState([])
    const [dashboardListRequests, setDashboardListRequests] = useState([] as iDashboardListPosts[])



    useEffect(()=>{

        const getPost =  async () => {

            try {
                const request:iDashboardListPosts = await api.get('/donation')
                setDashboardListPosts(request.data)

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
                setDashboardListRequests(request.data)

            } catch (error) {
                console.error(error)
            }

        }
        getRequests()
    },[])





    return(
        <DashboardListContext.Provider value={{
            dashboardListPosts,
            setDashboardListPosts,
            dashboardListRequests,
            setDashboardListRequests}}>
            {children}
        </DashboardListContext.Provider>            
    )
}