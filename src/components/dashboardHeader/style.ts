
import styled from "styled-components";



export const StyledDashboardHeader = styled.header`

    width: 100vw;
    height: 200px;
    
    

    .navbar{
        width: 90%;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50px;
        left: 20px;


        div{
            width: 100%;
            height: 50px;
            border: solid var(--color-primary) 0.1px;
            border-radius: 2px;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .buttons{
                font-size: 14px;
                font-weight: bold;
                width: 95px;
                height: 30px;
                border-radius: 2px;
                background: var(--color-primary);
                color: var(--grey-0);
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }


    .area-menu{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px 0 20px;
    }


    .category-list{
        width: 100%;
        height: 140px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0%;
    }


    .category-card{
        width: 62px;
        height: 62px;
        border-radius: 50%;
    }


`