import styled from 'styled-components'
export const StyledHeader = styled.header`
   
   padding: 15px 15px 0 15px;
   display: flex;
   flex-direction: column;
   border-bottom: 4px solid var(--color-primary);

   .btn-menu{
      cursor: pointer;
   }

   .exit-btn{
      cursor: pointer;
   }

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

   .btn-filter-large{
      display: none;
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
      width: 240px;
      height: 48px;
      position: absolute;
      top: 28px;
      right: 0px;
      border-radius: 5px;
      border: 2px solid var(--color-primary);
      display: flex;
      justify-content: space-between;

      background-color: var(--grey-0);
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;

      animation: modalAnimation 2s ease;
      align-items: center;
   }


   // Estilo do menu da dashboard -- adicionado
   .dropDown-content-logged{

      width: 347px;
      height: 48px;
      position: absolute;
      top: 30px;
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
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
   }



   // Estilo do menu da dashboard -- adicionado
   .buttons-menu-dashboard {
      width: 100px;
      max-width: 100%;
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



   // Estilo do menu da dashboard -- adicionado
   .exit-btn{
      margin-left: 10px;
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


   .dropDown-content{
     
         
   
      }

      .dropDown-content-larger{

      display: none;
         
      }


   

   @media(min-width: 1200px) {


      .dropDown {
      position: relative;
      display: inline-block;
      display: none;
   }

      .btn-filter {
         display: flex;
         align-items: center;
         justify-content: space-evenly;
         margin-bottom: 30px;
         display: none;
      }

      .btn-filter-large{
         display: flex;
         justify-content: flex-end;
         width: 85%;
         height: 40px;
         position: absolute;
         top: 35px;
         left: 200px;
         display: flex;
         align-items: center;
      }

      .options-menu{
         display: flex;
         justify-content: space-around;
         width: 400px;


         

         .options-menu-button{
            color: var(--grey-300);
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;

            :hover{
               text-decoration: underline;   
            }
         }


      }

      .options-menu-logged{
         display: flex;
         justify-content: space-around;
         width: 1200px;
         max-width: 100%;


         .options-menu-button{
            color: var(--grey-300);
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
            background: white;
            font-size: 16px;
            :hover{
               text-decoration: underline;
            }
         }



         .saudation-to-logged{
            width: 400px;
            color: var(--color-primary);
            span{
               color: var(--color-primary);
               font-weight: bold;
               font-size: 18px;
            }
         }


         .options-menu-button{
            color: var(--grey-300);
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
         }
         }
 
 
 
   }



   



`