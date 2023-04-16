import { useNavigate } from "react-router-dom";
import { StyledNavBar } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const NavBar = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext)

    const logout = () => {
        localStorage.clear();
        setUser(null)
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