
import styled from "styled-components";

export const StyledDashboardList = styled.div`

    border: solid red;

   ul{  width: 100%;
        height: 350px;
        display: flex;
        gap: 20px;
        overflow-x: scroll;
        padding: 20px;
        margin-bottom: 20px;

        ::-webkit-scrollbar {
            width: 8px;     
            height:10px;          /* width of the entire scrollbar */
        }

        ::-webkit-scrollbar-track {
        background: var(--grey-0);        /* color of the tracking area */
        }

        ::-webkit-scrollbar-thumb {
        background-color: var(--color-primary);    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 2px solid var(--color-primary);  /* creates padding around scroll thumb */
        }
    }


    
    li{
        width: 263px;
        height: 284px;
        border-radius: 8px;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 10px 20px;
        background: #F5f5f5;
        -webkit-box-shadow: -1px 2px 12px -3px #000000; 
        box-shadow: -1px 2px 12px -1px #00000045;

        animation: myAnim 1s ease 0s 1 normal forwards;

        @keyframes myAnim {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
}


        .product-image{
            width: 219px;
            height: 166px;
            max-width: 100%;


            img{
                width: 219px;
                height: 166px;
                border-radius: 8px;
                object-fit: cover;

            }
        }


        .product-category{
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 0px;

            span{
                color: var(--grey-300);
            }

            h4{
                width: 80px;
                max-width: 100%;
                height: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--grey-300);
                color: var(--grey-0);
                border-radius: 4px;
            }
        }


        .product-description{
            width: 100%;
            height: 80px;
            padding-top: 5px;

            p{
                font-size: 12px;
                color: var(--color-primary);
            }
        }
        
        .product-buttons{
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: space-around;
            align-items: center;

            button{
                width: 100px;
                height: 24px;
                background-color: var(--color-primary);
                color: var(--grey-0);
                font-weight: bold;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
            }

        }
    }








`