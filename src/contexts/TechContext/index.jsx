import { createContext } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";


export const TechContext = createContext({});

export const TechProvider = ({children}) => {
    const token = localStorage.getItem("@TOKEN") 

    const createTech = async (data) => {
        try {
            const response = await api.post("/users/techs", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success("Tecnologia adicionada a lista", {
                theme: "dark"
            })
            return response.data

        } catch (error) {
            toast.error(error.message);
            return error
        }
    }
    const deleteTech = async (id) => {
        try {
            const response = await api.delete(`/users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data

        } catch (error) {
            toast.error(error)
            return error
        }
    }
    
    return (
        <TechContext.Provider value={{createTech, deleteTech}}>
            {children}
        </TechContext.Provider>
    )
}