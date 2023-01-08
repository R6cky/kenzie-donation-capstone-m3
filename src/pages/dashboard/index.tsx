import { useContext } from 'react'
import { ModalDash } from '../../modais/modalSeusItens'
import { ModalContext } from '../../modais/modalContext'

export const DashboardHome = () => {
   const { modalIsOpen, handleModal } = useContext(ModalContext)

   return (
      <div>
         <button onClick={() => handleModal()}>OPEN MODAL</button>
         {modalIsOpen && <ModalDash />}
      </div>
   )
}
