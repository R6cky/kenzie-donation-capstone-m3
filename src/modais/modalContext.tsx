import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'

export interface iProviderProps {
   children: React.ReactNode
}

export interface iUser {
   email: string
   password: string
   name: string
   avatar: string
   phone: string
   state: string
   id: number
   donation?: iPosts[]
   request?: iPosts[]
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
   viewDonationList: iPosts[]
   viewDonation: iPosts[]
   viewItemModal: number | null
   viewMyDonationList: iPosts[]
   viewMyRequestList: iPosts[]

   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
   setDeleteIsOpen: React.Dispatch<React.SetStateAction<number | null>>
   setEditPostIsOpenModal: React.Dispatch<React.SetStateAction<number | null>>
   setViewItemModal: React.Dispatch<React.SetStateAction<number | null>>

   handleModal: () => void
   handleModalDelete: (id: number) => void
   modalEditPostHandle: (id: number) => void
   deletePostDonation: (id: number) => void
   getDonation: () => Promise<void>
   getDonationAction: (body: any) => Promise<void>
   getRequestAction:(body: any) => Promise<void>
   getRequest: () => Promise<void>
}

export const ModalContext = createContext({} as iModalContextProps)

export const ModalProvider = ({ children }: iProviderProps) => {
   const [modalIsOpen, setIsOpen] = useState(false) //modal seus itens
   const [modalDeleteIsOpen, setDeleteIsOpen] = useState<number | null>(null) //modal delete ul donation

   const [editPostIsOpenModal, setEditPostIsOpenModal] = useState<
      number | null
   >(null) //modal editar donation
   const [viewDonationList, setViewDonationList] = useState([] as iPosts[]) //array donation
   const [viewDonation, setViewDonation] = useState([] as iPosts[]) //array donation
   const [viewMyDonationList, setViewMyDonationList] = useState([] as iPosts[]) //array donation
   const [viewMyRequestList, setViewMyRequestList] = useState([] as iPosts[]) //array donation
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

   useEffect(() => {
      const userIdVerify: number = Number(localStorage.getItem('@USERID'))
      const getAllDonationsUser = async (userId: number) => {
         try {
            const token = localStorage.getItem('@USERTOKEN')
            const { data } = await api.get(`/users/${userId}?_embed=donation`, {
               headers: {
                  authorization: `Bearer ${token}`,
               }
            })
            setViewDonationList(data.donation)
         } catch (error) {
            console.log(error)
         }
      }
      getAllDonationsUser(userIdVerify)
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
         const deletePostDonation = viewDonationList.filter(
            (donation) => donation.id !== id
         )
         setViewDonationList(deletePostDonation)
         setDeleteIsOpen(null)
      } catch (error: any) {
         if (error.response.status !== 201) {
            toast.error('Houve um erro!')
         }
      }
   }

   const getDonation = async () => {
      const token = localStorage.getItem('@USERTOKEN')

      try {
         const response = await api.get(`/getdonation`,{
            headers: {
               authorization: `Bearer ${token}`,
            }
         })
         setViewMyDonationList(response.data) 
         console.log(viewMyDonationList) 
      } catch (error) {
         console.log(error)
      }
   }

   const getDonationAction = async (body: any) => {
      const token = localStorage.getItem('@USERTOKEN')
      const userIdVerify: number = Number(localStorage.getItem('@USERID'))
      body.userId = userIdVerify

      try {
         const response = await api.post(`/getdonation`, body,{
            headers:{
               authorization: `Bearer ${token}`,
            }
         })
         console.log(response)
         getDonation()
      } catch (error) {
         console.log(error)
      }
   }

   const getRequest = async () => {
      const token = localStorage.getItem('@USERTOKEN')

      try {
         const response = await api.get(`/getrequest`,{
            headers: {
               authorization: `Bearer ${token}`,
            }
         })
         setViewMyRequestList(response.data) 
         console.log(viewMyRequestList) 
      } catch (error) {
         console.log(error)
      }
   }

   const getRequestAction = async (body: any) => {
      const token = localStorage.getItem('@USERTOKEN')
      const userIdVerify: number = Number(localStorage.getItem('@USERID'))
      body.userId = userIdVerify

      try {
         const response = await api.post(`/getrequest`, body,{
            headers:{
               authorization: `Bearer ${token}`,
            }
         })
         console.log(response)
         getRequest()
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
            viewDonationList,
            viewItemModal,
            viewMyDonationList,
            viewMyRequestList,
            handleModal,
            setIsOpen,
            setEditPostIsOpenModal,
            setDeleteIsOpen,
            setViewItemModal,
            handleModalDelete,
            modalEditPostHandle,
            deletePostDonation,
            getDonation,
            getDonationAction,
            getRequestAction,
            getRequest
         }}
      >
         {children}
      </ModalContext.Provider>
   )
}
