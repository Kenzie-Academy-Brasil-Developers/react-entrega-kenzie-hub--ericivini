import { useContext, useEffect } from "react"
import { ListItem } from "../../fragments/ListItem"
import { StyledTechList } from "./style"
import { UserContext } from "../../contexts/UserContext/UserContext"
import { api } from "../../services/api"
import { toast } from "react-toastify"

export const TechList = () => {
    const { techs, loadTechs } = useContext(UserContext);

    useEffect(() => {
        loadTechs();
    }, [techs]);
    

    return (
        <StyledTechList>
            {techs.length !== 0 ?
                techs.map((element, index) => <ListItem key={element.id} index={index} id={element.id} name={element.title} status={element.status} />)
                :
                <h1>Você náo possui tecnologias registradas</h1>
            }
        </StyledTechList>
    )
}