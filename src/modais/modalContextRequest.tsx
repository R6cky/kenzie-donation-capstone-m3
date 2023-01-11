import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'
import { iPosts, iProviderProps } from './modalContext'

interface iModalRequestContextProps {
   modalDeleteRequestIsOpen: number | null
   setModalDeleteRequestIsOpen: React.Dispatch<
      React.SetStateAction<number | null>
   >
   modalDeleteRequest: (id: number) => void
   deletePostRequest: (id: number) => void
   viewRequest: iPosts[]
}

export const ModalRequestContext = createContext(
   {} as iModalRequestContextProps
)

export const ModalRequestProvider = ({ children }: iProviderProps) => {
   const [modalDeleteRequestIsOpen, setModalDeleteRequestIsOpen] = useState<
      number | null
   >(null) //modal delete ul request
   const [viewRequest, setViewRequest] = useState([] as iPosts[]) //array request

   useEffect(() => {
      const getAllRequests = async () => {
         try {
            const { data } = await api.get('/request')
            setViewRequest(data)
         } catch (error) {
            console.log(error)
         }
      }
      getAllRequests()
   }, [])

   const deleteRequest = async (id: number) => {
      console.log(id)
      const token = ''
      try {
         const { data } = await api.delete(`/request/${id}`, token as any)
         console.log(data)
      } catch (error) {
         console.log(error)
      }
   }

   const modalDeleteRequest = (id: number) => {
      //abrir e fechar modal delete request
      if (!modalDeleteRequestIsOpen) {
         setModalDeleteRequestIsOpen(id)
      } else {
         setModalDeleteRequestIsOpen(null)
      }
   }

   const deletePostRequest = (id: number) => {
      //modal deletar donation
      console.log(id)
      const deletePostRequest = viewRequest.filter((elem) => elem.id !== id)
      deleteRequest(id)
      setViewRequest(deletePostRequest)
      setModalDeleteRequestIsOpen(null)
   }

   return (
      <ModalRequestContext.Provider
         value={{
            modalDeleteRequestIsOpen,
            setModalDeleteRequestIsOpen,
            modalDeleteRequest,
            deletePostRequest,
            viewRequest,
         }}
      >
         {children}
      </ModalRequestContext.Provider>
   )
}
