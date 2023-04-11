import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  width: 95%;
  height: 100%;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  color: var(--gray-0);
  > div:first-child {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    h1 {
      color: var(--color-primary);
    }
    a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 1rem;
      width: 4.2181rem;
      height: 2.5069rem;
      background: #212529;
      border-radius: 4px;
      color: var(--gray-0);
      font: var(--headlineBold);
      :hover {
        background-color: var(--gray-2);
      }
    }
  }
  @media (min-width: 768px) {
    width: 23.0625rem;
  }
`;
