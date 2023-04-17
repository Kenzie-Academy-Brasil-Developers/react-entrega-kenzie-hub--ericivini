import { createContext, useContext } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { UserContext } from "../UserContext/UserContext";
import { useParams } from "react-router-dom";


export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const token = localStorage.getItem("@TOKEN")
    const { user, setUser } = useContext(UserContext)
    const { id } = useParams()

    const createTech = async (data) => {
        try {
            const response = await api.post("/users/techs", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success("Tecnologia adicionada a lista", {
                theme: "dark"
            });
            const newList = [...user.techs, response.data];
            setUser({ ...user, techs: newList })
            return response.data

        } catch (error) {
            toast.error(error.message);
            return error
        }
    }

    const deleteTech = async () => {
        try {
            const response = await api.delete(`/users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.warn("Tecnologia removida da lista", {
                theme: "dark"
            });
            return response.data

        } catch (error) {
            toast.error(error.message)
            return error
        }
    }

    const changeUser = async (data) => {
        try {
            const response = await api.put(`/users/techs/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            return response.data
        } catch (error) {
            toast.error(error.message)
            return error
        }
    }

    return (
        <TechContext.Provider value={{ createTech, deleteTech, changeUser }}>
            {children}
        </TechContext.Provider>
    )
}