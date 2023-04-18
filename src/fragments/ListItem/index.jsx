import { Link } from "react-router-dom"

export const ListItem = ({ name, status, id, index }) => {

    return (
        <>
            {index > 5 ?
                null
                :
                (<Link to={`${id}`}>
                    <h3>{name}</h3>
                    <span>{status}</span>
                </Link>)
            }
        </>
    )
}