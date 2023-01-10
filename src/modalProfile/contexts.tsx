import React, { createContext, useState } from 'react'
import { iDataEdit } from '.'
import { api } from '../services/api'

export interface iDefaultProviderProps {
    children: React.ReactNode
}

export interface iModalEditContext{
    open: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    editProfile: (data: any) => Promise<void>
}

export const ModalEditContext = createContext({} as iModalEditContext)

const ModalEditProvider = ({ children }: iDefaultProviderProps) => {
    
    const [open, setIsOpen] = useState(false)
  
   async function editProfile(data:iDataEdit) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlZHJvYXZmYkBnbWFpbC5jb20iLCJpYXQiOjE2NzMzNjM1NTcsImV4cCI6MTY3MzM2NzE1Nywic3ViIjoiNCJ9.dB-n5bHZjXcmri32h4gyJybznQJ37jjyClAiyfoYK9k" 
    const userId = '4'
    
    if (token) {
        try {
            const response = await api.patch(`/users/${userId}`, data, {
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
    <ModalEditContext.Provider value={{open, setIsOpen, editProfile}}>
        {children}
    </ModalEditContext.Provider>
  )
}

export default ModalEditProvider