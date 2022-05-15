import React,{createContext,useReducer} from "react"
import {Base_Url, Github_Token} from "../Api";
import githubReducers from "./github-reducers"


const UserContext = createContext();

export const UserContextProvider = ({children})=>{
    const initialState = {
        users:[],
        user:{},
        userRepo:[],
        loading:false,
        notFound:false,
        error:false,
    }
    const [state,dispatch] = useReducer(githubReducers,initialState)

    const fetchUsers = async (url)=>{
        try{

            dispatch({
                type:"SET_LOADING",
            })
            const response = await fetch(url,{
                headers:{Authorization:Github_Token}
            });
            
            const data = await response.json();
            dispatch({
                type:"GET_USER",
                payload:data.items,
    
            })
            if(!data.items.length){
                console.log("user not found");
                dispatch({
                    type:"SET_NOT_FOUND"
                })
            }
        }catch(e){
            console.log(e,"nuhuhu");
            dispatch({type:"ERROR"})
        }
    }
    const fetchUserProfile = async (login)=>{
        try{
            dispatch({type:"SET_LOADING"})
            const response = await fetch(`${Base_Url}/users/${login}`,{
                headers:{
                    Authorization:Github_Token
                }
            })
            const data = await response.json();
            dispatch(
                {
                    type:"GET_USER_PROFILE",
                    payload:data
                }
                )
        }catch(e){
            dispatch({type:"ERROR"})
        }
      
    }
    const fetchUserRepo = async (login)=>{
        const response = await fetch(`${Base_Url}/users/${login}/repos`,{
            header:{Authorization:Github_Token}
        })
        const data = await response.json()
        dispatch({type:"GET_USER_REPO",payload:data})
    }
    const clearUsers = ()=>dispatch({type:"CLEAR_USERS"})
    const clearNotFoundMsg = ()=>{
        setTimeout(()=>{
            dispatch({type:"CLEAR_NOTFOUND"})
        },2000)
    }
    return(
        <UserContext.Provider value={
            {
            users:state.users,
            user:state.user,
            userRepo:state.userRepo,
            loading:state.loading,
            notFound:state.notFound,
            error:state.error,
            fetchUsers,
            clearUsers,
            clearNotFoundMsg,
            fetchUserProfile,
            fetchUserRepo
            }
            }>
        {children}
        </UserContext.Provider>
    )
}
export default UserContext;