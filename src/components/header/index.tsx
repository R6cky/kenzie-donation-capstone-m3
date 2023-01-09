import Logo from '../../assets/logo.svg'
import Menu from '../../assets/menu.svg'
import Clothes from '../../assets/clothes.svg'
import Rocket from '../../assets/rocket.svg'
import Poltrona from '../../assets/poltrona.svg'
import Smartphone from '../../assets/smartphone.svg'
import Book from '../../assets/book.png'
import { StyledHeader } from './style'
import { Link } from 'react-router-dom'


export const HeaderHome = () => {
   return (
      <StyledHeader>
         <div className='img-header'>
            <img src={Logo} alt='Logo' />
            <div className='dropDown'>
            <img className='menu' src={Menu} alt='Menu' />
            <img className='exit-btn' src={ExitBtn} alt='Menu' />


            

            {1 !==1 ? 
            <div className='dropDown-content'>
               <Link to={'/'} className='login-home'>Entrar</Link>
               <Link to={''} className='register-home'>Cadastrar-se</Link>
            </div>  : 
            

            <div className='dropDown-content-logged'>
               <button className='buttons-menu-dashboard'>Editar perfil</button>
               <button className='buttons-menu-dashboard'>Novo post</button>
               <button className='buttons-menu-dashboard'>Seus itens</button>
            </div> 
            
            }


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
      </StyledHeader>
   )
}
