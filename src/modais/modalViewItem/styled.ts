import styled from 'styled-components';

export const StyleModalUl = styled.div`
      
      display: flex;
      flex-direction: column;
      margin: 2rem 0;
      gap: 2rem;


      picture {
      width: 100%;
      height: 300px;
      max-width: 100%;
      }

      img {
        height: 100%;
        width: 100%;
        border-radius: 8px;
        object-fit: cover;
      }

      section {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          color: var(--grey-300);
        }

        h4 {
          background-color: var(--grey-300);
          color: var(--white);
          font-weight: 500;

          padding: 0.5rem;
          border-radius: 0.3rem;
        }

        p {
          color: var(--color-primary);
          font-weight: 500;
        }

        

          @media (min-width: 1200px) {
            
          }



          
        }
        
      
      
      
    

`;
