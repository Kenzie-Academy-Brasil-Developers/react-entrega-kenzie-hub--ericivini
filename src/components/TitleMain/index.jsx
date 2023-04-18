import { useContext } from "react"
import { StyledTitleMain } from "./style"
import { UserContext } from "../../contexts/UserContext/UserContext"

export const TitleMain = () => {
    const {modal, setModal, techs} = useContext(UserContext);
    
    const addModal = () => {
        setModal(!modal);
    }
    return (
        <StyledTitleMain>
            <h2>Tecnologias</h2>
            <button disabled={techs.length > 5 && true} onClick={addModal}>+</button>
        </StyledTitleMain>
    )
}