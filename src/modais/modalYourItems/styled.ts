import styled from "styled-components";

export const StyleModalYourItems = styled.div`
  .alertImage {
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 2;
    position: absolute;
    top: 0px;
    left: 100px;

    img {
      width: 200px;
      border-radius: 50%;
    }
  }

  .modal-container-your-items {
    width: 100%;
    height: 100%;
    max-width: 1140px;
    max-height: 700px;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;

    padding: 35px 20px 0 20px;
  }

  .title-modal {
    font-weight: 700;
    font-size: 20px;
    color: var(--color-primary);
  }

  .title-card {
    font-weight: 700;
    font-size: 20px;
    color: var(--color-primary);

    margin-top: 14px;
  }

  .btn-close {
    width: 27px;
    height: 27px;

    color: var(--grey-0);
    font-weight: 700;
    font-size: 20px;

    border: none;
    border-radius: 5px;
    background-color: var(--color-primary);

    cursor: pointer;
  }

  .modal-body {
    width: 97%;
    height: 580px;

    margin: 30px auto;
    padding: 7px 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow-y: scroll;

    border-radius: 10px;
    background-color: var(--color-primary);
  }

  .box-container-ul {
    width: 96%;
    /* max-width: 270px; */
    height: 170px;
    margin: 10px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    border-radius: 15px;
    border: 1px solid var(--color-primary);
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
    background-color: var(--grey-0);
  }

  .box-container-ul > ul {
    width: 100%;
    height: 170px;

    padding: 0 10px;

    display: flex;
    align-items: center;
    list-style: none;
    gap: 10px;

    border-radius: 10px;
    overflow-x: scroll;
  }

  .scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }

  .scrollbar::-webkit-scrollbar-track {
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);

    border-radius: 20px;
  }

  .scrollbar::-webkit-scrollbar-thumb {
    background: var(--grey-0);
    border: 2px solid var(--color-primary);

    border-radius: 20px;
  }

  .box-card {
    width: 100%;
    min-width: 230px;
    max-width: 220px;
    height: 90px;

    margin-left: 25px;

    border-radius: 10px;
    border: 1px solid var(--color-primary);
    background: var(--grey-0);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .header-card {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .header-card-view {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--color-primary);
  }

  .header-card > p {
    width: 151px;
    height: 18px;

    color: var(--grey-300);
    font-weight: 400;
    font-size: 16px;
  }

  .edit-icon {
    color: var(--color-primary);
  }

  .box-btn-card {
    margin-top: 10px;
  }

  .box-btn-card > button {
    width: 100px;
    height: 30px;

    color: var(--grey-0);
    font-size: 15px;
    font-weight: 700;

    border-radius: 5px;
    margin: 5px;
  }

  .btn-edit {
    border: var(--button-green);
    background-color: var(--button-green);
  }

  .btn-delete {
    border: var(--button-red);
    background-color: var(--button-red);
  }

  .btn-view {
    border: var(--color-primary);
    background-color: var(--color-primary);
  }

  @media (min-width: 1140px) {
    .alertImage {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      position: absolute;
      top: 0px;
      left: 420px;

      img {
        width: 350px;
        border-radius: 50%;
      }
    }

    .btn-close {
      width: 30px;
      height: 30px;
    }

    .modal-body {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 10px;

      padding: 5px;

      overflow-y: hidden;

      background-color: transparent;
    }

    .box-container-ul {
      width: 24%;
      height: 558px;

      margin: 10px 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }

    .box-container-ul > ul {
      height: 558px;

      display: flex;
      flex-direction: column;

      overflow-y: scroll;
      overflow-x: hidden;
    }

    .title-card {
      margin-bottom: 17px;
    }

    .box-card {
      min-width: 220px;
      min-height: 90px;

      margin-top: 17px;
      margin: 0 10px;
    }

    .box-btn-card > button {
      margin: 2px;
    }
  }
`;
