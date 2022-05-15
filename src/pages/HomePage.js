import React from "react"
import UserList from "../components/user-list/UserList"
import SearchUsers from "../components/user-list/SearchUsers"
const HomePage = ()=>(
  <div>
    <SearchUsers/>
    <UserList/>
  </div>
)
export default HomePage