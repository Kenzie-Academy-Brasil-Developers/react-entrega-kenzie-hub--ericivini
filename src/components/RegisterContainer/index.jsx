import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { FormRegisterSchema } from "./FormRegisterSchema";
import { Fieldset } from "../Fieldset";
import { Input } from "../../fragments/Input";
import { FormContainer } from "../FormContainer";
import { StyledRegisterContainer } from "./style";
import { Select } from "../../fragments/Select";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const RegisterContainer = () => {
    const { newUser, setNewUser, user, registerUser, navigate } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            navigate("/Home")
        }
        if (newUser) {
            registerUser(newUser)
        }
    }, [newUser])

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(FormRegisterSchema)
    });

    const submit = (formData) => {
        setNewUser(formData);
    }

    return (
        <StyledRegisterContainer>
            <h2>Crie sua conta</h2>
            <small>Rapido e gratis</small>
            <FormContainer button={"Cadastrar"} callback={handleSubmit(submit)}>
                <Fieldset
                    label={"Nome"}
                    name={"name"}
                    input={
                        <Input type={"text"}
                            placeholder={"Digite seu nome"}
                            register={register("name")}
                            id={"name"}
                        />
                    }
                    error={errors.name}
                />
                <Fieldset
                    label={"Email"}
                    name={"email"}
                    input={
                        <Input type={"text"}
                            placeholder={"Digite seu email"}
                            register={register("email")}
                            id={"email"}
                        />
                    }
                    error={errors.email}
                />
                <Fieldset
                    label={"Senha"}
                    name={"password"}
                    input={
                        <Input type={"password"}
                            placeholder={"Digite sua senha"}
                            register={register("password")}
                            id={"password"}
                        />
                    }
                    error={errors.password}
                />
                <Fieldset
                    label={"Confirmar Senha"}
                    name={"confirm"}
                    input={
                        <Input type={"password"}
                            placeholder={"Digite sua senha"}
                            register={register("confirm")}
                            id={"confirm"}
                        />
                    }
                    error={errors.confirm}
                />
                <Fieldset
                    label={"Bio"}
                    name={"bio"}
                    input={
                        <Input type={"text"}
                            placeholder={"Digite sua Bio"}
                            register={register("bio")}
                            id={"bio"}
                        />
                    }
                    error={errors.bio}
                />
                <Fieldset
                    label={"Contato"}
                    name={"contact"}
                    input={
                        <Input type={"text"}
                            placeholder={"Opção de contato"}
                            register={register("contact")}
                            id={"contact"}
                        />
                    }
                    error={errors.contact}
                />
                <Fieldset
                    label={"Selecione o módulo"}
                    name={"course_module"}
                    input={
                        <Select id={"course_module"} register={register("course_module")} >
                            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
                            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
                            <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
                        </Select>
                    }
                    error={errors.course_module}
                />
            </FormContainer>
        </StyledRegisterContainer>
    )
}