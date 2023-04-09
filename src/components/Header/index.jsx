import { StyledHeader } from "./style"

export const Header = ({state}) => {
    const {course_module, name} = state

    return (
        <StyledHeader>
            <div>
                <h2>Olá, {name}</h2>
                <span>{course_module}</span>
            </div>
        </StyledHeader>
    )
}