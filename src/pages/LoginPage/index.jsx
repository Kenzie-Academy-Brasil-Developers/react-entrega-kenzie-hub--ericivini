import { ToastContainer } from "react-toastify"
import { LoginContainer } from "../../components/LoginContainer"
import { StyledLoginPage } from "./style"

export const LoginPage = () => {
    return (
        <StyledLoginPage>
            <h1>Kenzie Hub</h1>
            <LoginContainer />
            <ToastContainer />
        </StyledLoginPage>
    )
}