import React from "react"
import UsersList from "../components/usersList"
import UserContextProvider from "../context/user-context"
const HomePage = ()=>(
    <UserContextProvider>
      <UsersList/>
    </UserContextProvider>
)
export default HomePage