import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { TechContext } from "../TechContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const { deleteTech, createTech } = useContext(TechContext)
    const [user, setUser] = useState(null);
    const [newUser, setNewUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [techs, setTechs] = useState([])
    const [modal, setModal] = useState(false);
    const [edit, setEdit] = useState(true);
    const navigate = useNavigate();
    const token = localStorage.getItem("@TOKEN");

    const logout = () => {
        localStorage.clear();
        setUser(null)
        navigate("/")
    }

    const loginUser = async (data) => {
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
            toast.error("Ops, algo deu errado", { theme: "dark" });
            return error.response
        }
    }

    const registerUser = async (formData) => {
        try {
            const response = await api.post("/users", formData)
            toast.success("Usuário criado com sucesso", {
                theme: "dark"
            });
            setNewUser(null)
            setTimeout(() => navigate("/"), 5000)
            return response
        } catch (error) {
            toast.error(error.response.data.message, {
                theme: "dark"
            });
            return error.response
        }
    }

    const loadTechs = async () => {
        try {
            const response = await api.get("/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechs(response.data.techs)
            return;
        } catch (error) {
            return error
        }
    }

    useEffect(() => {
        async function loadInfo() {
            try {
                if (!token) {
                    return;
                }
                const response = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setUser(response.data);
                setTechs(response.data.techs);

                return response

            } catch (error) {
                localStorage.clear()
                return error
            } finally {
                setLoading(!loading);
            }
        }
        loadInfo()
    }, []);

    if (!loading) {
        return <div className="loading">Carregando...</div>
    }


    return (
        <UserContext.Provider value={{
            user,
            setUser,
            newUser,
            setNewUser,
            loading,
            setLoading,
            modal,
            setModal,
            createTech,
            deleteTech,
            edit,
            techs,
            setTechs,
            setEdit,
            logout,
            loginUser,
            registerUser,
            loadTechs
        }}>
            {children}
        </UserContext.Provider>
    )
}