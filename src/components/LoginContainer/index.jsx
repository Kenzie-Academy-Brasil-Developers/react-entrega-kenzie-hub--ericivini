import { Link, useNavigate } from "react-router-dom"
import { StyledLoginContainer } from "./style"
import { set, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { formLoginSchema } from "./formLoginSchema";
import { Input } from "../../fragments/Input";
import { FormContainer } from "../FormContainer";
import { Fieldset } from "../Fieldset";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const LoginContainer = () => {
    const [user, setUser] = useState({
        email: "",
    })
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        async function loginUser(data) {
            try {
                const response = await api.post("/sessions/", data)
                    .then(res => {
                        localStorage.setItem("@TOKEN", res.data.token);
                        localStorage.setItem("@USERID", res.data.user.id);
                    });
                toast.success("Logado", { theme: "dark" });
                setTimeout(() => navigate("/Home"), 5000)
                return response
            } catch (error) {
                console.log(error)
                toast.error("Ops, algo deu errado", { theme: "dark" });
                return error.response
            }
        }
        if (loading) {
            loginUser(user);
        }
    }, [loading])

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formLoginSchema)
    })

    const submit = (formData) => {
        setUser(formData);
        setLoading(!loading)
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