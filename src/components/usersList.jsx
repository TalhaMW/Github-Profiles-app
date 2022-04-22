import React,{useEffect,useContext} from "react"
import { Base_Url,Github_Token} from "../Api"
import { userContext } from "../context/user-context"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const UsersList = ()=>{
    const {users,loading,fetchUsers} = useContext(userContext)
    useEffect(()=>{
        fetchUsers(`${Base_Url}/users`)
    },[])
    if(!loading){
        return <div>Loading .....</div>
    }
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        {
            users.map((user)=>{
                return (
                    <div key={user.id} className="card border-b-2 border-gray-600 border-opacity-10 p-2">
                        <div className="w-20 rounded-full overflow-hidden">
                        <img
                        className=""
                         src={user.avatar_url} alt="user img" />
                        </div>
                        <Link to="/user"><h3>{user.login}</h3></Link>
                    </div>
                )
            })
        }
        </div>
    )
}
export default UsersList