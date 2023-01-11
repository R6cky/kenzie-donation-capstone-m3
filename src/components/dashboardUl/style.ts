
import styled from "styled-components";

export const StyledDashboardList = styled.div`
       
        padding-top: 30px;
        margin-top: 10px;


        .requests-title{

            width: 90%;
            max-width: 100%;
            height: 80px;
            margin: 0 auto;
            display: flex;
            border-radius: 8px;
            justify-content: space-between;
            align-items: center;
            margin-top: 30px;

            h3{
                width: 250px;
                height: 80px;
                padding: 10px;
                background: var(--grey-0    );
                color: var(--information);
                font-weight: bold;
                border: none;
                border-radius: 8px ;
                display: flex;
                justify-content: center;
                align-items: center;
                border: solid var(--information) 0.1px;
            }

        }


    ul{  
        width: 100%;
        height: 350px;
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        gap: 20px;
        padding: 20px 0;
        margin-bottom: 30px;

        ::-webkit-scrollbar {
            width: 8px;     
            height: 10px; 
            
        }

        ::-webkit-scrollbar-track {
            background: var(--grey-0);        /* color of the tracking area */
        }

        ::-webkit-scrollbar-thumb {
            background-color: var(--color-primary);    /* color of the scroll thumb */
            border-radius: 10px;       /* roundness of the scroll thumb */
            border: 2px solid var(--color-primary);  /* creates padding around scroll thumb */
        }

        
       
    }


    
    li{
        width: 300px;
        height: 320px;
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
                /* width: 80px;
                max-width: 100%; */
                font-size: 14px;
                font-weight: 500;
                padding: 10px;
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
            max-width: 100%;
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
                width: 105px;
                height: 24px;
                background-color: var(--color-primary);
                color: var(--grey-0);
                font-weight: 500;
                font-size: 12px;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
            }

        }
    }


        @media(min-width: 780px) {
            background-color: rgba(86, 144, 231, 0.12);
        }

        @media(min-width: 1200px) {
            background-color: rgba(86, 144, 231, 0.12);
        }



`