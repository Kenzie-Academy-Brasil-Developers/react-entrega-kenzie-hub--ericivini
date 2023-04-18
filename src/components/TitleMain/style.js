import styled from "styled-components";

export const StyledTitleMain = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--gray-0);
  h2 {
    font-size: 1rem;
    font-weight: 600;
  }
  >button {
    width: 2.0306rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--gray-3);
    border-radius: 4px;
    font-size: 1.25rem;
    :hover {
      background-color: var(--gray-2);
    }
    :disabled {
      background-color: var(--gray-4);
      cursor: default;
    }
  }
`;
