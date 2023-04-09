export const FormContainer = ({ children, callback, button }) => {
    return (
        <form onSubmit={callback} noValidate>
            {children}
            <button type="submit">{button}</button>
        </form>
    )
}