import { useContext } from "react"
import { StyledTitleMain } from "./style"
import { UserContext } from "../../contexts/UserContext/UserContext"

export const TitleMain = () => {
    const {modal, setModal, modalInfo, setModalInfo} = useContext(UserContext)

    const addModal = () => {
        setModal(!modal);
        setModalInfo({
            text: "Cadastrar Tecnologia"
        })
    }
    return (
        <StyledTitleMain>
            <h2>Tecnologias</h2>
            <button onClick={addModal}>+</button>
        </StyledTitleMain>
    )
}