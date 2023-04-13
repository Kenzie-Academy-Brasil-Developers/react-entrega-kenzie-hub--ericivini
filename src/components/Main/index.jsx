import { Modal } from "../Modal"
import { StyledMain } from "./style"

export const Main = ({ children, modalState }) => {

    return (
        <StyledMain>
            <div>
                {children}
            </div>
        </StyledMain>
    )
}