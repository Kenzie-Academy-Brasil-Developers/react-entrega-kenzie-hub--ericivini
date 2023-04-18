import { StyledMain } from "./style"

export const Main = ({ children }) => {

    return (
        <StyledMain>
            <div>
                {children}
            </div>
        </StyledMain>
    )
}