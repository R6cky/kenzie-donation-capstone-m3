import styled from 'styled-components'

export const StyledModalContentEditPost = styled.div`
   .box-header {
      display: flex;
      justify-content: space-between;

      padding: 22px;
   }

   .box-header > h2 {
      font-weight: 700;
      font-size: 20px;
      color: var(--color-primary);
   }

   .box-header > button {
      width: 27px;
      height: 27px;

      padding: 10px;

      font-weight: 700;
      font-size: 15px;
      color: var(--white);

      border: none;
      border-radius: 5px;
      background-color: var(--color-primary);

      display: flex;
      justify-content: center;
      align-items: center;
   }

   .create-post {
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   label {
      font-size: 14px;
      color: var(--color-primary);

      margin-top: 18px;
   }

   .box-form {
      width: 94%;

      display: flex;
      flex-direction: column;
      gap: 5px;
   }

   input,
   select {
      width: 100%;
      height: 50px;

      font-size: 14px;

      border: 1px solid var(--color-primary);
      border-radius: 8px;

      padding-left: 10px;
   }

   input::placeholder {
      color: var(--grey-100);
   }

   .form-button {
      width: 94%;

      display: flex;
      flex-direction: column;
      gap: 18px;
   }

   .form-button > button {
      width: 100%;
      height: 50px;
      background: var(--color-primary);
      color: var(--grey-0);
      font-size: 18px;
      font-weight: bold;
      border: none;
      border-radius: 8px;
   }

   .btn-update {
      margin-top: 45px;
   }

   @media (min-width: 768px) {
      .create-post {
         margin-top: 30px;
      }

      .form-button {
         width: 94%;
         height: 50px;

         display: flex;
         flex-direction: row;
         justify-content: space-between;
         align-items: flex-end;
         gap: 18px;

         margin-top: 40px;
      }
   }
`
