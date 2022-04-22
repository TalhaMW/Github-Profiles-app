import React from "react"
import { createContext } from "react"
import { useState } from "react";
export const userContext = createContext();

const UserContextProvider = ({children})=>{
    const [users,setUser] = useState([]);
    const [loading,setLoading] = useState(false)
    const fetchUsers = async (url)=>{
        const response = await fetch(url);
        const data = await response.json();
        setUser(data)
        setLoading(true)
    }
    return (
        <userContext.Provider value={{users,fetchUsers,loading}}>
        {children}
        </userContext.Provider>
    )
}
export default UserContextProvider