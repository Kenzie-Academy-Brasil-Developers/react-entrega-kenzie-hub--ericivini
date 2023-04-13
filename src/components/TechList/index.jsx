import { useContext } from "react"
import { ListItem } from "../../fragments/ListItem"
import { StyledTechList } from "./style"
import { UserContext } from "../../contexts/UserContext/UserContext"

export const TechList = () => {
    const { user } = useContext(UserContext);

    return (
        <StyledTechList>
            {user.techs ?
                user.techs.map(element => <ListItem key={element.id} name={element.title} status={element.status} />)
                : 
                <h1>Você náo possui tecnologias registradas</h1>
            }
        </StyledTechList>
    )
}