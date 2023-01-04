import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');

    *{
        margin: 0px;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        font-weight: normal;
    }

    button{
        cursor: pointer;
    }


    :root{

        --color-primary:#F9CF6E;
        --color-secondary:#5680A7;
        --color-third:#75B487;
        --color-green-hover:#A8C9B1;
        --color-red:#C36161;
        --color-red-hover:#DAA9A9;
        --gray-600:#333333;
        --grey-300:#828282;
        --grey-100:#E0E0E0;
        --grey-0:#F5F5F5;
        --grey-default:#484545;

    }




`
