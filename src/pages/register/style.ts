
import styled from "styled-components";

export const RegisterStyled = styled.main`
    @media screen and (min-width: 0px) {
        display: none;
    }

    @media screen and (min-width: 320px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        height: 100vh;

        .donation {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 20px 19px;
            max-width: 500px;
        }

        .donationDesktop {
            display: none;
        }

        .donation img {
            width: 100%;
            max-width: 170px;
        }

        .back {
          font-weight: 700;
          font-size: 15px;
          color: #5690E7;
          cursor: pointer;
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
            margin-bottom: -20px;
        }

        .login h1 {
            font-weight: 700;
            font-size: 20px;
            color: #5690E7;
            margin-bottom: -40px;
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
            padding-top: 15px;
        }

        input {
            width: 100%;
            height: 50px;
            background: #FFFFFF;
            border: 1px solid #5690E7;
            border-radius: 8px;
            margin-bottom: 4px;
            padding-left: 14px;
            font-weight: 400;
            font-size: 13px;
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

        .span{
          font-weight: 500;
          font-size: 15px;
          color: #FFFFFF;
          padding-top: 33px;
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
            justify-content: flex-end;
            align-items: center;
            text-align: center;
            width: 100%;
            background-color: #5690E7;
        }

        .desktop {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .textFooter {
          display: flex;
          justify-content: center;
          width: 100%;
          height: 86px;
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

        .error {
            font-weight: 400;
            font-size: 12px;
            color: #e83f5b;
            text-align: start;

            padding: 0;
        }
    }
    @media screen and (min-width: 391px) {
        .login {
            max-width: 500px;
        }
        .spanDesktop {
            display: none;
        }

        input {
          font-size: 15px;
        }
    }

    @media screen and (min-width: 1200px) {
        justify-content: space-between;
        overflow-x: hidden;
      
      .desktop {
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            align-items: start;
            width: 100%;
        }
        .donation {
            display: none;
        }
        
        .donationDesktop {
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            width: 50%;
        }

        .donationDesktop img {
            width: 100%;
            max-width: 780px;
        }

        .boxLogin {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }

        .login {
            max-width: 468px;
            justify-content: center;
            margin-bottom: 0px;
            margin-top: 20px;
        }

        .span {
            display: none;
        }

        .spanDesktop {
            display: flex;
            width: 100%;
            text-align: center;
            margin-bottom: 10px;
            margin-top: 20px;
            justify-content: center;
            color: #5690E7;
        }

        .box {
            display: none;
        }

        .boxLogin {
            padding: 0 50px;
            align-items: flex-end;
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
            width: 100%;
        }

        .textFooterDesktop p {
            font-weight: 500;
            font-size: 11px;
            text-align: center;
            color: #FFFFFF;   
            padding: 4px
        }

        label {
            padding-top: 4px;
        }
    }

    


`