import { createContext, useContext } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { UserContext } from "../UserContext/UserContext";
import { useParams } from "react-router-dom";


export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const token = localStorage.getItem("@TOKEN")
    const { techs, setTechs } = useContext(UserContext);
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
            const newList = [...techs, response.data];
            setTechs(newList)
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

    const changeTech = async (data) => {
        try {
            const response = await api.put(`/users/techs/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            toast.success("Alterações salvas", {
                theme: "dark"
            });

            return response.data
        } catch (error) {

            toast.error(error)
            return error
        }
    }

    return (
        <TechContext.Provider value={{ createTech, deleteTech, changeTech }}>
            {children}
        </TechContext.Provider>
    )
}