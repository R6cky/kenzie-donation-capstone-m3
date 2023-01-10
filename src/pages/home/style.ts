
import styled from "styled-components";

export const StyledFigureBanner = styled.figure`
   

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
        display: none;

        img{
            width: 100%;
            max-width: 100%;
            height: 170px;
           
        }


    }

    @media(min-width: 780px) {

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
            height: 200px;

        }


    }
    }


    @media(min-width: 1200px) {

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
        display: flex;


        img{
            width: 100%;
            max-width: 100%;
            height: 170px;

        }


    }
    }

`

// export const StyledSectionProductLists = styled.section`
//     display: flex;
//     gap: 55px;
//     flex-direction: column;

//     @media(min-width: 600px) {
//         background-color: rgba(86, 144, 231, 0.12);
//     }

//     @media(min-width: 1200px) {
//         background-color: rgba(86, 144, 231, 0.12);
//     }
// `






