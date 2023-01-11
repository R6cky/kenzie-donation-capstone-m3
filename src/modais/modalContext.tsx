import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export interface iProviderProps {
   children: React.ReactNode
}

export interface iPosts {
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
   editPostIsOpenModal: number | null
   viewDonation: iPosts[]
   viewItemModal: number | null

   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
   setDeleteIsOpen: React.Dispatch<React.SetStateAction<number | null>>
   setEditPostIsOpenModal: React.Dispatch<React.SetStateAction<number | null>>
   setViewItemModal: React.Dispatch<React.SetStateAction<number | null>>

   handleModal: () => void
   handleModalDelete: (id: number) => void
   modalEditPostHandle: (id: number) => void
   deletePostDonation: (id: number) => void
}

export const ModalContext = createContext({} as iModalContextProps)

export const ModalProvider = ({ children }: iProviderProps) => {
   const [modalIsOpen, setIsOpen] = useState(false) //modal seus itens
   const [modalDeleteIsOpen, setDeleteIsOpen] = useState<number | null>(null) //modal delete ul donation
   const [editPostIsOpenModal, setEditPostIsOpenModal] = useState<
      number | null
   >(null) //modal editar donation
   const [viewDonation, setViewDonation] = useState([] as iPosts[]) //array donation
   const [viewItemModal, setViewItemModal] = useState<number | null>(null)

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

   const deletePostDonation = async (id: number) => {
      //modal deletar donation
      const token = localStorage.getItem('@USERTOKEN')
      try {
         await api.delete(`/donation/${id}`, {
            headers: {
               authorization: `Bearer ${token}`,
            },
         })
         const deletePostDonation = viewDonation.filter(
            (donation) => donation.id !== id
         )
         setViewDonation(deletePostDonation)
         setDeleteIsOpen(null)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <ModalContext.Provider
         value={{
            modalIsOpen,
            modalDeleteIsOpen,
            editPostIsOpenModal,
            viewDonation,
            viewItemModal,
            handleModal,
            setIsOpen,
            setEditPostIsOpenModal,
            setDeleteIsOpen,
            setViewItemModal,
            handleModalDelete,
            modalEditPostHandle,
            deletePostDonation,
         }}
      >
         {children}
      </ModalContext.Provider>
   )
}
