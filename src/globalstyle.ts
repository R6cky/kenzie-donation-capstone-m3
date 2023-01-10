import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');

    body {
        width: 100vw;
        height: 100vh;
    }

    *{
        padding: 0;
        margin: 0px;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        font-weight: normal;
        list-style: none;
    }

    button{
        border: none;
        cursor: pointer;
    }

    #root {
        width: 100%;
        height: 100%;
    }


    :root{
        --blue-100: #1E6CE0;
        --white-default: #FFFFFF;
        --color-primary:#5690E7;
        --color-secondary:#9858F0;
        --gray-600:#333333;
        --gray-500: #D9D9D9;
        --grey-300:#828282;
        --grey-100:#E0E0E0;
        --grey-0:#F5F5F5;
        --white: #FFFFFF;
        --grey-default:#484545;
        --Negative:#E60000;
        --Warning:#FFCD07;
        --Sucess:#168821;
        --information:#155BCB;
        --button-red: #E75656;
        --button-green: #66BB7E;

    }

`
