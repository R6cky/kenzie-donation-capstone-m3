import { useContext } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { UserContextLogin } from "../contexts/UserContext"
import { ModalEditContext } from "./contexts"
import { StyledModalWrapper } from "./styled"


export interface iDataEdit{
  name?: string,
  avatar?: string,
  phone?: string,
  state?: string
}

const ModalEditProfile = () => {

  const { setIsOpen, editProfile } = useContext(ModalEditContext)
  const {user} = useContext(UserContextLogin)
  const { register, handleSubmit } = useForm()

  const submit:SubmitHandler<iDataEdit> = (data) => {
    editProfile(data)
  }

  return (

    <StyledModalWrapper>
      <div className='modalBox'>
        <div className="modalHeader">
          <h2>Edite seu perfil</h2>
          <button onClick={() => setIsOpen(false)}>x</button>
        </div>
        <div className="modalBody">
          <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="name">Nome</label>
            <input type="text"  defaultValue={user.data.name}  id="name" placeholder="Digite aqui seu nome completo..." {...register('name')}/>
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar" placeholder="Coloque a URL do seu avatar..." {...register('avatar')}/>
            <label htmlFor="phone">Telefone</label>
            <input type="tel"  defaultValue={user.data.phone}  id="phone" placeholder="Digite seu telefone..." {...register('phone')}/>
            <label htmlFor="state">Estado</label>
            <input type="text" id="state"  defaultValue={user.data.state} placeholder="Digite aqui seu estado..." {...register('state')}/>
            <div className="footerButtons">
              <button type="submit">Salvar Alterações</button>
              <button onClick={() => setIsOpen(false)}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </StyledModalWrapper>
  )
}

export default ModalEditProfile