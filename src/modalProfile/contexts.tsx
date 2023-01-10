import React, { createContext, useState } from 'react'
import { api } from '../services/api'

export interface iDefaultProviderProps {
    children: React.ReactNode
}

export interface iModalEditContext{
    open: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const ModalEditContext = createContext({} as iModalEditContext)

const ModalEditProvider = ({ children }: iDefaultProviderProps) => {
    
    const [open, setIsOpen] = useState(false)
  
   async function editProfile(data:any) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlZHJvYXZmYkBnbWFpbC5jb20iLCJpYXQiOjE2NzMzNTU1MTgsImV4cCI6MTY3MzM1OTExOCwic3ViIjoiNCJ9.UNdJpqYxjJzpR7YfxZeANcAvBEJAoCXrYMQvwkXsY0Q" 
    
    if (token) {
        try {
            const response = await api.post('users/4', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.log(error)
        } finally {
            window.location.reload()
        }
    }

   }

    return (
    <ModalEditContext.Provider value={{open, setIsOpen}}>
        {children}
    </ModalEditContext.Provider>
  )
}

export default ModalEditProvider