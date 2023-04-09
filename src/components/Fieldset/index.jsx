import { StyledFieldset } from "./style"

export const Fieldset = ({ label, name, input, error }) => {
    return (
        <StyledFieldset>
            <label htmlFor={name} >{label}</label>
            {input}
            {error ? <small>{error.message}</small> : null}
        </StyledFieldset>
    )
}