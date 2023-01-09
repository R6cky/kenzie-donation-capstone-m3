import styled from 'styled-components'

export const StyledModalConfirmDeleteRequest = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   padding: 20px;

   .title-modal-delete {
      font-size: 24px;
      font-weight: 700;
      color: var(--Negative);
      margin-top: 20px;
   }

   .box-btn-modal-delete {
      display: flex;
      justify-content: space-between;

      margin-top: 20px;
   }

   .box-btn-modal-delete > button {
      height: 30px;

      color: var(--grey-0);
      font-size: 15px;
      font-weight: 700;

      border-radius: 5px;
      margin: 5px;
      padding: 10px;

      display: flex;
      justify-content: center;
      align-items: center;
   }

   .btn-cancel {
      border: 1px solid var(--grey-default);
      background-color: var(--grey-default);
   }

   .btn-confirm-delete {
      border: 1px solid var(--button-red);
      background-color: var(--button-red);
   }
`
