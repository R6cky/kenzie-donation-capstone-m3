import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');

    *{
        margin: 0px;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        font-weight: normal;
        list-style: none;
    }

    button{
        cursor: pointer;
    }


    :root{

        --color-primary:#5690E7;
        --color-secondary:#9858F0;
        --gray-600:#333333;
        --grey-300:#828282;
        --grey-100:#E0E0E0;
        --grey-0:#F5F5F5;
        --grey-default:#484545;
        --Negative:#E60000;
        --Warning:#FFCD07;
        --Sucess:#168821;
        --information:#155BCB;

    }




`
