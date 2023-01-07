import styled from 'styled-components'

export const StyledHeader = styled.header`
   height: 100%;
   padding: 15px 15px 0 15px;
   display: flex;
   flex-direction: column;
   border-bottom: 4px solid var(--color-primary);

   .img-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   .btn-filter {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin-bottom: 30px;
   }

   .box-icon-filter {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }

   .icon-filter {
      border: 2px solid var(--color-primary);
      border-radius: 100%;
      width: 62px;
      height: 62px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px;
   }

   .icon-name {
      font-weight: 500;
      font-size: 12px;
      color: var(--color-primary);
   }

   .dropDown {
      position: relative;
      display: inline-block;
   }

   .dropDown-content {
      width: 200px;
      height: 48px;
      position: absolute;
      top: 22px;
      right: 0px;
      border-radius: 5px;
      border: 2px solid var(--color-primary);

      background-color: var(--grey-0);
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;

      animation: modalAnimation 2s ease;
      display: flex;
      justify-content: center;
      align-items: center;
   }


   // Estilo do menu da dashboard -- adicionado
   .dropDown-content-logged{

      width: 347px;
      height: 48px;
      position: absolute;
      top: 25px;
      right: 0px;
      border-radius: 5px;
      border: 2px solid var(--color-primary);

      background-color: var(--grey-0);
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;

      animation: modalAnimation 2s ease;
      display: flex;
      justify-content: center;
      align-items: center;


   }


   .login-home,
   .register-home,
   .buttons-menu-dashboard {
      height: 30px;
      border-radius: 2px;
      border: 2px solid var(--color-primary);
      background-color: var(--color-primary);
      margin: 0 10px;
      color: var(--grey-0);
      text-decoration: none;
      font-weight: bold;
   }



   // Estilo do menu da dashboard -- adicionado
   .buttons-menu-dashboard {
      width: 90px;
      height: 30px;
      border-radius: 2px;
      border: 2px solid var(--color-primary);
      background-color: var(--color-primary);
      margin: 0 10px;
      color: var(--grey-0);
      text-decoration: none;
      font-weight: bold;
   }

   .login-home:hover, 
   .register-home:hover {
      background-color: rgba(86, 144, 231, 0.66);
      border: 2px solid rgba(86, 144, 231, 0.66);
   }

   @keyframes modalAnimation {
      0% {
         opacity: 0;
         transform: translateY(-80%);
      }

      100% {
         opacity: 1;
         transform: translateY(0);
      }
   }
`
