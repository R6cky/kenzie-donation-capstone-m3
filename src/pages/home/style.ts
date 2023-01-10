
import styled from "styled-components";

export const StyledFigureBanner = styled.figure`
    width: 100%;
    margin-top: 59px;
    display: none;

    img {
        width: 100%
    }

    @media(min-width: 600px) {
        display: block;
    }

`

export const StyledSectionProductLists = styled.section`
    margin-top: 30px;
    display: flex;
    gap: 55px;
    flex-direction: column;

    @media(min-width: 600px) {
        background-color: rgba(86, 144, 231, 0.12);
    }
`

export const StyledDivDonations = styled.div`
    
    display: flex;
    flex-direction: column;
    
    h2 {
        padding: 0 0 10px 19px;
        font-weight: 500;
        font-size: 20px;

        color: var(--color-primary);
        border-bottom: 4px solid var(--gray-500);

        strong {
            font-weight: 700;
        }
    }

    @media(min-width: 600px) {
        h2 {
            display: none;
        }
    }
`
export const StyledSectionDonationsFilter = styled.section`
    width: 80%;
    height: 79px;
    display: none;
    margin: 0 auto;
    background-color: var(--white-default);
    border: 1px solid var(--blue-100);
    border-radius: 10px 0px 0px 10px;

    h3 {
        width: 30%;
        background-color: var(--blue-100);
        border-radius: 10px 0px 0px 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        font-weight: 700;
        font-size: 25px;
        line-height: 42px;
        color: var(--white-default);

    }

    div {
        width: 70%;
        display: flex;
        align-items: center;
        padding: 0 5% 0 10%;
        gap: 20px;

        ul {
            max-width: 100%;
            width: 570px;
            border: 1px solid red;
            overflow: scroll;
            display: flex;
            gap: 15px;

            li {
                padding: 0 25px;
                height: 30px;

                display: flex;
                align-items: center;

                background-color: var(--color-primary);
                border-radius: 4px;

                font-weight: 700;
                font-size: 12px;
                color: var(--white-default);
            }
        }
    }

    @media(min-width: 600px) {
        display: flex;
    }
`

export const StyledDivRequests = styled.div`
    
    display: flex;
    flex-direction: column;
    
    h2 {
        padding: 0 0 10px 19px;
        font-weight: 500;
        font-size: 20px;

        color: var(--color-primary);
        border-bottom: 4px solid var(--gray-500);

        strong {
            font-weight: 700;
        }
    }

    @media(min-width: 600px) {
        h2 {
            display: none;
        }
    }
`

export const StyledSectionAboutUs = styled.section`
    display: flex;
    flex-direction: column;
    gap: 19px;
    margin-top: 33px;
    padding: 30px 0;
    background-color: var(--color-primary);
    font-weight: 400;
    font-size: 12px;
    color: var(--white-default);

    h2 {
        display: flex;
        align-items: center;
        padding: 0 19px;
        height: 37px;
        background-color: var(--blue-100);
        font-weight: 700;
        font-size: 15px;

        color: var(--white-default);
    }

    p {
        display: flex;
        padding: 0 19px;
    }

    
`

export const StyledFigureCampaign = styled.figure`
    display: flex;
    width: 272px;
    border: 15px solid var(--color-primary);
    position: absolute;
    z-index: 0;
    right: 0;
    bottom: 15px;
    img {
        width: 100%;
    }
`

export const StyledFigureRegister = styled.figure`
    width: 100%;
    margin-top: 33px;
    img {
        width: 100%;
    }
`

export const StyledFooter = styled.footer`
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);

    p {
        font-size: 11px;
        font-weight: 500;
        color: var(--white-default);
    }
`


