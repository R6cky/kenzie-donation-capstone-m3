import styled from "styled-components";

export const StyledSectionCard = styled.section`
    width: 263px;
    padding: 17px 22px;
    display: flex;
    gap: 15px;
    flex-direction: column;
    background-color: var(--grey-0);
    box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
`

export const StyledFigureCard = styled.figure`
    display: flex;
    width: 100%;

    img {
        width: 100%;
    }
`

export const StyledDivCardInfo = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        max-width: 49px;
        width: 40%;
        height: 16px;

        background-color: var(--grey-300);
        border-radius: 2px;

        font-weight: 400;
        font-size: 9px;
        color: var(--white-default);
    }
`

export const StyledDivDescription = styled.div`
    width: 60%;
    display: flex;
    gap: 5px;
    flex-direction: column;

    h3 {
        font-weight: 700;
        font-size: 10px;

        color: var(--grey-300);
    }

    span {
        font-weight: 500;
        font-size: 10px;

        color: var(--color-primary);
    }
`

export const StyledDivCardButtons = styled.div`
    display: flex;
    gap: 33px;
    justify-content: space-between;

    button {
        width: 93px;
        height: 22px;

        background-color: var(--color-primary);
        border-radius: 5px;

        font-weight: 500;
        font-size: 10px;

        color: var(--white-default);
    }
`