import styled from "styled-components";

export const StyledTechList = styled.ul`
    width: 100%;
    height: 23rem;
    padding: 1rem 1.5rem;
    background: var(--gray-3);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${(props) => props.children.type === "h1" ? "center ": "flex-start"};
    gap: 1rem;
    overflow-y: auto;
    h1 {
        text-align: center;
        color: var(--gray-0);
        font: var(--title-1);
    }
    a {
        height: 3.0625rem;
        width: 100%;
        background-color: var(--gray-4);
        border-radius: 4px;
        padding: .75rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
            color: var(--gray-0);
            font-size: .8881rem;
            font-weight: 700;
        }
        span {
            color: var(--gray-2);
            font: var(--headline);
        }
        :hover {
            cursor: pointer;
            background-color: var(--gray-2);
            span {
                color: var(--gray-0);
            }
        }
    }
`