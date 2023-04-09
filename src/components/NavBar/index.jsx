import { useNavigate } from "react-router-dom";
import { StyledNavBar } from "./style";

export const NavBar = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/")
    }
    
    return (
        <StyledNavBar>
            <div>
                <h1>Kenzie Hub</h1>
                <button onClick={logout}>Sair</button>
            </div>
        </StyledNavBar>
    )
}