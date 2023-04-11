import styled from "styled-components";

export const StyledRegisterContainer = styled.div`
  width: 100%;
  height: 85%;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  padding: 42px 22px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.375rem;
  color: var(--gray-0);
  h2 {
    font: var(--title-1);
  }
  >small {
    font: var(--headline);
    color: var(--gray-1);
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
`;
