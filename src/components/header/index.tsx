import Logo from '../../assets/logo.svg'
import Menu from '../../assets/menu.svg'
import Clothes from '../../assets/clothes.svg'
import Rocket from '../../assets/rocket.svg'
import Poltrona from '../../assets/poltrona.svg'
import Smartphone from '../../assets/smartphone.svg'
import ExitBtn from '../../assets/btn-exit-dashboard.png'
import Book from '../../assets/book.png'
import { StyledHeader } from './style'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CreatePostContext } from '../../modais/createPost/contextCreatePost'
import { ModalEditContext } from '../../modalProfile/contexts'
import { ModalContext } from '../../modais/modalContext'
import { ModalDash } from '../../modais/modalYourItems'

export const HeaderHome = () => {
   const { modalCreatepost, setModalCreatepost } = useContext(CreatePostContext)
   const { setIsOpen } = useContext(ModalEditContext)
   const { modalIsOpen, handleModal } = useContext(ModalContext)

   return (
      <StyledHeader>
         <div className='img-header'>
            <img src={Logo} alt='Logo' />
            <div className='dropDown'>
               <img className='btn-menu' src={Menu} alt='Menu' />
               <img className='exit-btn' src={ExitBtn} alt='Menu' />

               {1 !== 1 ? (
                  <div className='dropDown-content'>
                     <Link to={'/'} className='login-home'>
                        Entrar
                     </Link>
                     <Link to={'/register'} className='register-home'>
                        Cadastrar-se
                     </Link>
                  </div>
               ) : (
                  <div className='dropDown-content-logged'>
                     <button
                        className='buttons-menu-dashboard'
                        onClick={() => setIsOpen(true)}
                     >
                        Editar perfil
                     </button>
                     <button
                        className='buttons-menu-dashboard'
                        onClick={() => setModalCreatepost(true)}
                     >
                        Novo post
                     </button>
                     <button
                        onClick={() => handleModal()}
                        className='buttons-menu-dashboard'
                     >
                        Seus itens
                     </button>
                     {modalIsOpen && <ModalDash />}
                  </div>
               )}
            </div>
         </div>
         <div className='btn-filter'>
            <div className='box-icon-filter'>
               <div className='icon-filter'>
                  <img src={Clothes} alt='Roupas' />
               </div>
               <p className='icon-name'>Roupas</p>
            </div>
            <div className='box-icon-filter'>
               <div className='icon-filter'>
                  <img src={Rocket} alt='Brinquedos' />
               </div>
               <p className='icon-name'>Brinquedos</p>
            </div>
            <div className='box-icon-filter'>
               <div className='icon-filter'>
                  <img src={Poltrona} alt='Móveis' />
               </div>
               <p className='icon-name'>Móveis</p>
            </div>
            <div className='box-icon-filter'>
               <div className='icon-filter'>
                  <img src={Smartphone} alt='Eletrônicos' />
               </div>
               <p className='icon-name'>Eletro</p>
            </div>
            <div className='box-icon-filter'>
               <div className='icon-filter'>
                  <img src={Book} alt='Livros' />
               </div>
               <p className='icon-name'>Livros</p>
            </div>
         </div>
         <div className='btn-filter-large'>

              {/* <div className='options-menu'>
                  <Link to={'/login'} className='options-menu-button'>
                        Login
                  </Link>
                  <Link to={'/register'} className='options-menu-button'>
                        Cadastre-se
                  </Link>
               </div>     */}

               <div className='options-menu-logged'>
                  <p className='saudation-to-logged'>
                     <span>Seja bem vindo</span>, usuário...
                  </p>
                  <button onClick={() => setIsOpen(true)} className='options-menu-button'>
                        Editar perfil
                  </button>
                  <button onClick={() => setModalCreatepost(true)} className='options-menu-button'>
                        Novo post
                  </button>
                  <button onClick={() => handleModal()} className='options-menu-button'>
                        Seus itens
                  </button>
                  <Link to={''} className='options-menu-button'>
                        Sair
                  </Link>
               </div>     


         </div>
      </StyledHeader>
   )
}
