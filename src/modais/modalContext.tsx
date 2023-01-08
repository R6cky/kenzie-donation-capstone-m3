import { createContext, useState } from 'react'

export interface iProviderProps {
   children: React.ReactNode
}

interface iModalContextProps {
   modalIsOpen: boolean
   modalDeleteIsOpen: boolean
   editPostIsOpenModal: boolean
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
   setDeleteIsOpen: React.Dispatch<React.SetStateAction<boolean>>
   setEditPostIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
   handleModal: () => void
   handleModalDelete: () => void
   modalEditPostHandle: () => void
}

export const ModalContext = createContext({} as iModalContextProps)

export const ModalProvider = ({ children }: iProviderProps) => {
   const [modalIsOpen, setIsOpen] = useState(false)
   const [modalDeleteIsOpen, setDeleteIsOpen] = useState(false)
   const [editPostIsOpenModal, setEditPostIsOpenModal] = useState(false)

   const handleModal = () => {
      if (modalIsOpen === false) {
         setIsOpen(true)
      } else {
         setIsOpen(false)
      }
   }

   const handleModalDelete = () => {
      if (modalDeleteIsOpen === false) {
         setDeleteIsOpen(true)
      } else {
         setDeleteIsOpen(false)
      }
   }

   const modalEditPostHandle = () => {
      if (editPostIsOpenModal === false) {
         setEditPostIsOpenModal(true)
      } else {
         setEditPostIsOpenModal(false)
      }
   }

   return (
      <ModalContext.Provider
         value={{
            modalIsOpen,
            modalDeleteIsOpen,
            editPostIsOpenModal,
            handleModal,
            setIsOpen,
            setEditPostIsOpenModal,
            setDeleteIsOpen,
            handleModalDelete,
            modalEditPostHandle
         }}
      >
         {children}
      </ModalContext.Provider>
   )
}
