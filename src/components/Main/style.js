import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  >div {
    width: 48.75rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
