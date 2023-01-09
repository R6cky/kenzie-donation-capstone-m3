import styled from "styled-components";


export const StyledFooterDashboard = styled.footer`

    width: 100%;
    height: 700px;
    border: solid;



    .area-info-top{
    width:100%;
    max-width: 100%;
    height: 205px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: var(--color-primary);

        h3{
            padding: 10px;
            background: var(--information);
            color: var(--grey-0);
            font-size: 16px;
            font-weight: bold;
        }

            
        p{
            width: 100%;
            max-width: 100%;
            font-size: 12px;
            color: var(--grey-0);
            padding: 10px;

        }
    }

    .image-area{
        
        img{
            width: 100%;
        }
    }

    .area-info-bottom{
        width: 100%;
        height: 100px;
        background: var(--color-primary);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        
        p{
            color: var(--grey-0);
            font-size:12px;
        }
    }


`