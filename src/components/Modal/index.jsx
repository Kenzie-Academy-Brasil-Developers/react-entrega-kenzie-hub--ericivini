import { useContext, useEffect } from "react"
import { StyledModal } from "./style"
import { UserContext } from "../../contexts/UserContext/UserContext"
import { FormContainer } from "../FormContainer"
import { Fieldset } from "../Fieldset"
import { Input } from "../../fragments/Input"
import { useForm } from "react-hook-form"
import { Select } from "../../fragments/Select"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormModalSchema } from "./FormModalSchema"
import { TechContext } from "../../contexts/TechContext"

export const Modal = () => {

    const { modal, setModal} = useContext(UserContext);
    const { createTech } = useContext(TechContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(FormModalSchema)
    })

    const closeModal = () => {
        setModal(!modal);
    };

    const submit = (formData) => {
        createTech(formData)
        setModal(!modal);
    }
    return (
        <StyledModal>
            <div className="modalContainer">
                <div className="modalTitle">
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={closeModal}>X</button>
                </div>
                <FormContainer className={"formContainer"} callback={handleSubmit(submit)} button={"Cadastrar Tecnologia"}>
                    <Fieldset name={"title"} label={"Nome"}
                        input={<Input id={"title"} type={"text"} placeholder={"Digite sua tecnologia"} register={register("title")} />} error={errors.title} />
                    <Fieldset name={"status"} label={"Selecionar status"} error={errors.status}
                        input={<Select id={"status"} register={register("status")} >
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </Select>}
                    />
                </FormContainer>
            </div>
        </StyledModal>
    )
}