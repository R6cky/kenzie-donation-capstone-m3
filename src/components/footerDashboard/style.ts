import styled from "styled-components";


export const StyledFooterDashboard = styled.footer`

        width: 100%;
        height: 100%;



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

        .image-area-desktop{
            display: none;
            img{
                width: 100%;
            }
        }


        .social-network{

            width: 100%;
            height: 80px;
            
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

            img{
                display: none;
            }
        }




    @media(min-width: 780px){



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
            display: flex;
            flex-direction: column;
            img{
                width: 100%;
            }
        }

        .image-area-desktop{
            display: none;
            flex-direction: column;
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
            display: flex;
            justify-content: space-around;
            
            p{
                color: var(--grey-0);
                font-size:12px;
            }

            img{
                display: flex;
            }

        }

    }



    @media(min-width: 1200px){

        
    .area-info-top{
    width:100%;
    max-width: 100%;
    height: 205px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: var(--color-primary);
    display: none;

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
        display: none;
        flex-direction: column;
        img{
            width: 100%;
        }
    }

    .image-area-desktop{
        width: 100%;
        height: 900px;
        display: flex;
        flex-direction: column;
        justify-content: end;
        gap: 60px;
        padding-bottom: 30px;
        img{
            width: 100%;
            height: 340px;
            object-fit: fill;
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
        display: flex;
        justify-content: space-around;

        p{
            color: var(--grey-0);
            font-size:16px;
            color: solid;
        }

        img{
                display: flex;
            }
    }

    }

`