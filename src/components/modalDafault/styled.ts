import styled from 'styled-components'

export const StyledModal = styled.div`
   width: 100%;
   height: 100vh;

   display: flex;
   align-items: center;
   justify-content: center;

   background: rgba(0, 0, 0, 0.4);

   position: fixed;
   inset: 0;
   z-index: 1001;

   .modal-box {
      position: relative;
      z-index: 1002;

      width: 100%;
      max-width: 1180px;

      padding: 20px;

      background-color: var(--grey-0);
   }

   .modal-close {
      opacity: 0.5;
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;

      transition: 0.4s;

      :hover {
         opacity: 1;
      }
   }
`
