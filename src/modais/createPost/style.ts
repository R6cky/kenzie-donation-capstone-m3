import styled from 'styled-components'

export const StyledCreatePost = styled.div`
   width: 100vw;
   max-width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   background: #00000058;
   position: fixed;
   left: 0;
   top: 0;
   z-index: 2;
   padding: 20px;

   .form-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;

      h4 {
         color: var(--color-primary);
         font-size: 18px;
         font-weight: bold;
      }

      span {
         color: var(--color-primary);
      }
   }

   form {
      width: 100%;
      max-width: 100%;
      height: 713px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      background: var(--grey-0);
      border-radius: 10px;

      animation: myAnim 1s ease 0s 1 normal forwards;

      @keyframes myAnim {
         0% {
            opacity: 0;
            transform: translateY(-50px);
         }

         100% {
            opacity: 1;
            transform: translateY(0);
         }
      }

      .form-header {
         display: flex;
         justify-content: space-between;
         align-items: center;
      }

      .btn-close-modal {
         img {
            width: 27px;
            height: 27px;
         }
      }

      label {
         font-size: 14px;
      }

      .form-title {
         width: 90%;
         display: flex;
         gap: 5px;
         flex-direction: column;
         input {
            width: 100%;
            height: 50px;
            font-size: 14px;
            padding-left: 10px;

            background: #ffffff;
            border: 1px solid #5690e7;
            border-radius: 8px;
         }
      }

      .form-description {
         width: 90%;
         display: flex;
         gap: 5px;
         flex-direction: column;

         input {
            width: 100%;
            height: 50px;
            font-size: 14px;

            padding-left: 10px;

            background: #ffffff;
            border: 1px solid #5690e7;
            border-radius: 8px;
         }
      }

      .form-post-category {
         width: 90%;
         display: flex;
         gap: 5px;
         flex-direction: column;

         select {
            width: 100%;
            height: 50px;
            font-size: 14px;

            background: #ffffff;
            border: 1px solid #5690e7;
            border-radius: 8px;
         }
      }

      .form-post-type {
         width: 90%;
         display: flex;
         gap: 5px;
         flex-direction: column;

         select {
            width: 100%;
            height: 50px;
            font-size: 14px;

            background: #ffffff;
            border: 1px solid #5690e7;
            border-radius: 8px;
         }
      }

      .form-post-image {
         width: 90%;
         display: flex;
         gap: 5px;
         flex-direction: column;

         input {
            width: 100%;
            height: 50px;
            font-size: 14px;

            padding-left: 10px;
            
            background: #ffffff;
            border: 1px solid #5690e7;
            border-radius: 8px;
         }
      }

      .form-button {
         width: 90%;
         display: flex;
         gap: 5px;
         flex-direction: column;
         gap: 10px;

         button {
            width: 100%;
            height: 50px;
            background: var(--color-primary);
            color: var(--grey-0);
            font-size: 18px;
            font-weight: bold;
            border: none;
            border-radius: 8px;
         }
      }
   }

   @media (min-width: 780px) {
      form {
         width: 600px;
         max-width: 100%;
         height: 844px;
         margin: 0 auto;
         display: flex;
         flex-direction: column;
         justify-content: space-around;
         align-items: center;
         background: var(--grey-0);
         border-radius: 10px;

         animation: myAnim 1s ease 0s 1 normal forwards;

         @keyframes myAnim {
            0% {
               opacity: 0;
               transform: translateY(-50px);
            }

            100% {
               opacity: 1;
               transform: translateY(0);
            }
         }

         .form-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
         }

         .btn-close-modal {
            img {
               width: 27px;
               height: 27px;
            }
         }

         label {
            font-size: 14px;
         }

         .form-title {
            width: 90%;
            display: flex;
            gap: 5px;
            flex-direction: column;
            input {
               width: 100%;
               height: 50px;
               font-size: 14px;
            }
         }

         .form-description {
            width: 90%;
            display: flex;
            gap: 5px;
            flex-direction: column;

            input {
               width: 100%;
               height: 50px;
               font-size: 14px;
            }
         }

         .form-post-category {
            width: 90%;
            display: flex;
            gap: 5px;
            flex-direction: column;

            select {
               width: 100%;
               height: 50px;
               font-size: 14px;
            }
         }

         .form-post-type {
            width: 90%;
            display: flex;
            gap: 5px;
            flex-direction: column;

            select {
               width: 100%;
               height: 50px;
               font-size: 14px;
            }
         }

         .form-post-image {
            width: 90%;
            display: flex;
            gap: 5px;
            flex-direction: column;

            input {
               width: 100%;
               height: 50px;
               font-size: 14px;
            }
         }

         .form-button {
            width: 90%;
            display: flex;
            gap: 5px;
            flex-direction: column;
            gap: 10px;

            button {
               width: 100%;
               height: 50px;
               background: var(--color-primary);
               color: var(--grey-0);
               font-size: 18px;
               font-weight: bold;
               border: none;
               border-radius: 8px;
            }
         }
      }
   }

   @media (min-width: 1200px) {
      form {
         width: 600px;
         max-width: 100%;
         height: 844px;
         margin: 0 auto;
         display: flex;
         flex-direction: column;
         justify-content: space-around;
         align-items: center;
         background: var(--grey-0);
         border-radius: 10px;

         animation: myAnim 1s ease 0s 1 normal forwards;

         @keyframes myAnim {
            0% {
               opacity: 0;
               transform: translateY(-50px);
            }

            100% {
               opacity: 1;
               transform: translateY(0);
            }
         }

         .form-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
         }

         .btn-close-modal {
            cursor: pointer;
            img {
               width: 27px;
               height: 27px;
            }
         }

         label {
            font-size: 14px;
            color: var(--color-primary);
         }

         .form-title {
            width: 90%;
            display: flex;
            gap: 5px;
            flex-direction: column;
            input {
               width: 100%;
               height: 50px;
               font-size: 14px;
               padding: 5px;
            }
         }

         .form-description {
            width: 90%;
            display: flex;
            gap: 5px;
            flex-direction: column;

            input {
               width: 100%;
               height: 50px;
               font-size: 14px;
               padding: 5px;
            }
         }

         .form-post-category {
            width: 90%;
            display: flex;
            gap: 5px;
            flex-direction: column;

            select {
               width: 100%;
               height: 50px;
               font-size: 14px;
            }
         }

         .form-post-type {
            width: 90%;
            display: flex;
            gap: 5px;
            flex-direction: column;

            select {
               width: 100%;
               height: 50px;
               font-size: 14px;
            }
         }

         .form-post-image {
            width: 90%;
            display: flex;
            gap: 5px;
            flex-direction: column;

            input {
               width: 100%;
               height: 50px;
               font-size: 14px;
               padding: 5px;
            }
         }

         .form-button {
            width: 90%;
            display: flex;
            justify-content: space-between;
            gap: 5px;
            flex-direction: row;
            gap: 10px;

            button {
               width: 250px;
               height: 50px;
               background: var(--color-primary);
               color: var(--grey-0);
               font-size: 18px;
               font-weight: bold;
               border: none;
               border-radius: 8px;
               border: solid;
            }
         }
      }
   }
`
