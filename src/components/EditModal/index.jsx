import { Navigate, useNavigate, useParams } from "react-router-dom"
import { StyledModal } from "../Modal/style";
import { FormContainer } from "../FormContainer";
import { Fieldset } from "../Fieldset";
import { Select } from "../../fragments/Select";
import { Input } from "../../fragments/Input";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { TechContext } from "../../contexts/TechContext";

export const EditModal = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { id } = useParams();
    const { user, setUser } = useContext(UserContext);
    const { deleteTech, changeUser } = useContext(TechContext)
    const tech = user.techs.find(element => element.id === id);

    const submit = (formData) => {
        changeUser(formData)
        navigate("/Home")
    }

    const exclude = () => {
        deleteTech();
        const newTech = user.techs.filter(element => element.id !== id);
        setUser({ ...user, techs: newTech })
        navigate("/Home")
    }

    const closeModal = () => {
        navigate("/Home")
    };

    return (
        <StyledModal>
            <div className="modalContainer">
                <div className="modalTitle">
                    <h3>Tecnologia Detalhes</h3>
                    <button onClick={closeModal}>X</button>
                </div>
                <FormContainer className={"formContainer"} callback={handleSubmit(submit)} button={"Salvar Alterações"} exclude={exclude}>
                    <Fieldset name={"title"} label={"Nome"}
                        input={<Input id={"title"} type={"text"} value={tech.title} placeholder={tech.title} register={register("title")} />} error={errors.title} />
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