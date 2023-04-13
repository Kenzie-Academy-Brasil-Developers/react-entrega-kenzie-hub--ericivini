import styled from "styled-components";

export const StyledNavBar = styled.nav`
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 48.75rem;
    margin: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: var(--color-primary);
    }
    button {
      font: var(--headlineBold);
      color: var(--gray-0);
      text-align: center;
      width: 3.4681rem;
      height: 2rem;
      background-color: var(--gray-3);
      border-radius: 4px;
      :hover {
          background-color: var(--gray-2);
      }
    }
  }
`;
