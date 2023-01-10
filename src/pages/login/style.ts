
import styled from "styled-components";

export const LoginStyled = styled.main`
    @media screen and (min-width: 0px) {
        display: none;
    }

    @media screen and (min-width: 320px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 100vw;
        height: 100vh;

        .donation {
            width: 100%;
            max-width: 289px;
            margin-top: 17px;
        }

        .donationDesktop {
            display: none;
        }

        .donation img {
            width: 100%;
        }

        .boxLogin {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: 0 19px 0px 19px;
        }

        .login {
            width: 100%;
            background: #F5F5F5;
            box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.15);
            border-radius: 15px;
            padding: 17px 25px 25px 25px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .login h1 {
            font-weight: 700;
            font-size: 20px;
            color: #5690E7;
        }

        form {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding-top: 40px;
        }

        label {
            font-weight: 500;
            font-size: 15px;
            color: #5690E7;
            padding-bottom: 10px;
        }

        input {
            width: 100%;
            height: 50px;
            background: #FFFFFF;
            border: 1px solid #5690E7;
            border-radius: 8px;
            margin-bottom: 25px;
            padding-left: 14px;
            font-weight: 500;
            font-size: 15px;
            color: #828282;
            
        }

        input::placeholder {
            color: #E0E0E0;
        }

        button {
            height: 50px;
            background: #5690E7;
            border-radius: 8px;
            border-style: none;
            font-weight: 700;
            font-size: 20px;
            color: #FFFFFF;
            margin-top: 8px;
        }

        span{
            width: 190px;
            height: 40px;
            font-weight: 500;
            font-size: 15px;
            text-align: center;
            color: #5690E7;
            padding-top: 35px;
        }

        a {
            text-decoration: none;  
            color: #8B63EE;
            cursor: pointer;
            font-weight: 500;
            padding-left: 3px;
        }

        footer{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 65px;
        }

        .desktop {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .textFooter {
            background-color: #5690E7;
            border-top: 4px solid #D9D9D9;
            width: 100%;
        }

        .textFooter p {
            font-weight: 500;
            font-size: 11px;
            text-align: center;
            color: #FFFFFF;   
            padding: 25px
        }

        .box {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-bottom: 12px solid #5690E7;
        }

        .box img {
            margin-bottom: -77px;
        }

        .spanDesktop {
            display: none;
        }

        .textFooterDesktop {
            display: none;
        }
    }
    @media screen and (min-width: 391px) {
        .login {
            max-width: 500px;
        }
        .spanDesktop {
            display: none;
        }
    }

    @media screen and (min-width: 1200px) {
        .desktop {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
        }
        .donation {
            display: none;
        }
        
        .donationDesktop {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            width: 50%;
        }

        .donationDesktop img {
            width: 70%;
            max-width: 542px;
            min-width: 500px;
            margin-right: 44px;
        }

        .boxLogin {
            width: 50%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
        }

        .login {
            max-width: 468px;
            margin-left: 44px;
        }

        .span {
            display: none;
        }

        .spanDesktop {
            display: flex;
            width: 100%;
            text-align: center;
            margin-bottom: 20px;
            justify-content: center;
        }

        .box {
            display: none;
        }

        .boxLogin {
            padding: 0;
        }

        .footer {
            margin-top: 0;
        }

        a{
            padding-left: 3px;
        }

        .textFooter {
            display: none;
        }

        .textFooterDesktop {
            display: flex;
            justify-content: center;
            background-color: #5690E7;
            border-top: 4px solid #D9D9D9;
            width: 100%;
        }

        .textFooterDesktop p {
            font-weight: 500;
            font-size: 11px;
            text-align: center;
            color: #FFFFFF;   
            padding: 25px
        }
    }

    


`