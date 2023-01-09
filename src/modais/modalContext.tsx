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
   editPostIsOpenModal: number | null
   viewDonation: iPosts[]
   viewRequest: iPosts[]
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
   setDeleteIsOpen: React.Dispatch<React.SetStateAction<number | null>>
   setEditPostIsOpenModal: React.Dispatch<React.SetStateAction<number | null>>
   handleModal: () => void
   handleModalDelete: (id: number) => void
   modalEditPostHandle: (id: number) => void
   deletePostDonation: (id: number) => void
}

export const ModalContext = createContext({} as iModalContextProps)

export const ModalProvider = ({ children }: iProviderProps) => {
   const [modalIsOpen, setIsOpen] = useState(false)
   const [modalDeleteIsOpen, setDeleteIsOpen] = useState<number | null>(null)
   const [editPostIsOpenModal, setEditPostIsOpenModal] = useState<
      number | null
   >(null)
   const [viewDonation, setViewDonation] = useState([] as iPosts[])
   const [viewRequest, setViewRequest] = useState([] as iPosts[])

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

   const deletePostDonation = (id: number) => {
      const deletePostDonation = viewDonation.filter((elem) => elem.id !== id)
      setViewDonation(deletePostDonation)
      setDeleteIsOpen(null)
   }

   const handleModal = () => {
      if (!modalIsOpen) {
         setIsOpen(true)
      } else {
         setIsOpen(false)
      }
   }

   const handleModalDelete = (id: number) => {
      if (!modalDeleteIsOpen) {
         setDeleteIsOpen(id)
      } else {
         setDeleteIsOpen(null)
      }
   }

   const modalEditPostHandle = (id: number) => {
      if (!editPostIsOpenModal) {
         setEditPostIsOpenModal(id)
      } else {
         setEditPostIsOpenModal(null)
      }
   }

   return (
      <ModalContext.Provider
         value={{
            modalIsOpen,
            modalDeleteIsOpen,
            editPostIsOpenModal,
            viewDonation,
            viewRequest,
            handleModal,
            setIsOpen,
            setEditPostIsOpenModal,
            setDeleteIsOpen,
            handleModalDelete,
            modalEditPostHandle,
            deletePostDonation,
         }}
      >
         {children}
      </ModalContext.Provider>
   )
}
