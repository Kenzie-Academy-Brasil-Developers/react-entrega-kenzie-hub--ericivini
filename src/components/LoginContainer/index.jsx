import { Link, useNavigate } from "react-router-dom"
import { StyledLoginContainer } from "./style"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { formLoginSchema } from "./formLoginSchema";
import { Input } from "../../fragments/Input";
import { FormContainer } from "../FormContainer";
import { Fieldset } from "../Fieldset";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const LoginContainer = () => {

    const {user, setUser, loginUser} = useContext(UserContext);

    useEffect(() => {
        if (user) {
            loginUser(user);
        }
    }, [user])

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formLoginSchema)
    })

    const submit = (formData) => {
        setUser(formData);
    }
    return (
        <StyledLoginContainer>
            <h2>Login</h2>
            <FormContainer button={"Enviar"} callback={handleSubmit(submit)}>
                <Fieldset
                    label={"Email"}
                    name={"email"}
                    input={<Input type={"email"} placeholder={"Digite seu email"} register={register("email")} />}
                    error={errors.email}
                />
                <Fieldset
                    label={"Senha"}
                    name={"password"}
                    input={<Input type={"password"} placeholder={"Digite sua senha"} register={register("password")} />}
                    error={errors.password}
                />
            </FormContainer>
            <div>
                <small>Ainda não possui uma conta?</small>
                <Link to={"/Register"}>Cadastre-se</Link>
            </div>

        </StyledLoginContainer >
    )
}