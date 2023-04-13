import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { TechContext, TechProvider } from "../TechContext";


export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const { deleteTech, createTech } = useContext(TechContext)
    const [user, setUser] = useState({
        email: "",
    });
    const [newUser, setNewUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [modalInfo, setModalInfo] = useState({})
    const [modal, setModal] = useState(false);
    const token = localStorage.getItem("@TOKEN");
    if (token) {
        useEffect(() => {
            async function loadInfo() {
                try {
                    const response = await api.get(`/profile`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }).then(res => setUser(res.data));
                    return response
                } catch (error) {
                    return error
                }
            }
            loadInfo();
        }, [user])
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
            <TechProvider>
                {children}
            </TechProvider>
        </UserContext.Provider>
    )
}