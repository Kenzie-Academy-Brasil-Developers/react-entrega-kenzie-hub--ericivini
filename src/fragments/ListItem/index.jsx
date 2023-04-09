export const ListItem = ({name, status}) => {
    return (
        <li>
            <h3>{name}</h3>
            <span>{status}</span>
        </li>
    )
}