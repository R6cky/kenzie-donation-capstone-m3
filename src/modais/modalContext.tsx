import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export interface iProviderProps {
   children: React.ReactNode
}

interface iPosts {
   title: string
   description: string
   img: string
   type: string
   category: string
   userId: number
   id: number
}

interface iModalContextProps {
   modalIsOpen: boolean
   modalDeleteIsOpen: number | null
   modalDeleteRequestIsOpen: number | null
   editPostIsOpenModal: number | null
   viewDonation: iPosts[]
   viewRequest: iPosts[]

   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
   setDeleteIsOpen: React.Dispatch<React.SetStateAction<number | null>>
   setModalDeleteRequestIsOpen: React.Dispatch<
      React.SetStateAction<number | null>
   >
   setEditPostIsOpenModal: React.Dispatch<React.SetStateAction<number | null>>

   handleModal: () => void
   handleModalDelete: (id: number) => void
   handleModalDeleteRequest: (id: number) => void
   modalEditPostHandle: (id: number) => void
   deletePostDonation: (id: number) => void
   deletePostRequest: (id: number) => void
}

export const ModalContext = createContext({} as iModalContextProps)

export const ModalProvider = ({ children }: iProviderProps) => {
   const [modalIsOpen, setIsOpen] = useState(false) //modal seus itens
   const [modalDeleteIsOpen, setDeleteIsOpen] = useState<number | null>(null) //modal delete ul donation
   const [modalDeleteRequestIsOpen, setModalDeleteRequestIsOpen] = useState<
      number | null
   >(null) //modal delete ul request
   const [editPostIsOpenModal, setEditPostIsOpenModal] = useState<
      number | null
   >(null) //modal editar donation
   const [viewDonation, setViewDonation] = useState([] as iPosts[]) //array donation
   const [viewRequest, setViewRequest] = useState([] as iPosts[]) //array request

   useEffect(() => {
      const getAllDonations = async () => {
         try {
            const { data } = await api.get('/donation')
            setViewDonation(data)
         } catch (error) {
            console.log(error)
         }
      }
      getAllDonations()
   }, [])

   useEffect(() => {
      const getAllRequests = async () => {
         try {
            const { data } = await api.get('request')
            setViewRequest(data)
         } catch (error) {
            console.log(error)
         }
      }
      getAllRequests()
   }, [])

   const modalEditPostHandle = (id: number) => {
      // abrir e fechar modal edit donation
      if (!editPostIsOpenModal) {
         setEditPostIsOpenModal(id)
      } else {
         setEditPostIsOpenModal(null)
      }
   }

   const handleModal = () => {
      //abrir e fechar modal seus itens
      if (!modalIsOpen) {
         setIsOpen(true)
      } else {
         setIsOpen(false)
      }
   }

   const handleModalDelete = (id: number) => {
      //abrir e fechar modal delete donation
      if (!modalDeleteIsOpen) {
         setDeleteIsOpen(id)
      } else {
         setDeleteIsOpen(null)
      }
   }

   const handleModalDeleteRequest = (id: number) => {
      //abrir e fechar modal delete request
      if (!modalDeleteRequestIsOpen) {
         setModalDeleteRequestIsOpen(id)
      } else {
         setModalDeleteRequestIsOpen(null)
      }
   }

   const deletePostDonation = (id: number) => {
      //modal deletar donation
      console.log(id)
      const deletePostDonation = viewDonation.filter((elem) => elem.id !== id)
      setViewDonation(deletePostDonation)
      setDeleteIsOpen(null)
   }

   const deletePostRequest = (id: number) => {
      //modal deletar donation
      console.log(id)
      const deletePostRequest = viewRequest.filter((elem) => elem.id !== id)
      console.log(deletePostRequest)

      setViewRequest(deletePostRequest)
      setModalDeleteRequestIsOpen(null)
   }

   return (
      <ModalContext.Provider
         value={{
            modalIsOpen,
            modalDeleteIsOpen,
            modalDeleteRequestIsOpen,
            editPostIsOpenModal,
            viewDonation,
            viewRequest,
            handleModal,
            setIsOpen,
            setEditPostIsOpenModal,
            setDeleteIsOpen,
            setModalDeleteRequestIsOpen,
            handleModalDelete,
            handleModalDeleteRequest,
            modalEditPostHandle,
            deletePostDonation,
            deletePostRequest
         }}
      >
         {children}
      </ModalContext.Provider>
   )
}
