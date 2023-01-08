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
`
