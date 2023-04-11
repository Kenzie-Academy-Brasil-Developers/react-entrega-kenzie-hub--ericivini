import { Link } from "react-router-dom"
import { StyledRegisterPage } from "./style"
import { RegisterContainer } from "../../components/RegisterContainer"
import { ToastContainer } from "react-toastify"

export const RegisterPage = () => {

    return (
        <StyledRegisterPage>
            <div>
                <h1>Kenzie Hub</h1>
                <Link to={"/"}>Voltar</Link>
            </div>
            <RegisterContainer />
            <ToastContainer />
        </StyledRegisterPage>
    )
}