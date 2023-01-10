import styled from "styled-components";

export const StyledDonationsList = styled.ul`
    padding: 20px 19px;
    display: flex;
    gap: 24px;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        width: 10px; 
}

    ::-webkit-scrollbar-track {
        border: 1px solid var(--color-primary);
        border-radius: 8px;
        background-color: transparent; 
}

::-webkit-scrollbar-thumb {
    
    background-color: var(--blue-100);
    border: 1px solid var(--color-primary);
    border-radius: 8px;
}

`