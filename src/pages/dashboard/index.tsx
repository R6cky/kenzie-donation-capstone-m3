import React, { useContext } from 'react'
import ModalEditProfile from '../../modalProfile'
import { ModalEditContext } from '../../modalProfile/contexts'

const DashboardPage = () => {
  const { open, setIsOpen } = useContext(ModalEditContext)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Editar perfil</button>
      {
        open ? (
          <ModalEditProfile />
        ) :
          false
      }
    </>
  )
}

export default DashboardPage