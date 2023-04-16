import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { TechContext } from "../TechContext";
import { Navigate } from "react-router-dom";


export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const { deleteTech, createTech } = useContext(TechContext)
    const [user, setUser] = useState(null);
    const [newUser, setNewUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalInfo, setModalInfo] = useState({})
    const [modal, setModal] = useState(false);


    useEffect(() => {
        async function loadInfo() {
            try {
                const token = localStorage.getItem("@TOKEN");
                if (!token) {
                    return;
                }
                const response = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setUser(response.data);

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

    if(!loading) {
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
            modalInfo,
            setModalInfo,
            createTech,
            deleteTech,
        }}>
            {children}
        </UserContext.Provider>
    )
}