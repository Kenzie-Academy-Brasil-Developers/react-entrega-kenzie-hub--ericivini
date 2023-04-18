import { useContext, useEffect } from "react"
import { ListItem } from "../../fragments/ListItem"
import { StyledTechList } from "./style"
import { UserContext } from "../../contexts/UserContext/UserContext"
import { api } from "../../services/api"

export const TechList = () => {
    const { techs, setTechs} = useContext(UserContext);
    
    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        async function loadTechs() {
            try {
                const response = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setTechs(response.data.techs)
                return;
            } catch (error) {
                return error
            }
        }
        loadTechs()
    }, [techs]);
    
    return (
        <StyledTechList>
            {techs.length !== 0 ?
                techs.map(element => <ListItem key={element.id} id={element.id} name={element.title} status={element.status} />)
                : 
                <h1>Você náo possui tecnologias registradas</h1>
            }
        </StyledTechList>
    )
}