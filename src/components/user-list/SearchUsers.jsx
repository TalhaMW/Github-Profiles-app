import React,{useState,useContext} from "react";
import UserContext from "../../context/user-context"
import AlertContext from "../../context/alert/alertContext"
import { Base_Url,Github_Token} from "../../Api";
import {FiAlertOctagon} from "react-icons/fi"

const SearchUsers = ()=>{
    const [searchValue,setSearchValue] = useState("")
    const {message,setAlert} = useContext(AlertContext)
    const {fetchUsers} = useContext(UserContext)
    const onInputChange = (e)=>{
        const {value} = e.target;
        setSearchValue(value)
    } 
    const onSubmitHandler = async (e)=>{
        e.preventDefault()
        if(!searchValue){
            setAlert("input something",1000);
            return
        }
        fetchUsers(`${Base_Url}/search/users?q=${searchValue}`)
        setSearchValue("")
        setAlert(false)
    }
    return(
        <div className="pb-8">
        {
            message
            ?
            <div className="flex items-center mb-4">
                <FiAlertOctagon className="text-3xl mr-2 text-red-500"/>
                <div className="text-2xl font-semibold">{message}</div>
            </div>
            :
            null
        }
        <form action="" onSubmit={onSubmitHandler}>
            <input placeholder="Search Profiles" className="text-gray-900 font-semibold w-50 sm:w-60 lg:w-80 py-2 px-2 focus:outline-none rounded-tl-lg rounded-bl-lg placeholder:opacity-80" type="text" value={searchValue} onChange={onInputChange}/>
            <button className="bg-gray-900 font-semibold py-2 px-3 rounded-tr-lg rounded-br-lg" type="submit" >Search</button>
        </form>
        </div>
    )
}
export default SearchUsers