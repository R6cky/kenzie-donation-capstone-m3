import { useContext } from "react"
import { useForm } from "react-hook-form"
import { ModalEditContext } from "./contexts"
import { StyledModalWrapper } from "./styled"

const ModalEditProfile = () => {

  const { setIsOpen } = useContext(ModalEditContext)
  const { register, handleSubmit } = useForm()

  function submit(data: any) {
    console.log(data)
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
            <input type="text" id="name" placeholder="Digite aqui seu nome completo..." {...register('name')}/>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Digite aqui seu email..." {...register('email')}/>
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar" placeholder="Coloque a URL do seu avatar..." {...register('avatar')}/>
            <label htmlFor="phone">Telefone</label>
            <input type="tel" id="phone" placeholder="Digite seu telefone..." {...register('phone')}/>
            <label htmlFor="state">Estado</label>
            <input type="text" id="state" placeholder="Digite aqui seu estado..." {...register('state')}/>
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