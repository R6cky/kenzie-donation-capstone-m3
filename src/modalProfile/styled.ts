import styled from "styled-components";

export const StyledModalWrapper = styled.div `
    position: fixed;
    inset:0;
    background-color: rgba(18, 18, 20, 0.5);
    height: 100vh;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .modalBox{
        width: 90%;
        max-width: 700px;
        background-color: #fff;
        padding: 22px;
        display: flex;
        flex-direction: column;
        max-height: 730px;
        border-radius: 10px;
    }

    .modalHeader{
        display: flex;
        align-items: center;
        justify-content: space-between;

        button{
            border: none;
            background-color: #5690E7;
            border-radius: 5px;
            cursor:pointer;

            display:flex;
            align-items: center;
            justify-content: center;

            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            color: #fff;
        }

        h2{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 25px;

            color: #5690E7;
        }
    }

    .modalBody{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .modalBody > form{
        margin-top: 36px;
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .modalBody > form > input{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;

        color: #5690E7;

        height: 45px;

        background: #FFFFFF;
        border: 1px solid #5690E7;
        border-radius: 8px;
    }
    
    .modalBody > form > label{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;

        color: #5690E7;
    }

    .footerButtons{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;
    }
    
    .footerButtons > button{
        background: #5690E7;
        border: none;
        border-radius: 6px;
        width: 45%;
        height: 45px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;

        color: #FFFFFF;
    }
`