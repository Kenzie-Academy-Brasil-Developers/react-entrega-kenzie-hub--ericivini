import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  .modalContainer {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 23.0625rem;
    height: 21.375rem;
    left: 30rem;
    top: 11.8125rem;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    background-color: var(--gray-3);
    .modalTitle {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      background-color: var(--gray-2);
      > h3 {
        font: var(--title-3);
        color: var(--gray-0);
      }
      > button {
        text-align: center;
        font-weight: 700;
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        :hover {
          background-color: var(--gray-1);
        }
      }
    }
    form {
      margin: 1rem;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      label {
        font: var(--headline);
        color: var(--gray-0);
      }
      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 31%;
        .submit {
          font: 500 1rem "Inter";
          background-color: var(--color-primary);
          height: 80%;
          width: 100%;
          border-radius: 4px;
          :hover {
            background-color: var(--color-primary-focus);
          }
        }
        .submitButton {
          font: 500 1rem "Inter";
          background-color: var(--color-primary);
          width: 70%;
          height: 80%;
          border-radius: 4px;
          :hover {
            background-color: var(--color-primary-focus);
          }
        }
        .deleteButton {
          font: 500 1rem "Inter";
          background-color: var(--gray-1);
          width: 25%;
          height: 80%;
          border-radius: 4px;
          :hover {
            background-color: var(--gray-2);
          }
        }
      }
    }
  }
`;
