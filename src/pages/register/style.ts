import styled from "styled-components";

export const DivPrimari = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 2vw;
  @media (max-width: 600px) {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // width: 100vw;
    // height: 100vh;
    // padding: 2vw;
  }
`;

export const SectionSecundary = styled.section`
  display: flex;
  width: 100vw;
  height: 95vh;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  @media (max-width: 600px) {
    display: flex;
    width: 36rem;
    height: 68rem;
    align-items: center;
    justify-content: center;
  }
`;
export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 38%;
  height: 100%;
  gap: 0.5vw;
  padding: 3vw;
  box-shadow: 0px 4px 4px 4px rgb(0 0 0 / 22%);
  border-radius: 15px;
  /* background-color: antiquewhite; */
  background-color: #f5f5f5;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 100%;
    padding: 3vw;
    box-shadow: 0px 4px 4px 4px rgb(0 0 0 / 22%);
    border-radius: 15px;
    background-color: #f5f5f5;
    background: linear-gradient(to bottom, #f5f5f5f5, #5690e7), #f5f5f5f5;
  }
`;
export const TitleForm = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: var(--color-primary);
  @media (max-width: 600px) {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: var(--color-primary);
  }
`;
export const LabelForAll = styled.label`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.9vw;
  line-height: 1vw;
  color: var(--color-primary);
  @media (max-width: 600px) {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 24px;
    color: var(--color-primary);
  }
`;
export const InputForAll = styled.input`
  width: 29vw;
  height: 3vw;
  background: #ffffff;
  border: 1px solid var(--color-primary);
  border-radius: 1vw;
  @media (max-width: 600px) {
    width: 22rem;
    height: 3rem;
    background: #ffffff;
    border: 1px solid var(--color-primary);
    border-radius: 4vw;
  }
`;
export const ErrorP = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.8vw;
  font-weight: 700;
  color: var(--Negative);
  @media (max-width: 600px) {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: var(--Negative);
  }
`;
export const ButtonCad = styled.button`
  width: 29vw;
  height: 3vw;
  background-color: var(--color-primary);
  font-family: "Inter", sans-serif;
  font-size: 1.2vw;
  font-weight: 700;
  line-height: 1.2vw;
  text-align: center;
  color: #ffffff;
  border: none;
  border-radius: 1vw;
  @media (max-width: 600px) {
    width: 22rem;
    height: 3rem;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 4vw;
    font-family: "Inter", sans-serif;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.2vw;
    text-align: center;
    color: #ffffff;
    border: none;
    margin-top: 1rem;
    border: solid 1px;
  }
`;
export const PictureRe = styled.img`
  width: 44vw;
  height: 50vw;
  @media (max-width: 600px) {
  }
`;
export const FooterText = styled.footer`
  font-family: "Inter", sans-serif;
  background-color: var(--color-primary);
  width: 100vw;
  text-align: center;
  font-weight: 500;
  color: var(--grey-0);
  font-size: 1vw;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const DivTest = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;
export const SpanLogo = styled.span`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    gap: 1rem;
  }
`;
export const BtnBack = styled.button`
  width: 4rem;
  height: 2rem;
  margin: 2rem 0rem 0rem 0rem;
  border: none;
  font-family: "Inter", sans-serif;
  color: var(--color-primary);
  font-weight: 500;
  font-size: 15px;
`;
