import { StyledNavBar } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const NavBar = () => {
    const { logout } = useContext(UserContext)
    
    return (
        <StyledNavBar>
            <div>
                <h1>Kenzie Hub</h1>
                <button onClick={logout}>Sair</button>
            </div>
        </StyledNavBar>
    )
}