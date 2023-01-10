
import styled from "styled-components";

export const StyledDashboard = styled.div`


    .image-after-header{
        width: 100%;
        max-width: 100%;
        height: 200px;

        img{
            width: 100%;
            max-width: 100%;
            height: 170px;
        }
    }


    .menu-large{
        display: none;
    }


    .image-after-header-large{
        width: 100%;
        max-width: 100%;
        height: 200px;
        padding-top: 20px;
        display: none;

        img{
            width: 100%;
            max-width: 100%;
            height: 170px;
            display: none;

        }


    }




    @media(min-width: 780px){

        .image-after-header-large{
        width: 100%;
        max-width: 100%;
        height: 200px;
        padding-top: 20px;
        display: none;
        
        img{
            width: 100%;
            max-width: 100%;
            height: 170px;
        }
    }
    }

    .menu-large{
        display: none;
    }
    


        @media(min-width: 1200px){


            .image-after-header{
                width: 100%;
                max-width: 100%;
                height: 200px;
                padding-top: 20px;
                display: none;

                img{
                    width: 100%;
                    max-width: 100%;
                    height: 170px;
                }

            }

            

        .image-after-header-large{
            width: 100%;
            max-width: 100%;
            height: 200px;
            padding-top: 20px;
            display: flex;

            img{
                width: 100%;
                max-width: 100%;
                height: 200px;
                display: flex;

            }

        }

        .menu-large{
            width: 90%;
            max-width: 100%;
            height: 80px;
            margin: 0 auto;
            border:  solid var(--color-primary) 0.1px;
            display: flex;
            border-radius: 8px;
            justify-content: space-between;
            align-items: center;
            margin-top: 30px;
            
            h3{
                width: 250px;
                height: 80px;
                padding: 10px;
                background: var(--information);
                color: var(--grey-0);
                font-weight: bold;
                border: none;
                border-radius: 8px 0px 0px 8px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            

            .filter-menu-container{
                display: flex;
                align-items: center;
                width: 800px;
                max-width: 100%;
                display: flex;
                justify-content: space-between;
                padding: 5px;

                .filter-menu-title{
                   color: var(--information);
                   font-weight: bold;
                   font-size: 18px;
                }

            }

            .list-filter-menu{
                width: 600px;
                max-width: 100%;
                display: flex;
                justify-content: space-around;


                li{
                    width: 110px;
                    height: 30px;
                    padding: 5px;
                    border-radius: 8px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: var(--color-primary);
                    color: var(--grey-0);
                    font-weight: bold;
                    cursor: pointer;
                }
            }


        }
    }
        
    `