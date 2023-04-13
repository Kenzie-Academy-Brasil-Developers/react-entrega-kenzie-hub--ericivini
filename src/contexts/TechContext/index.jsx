import { createContext } from "react";
import { api } from "../../services/api";


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
            console.log(response.data)
            return response.data

        } catch (error) {
            console.log(error)
        }
    }
    const deleteTech = async (id) => {
        try {
            const response = await api.delete(`/users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data)
            return response.data

        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <TechContext.Provider value={{createTech, deleteTech}}>
            {children}
        </TechContext.Provider>
    )
}