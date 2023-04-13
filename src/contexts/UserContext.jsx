import { createContext, useState } from "react";


export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        email: "",
    });
    const [newUser, setNewUser] = useState({});
    const [loading, setLoading] = useState(false);

    return (
        <UserContext.Provider value={{user, setUser, newUser, setNewUser, loading, setLoading}}>
            {children}
        </UserContext.Provider>
    )
}