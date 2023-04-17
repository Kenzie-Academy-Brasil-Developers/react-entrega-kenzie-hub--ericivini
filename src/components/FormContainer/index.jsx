export const FormContainer = ({ children, callback, button, exclude, id}) => {
    return (
        <form onSubmit={callback} noValidate>
            {children}
            <div>
                <button className={exclude ? "submitButton" : "submit"} type="submit">{button}</button>
                {exclude && <button onClick={() => exclude(id)} className="deleteButton">Excluir</button>}
            </div>
        </form>
    )
}