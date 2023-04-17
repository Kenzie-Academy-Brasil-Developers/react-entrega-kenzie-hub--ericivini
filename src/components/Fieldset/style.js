import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  position: relative;
  border: 0;
  width: 100%;
  height: 38%;
  display: flex;
  padding-bottom: 1rem;
  flex-direction: column;
  gap: 1rem;
  >input {
    font: 400 1rem "Inter";
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    padding: 0px 16.2426px;
    gap: 10.15px;
    width: 100%;
    height: 48px;
    color: var(--gray-1);
    :focus {
      outline: none;
      background: #343b41;
      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;
      color: var(--gray-0);
    }
  }
  i {
    cursor: pointer;
    position: absolute;
    font-size: 0.75rem;
    right: 0.9375rem;
    bottom: 1.875rem;
    color: var(--gray-0);
  }
  >select {
    font: 400 1rem "Inter";
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    padding: 0px 1.0152rem;
    gap: 0.6344rem;
    width: 100%;
    height: 3rem;
    color: var(--gray-1);
    :hover {
        appearance: none;
    }
    option {
      padding: 0px 1.0152rem;
      width: 100%;
      height: 3rem;
    }
  }
  >small {
    height: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    color: var(--fail);
  }
`;
