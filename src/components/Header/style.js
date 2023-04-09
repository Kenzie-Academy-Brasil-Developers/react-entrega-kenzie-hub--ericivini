import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 7.375rem;
  border-top: 1px solid var(--gray-2);
  border-bottom: 1px solid var(--gray-2);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  div {
    width: 48.75rem;
    margin: 0 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    h2 {
      font: var(--title-1);
      color: var(--gray-0);
    }
    span {
      font: var(--headline);
      color: var(--gray-1);
    }
  }
`;
