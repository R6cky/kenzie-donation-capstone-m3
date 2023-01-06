
import styled from "styled-components";

export const StyledDashboardList = styled.ul`

    width: 100%;
    height: 350px;
    border: solid red;
    display: flex;
    gap: 20px;
    overflow-x: scroll;
    padding: 20px;
    margin-bottom: 20px;


    
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


        .product-image{
            width: 219px;
            height: 166px;
            max-width: 100%;
            

            img{
                width: 219px;
                height: 166px;
                border-radius: 8px;
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
                width: 93px;
                height: 22px;
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