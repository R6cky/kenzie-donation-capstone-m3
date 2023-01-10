
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
    }
        
    `