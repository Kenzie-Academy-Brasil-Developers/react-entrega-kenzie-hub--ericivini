import styled from "styled-components";

export const StyledLoginContainer = styled.div`
  width: 100%;
  height: 90%;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  padding: 42px 22px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.375rem;
  color: var(--gray-0);
  h3 {
    font: var(--title-1);
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    font: var(--headline);
    button {
      background-color: var(--color-primary);
      outline: none;
      height: 3rem;
      font: 500 1rem "Inter";
      border: 1.2182px solid #ff577f;
      border-radius: 4.06066px;
      :hover {
        background-color: var(--color-primary-focus);
      }
    }
  }
  div {
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    small {
      color: var(--gray-1);
      font-size: 0.75rem;
    }
    a {
      width: 100%;
      height: 3rem;
      background-color: var(--gray-1);
      background: #868e96;
      border: 1.2182px solid #868e96;
      border-radius: 4px;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font: 500 1rem "Inter";
      :hover {
        background: var(--gray-2);
        border: 1.2182px solid var(--gray-2);
        border-radius: 4px;
      }
    }
  }
`;
