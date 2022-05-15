import {createContext,useReducer} from "react"
import alertReducer from "./alertReducers"

const AlertContext = createContext();

export const AlertProvider = ({children})=>{
    const initialState = null;
    const [state,dispatch] = useReducer(alertReducer,initialState)
    const setAlert = (msg,time)=>{
        dispatch({type:"SET_ALERT",payload:msg})
        setTimeout(()=>{
            dispatch({type:"REMOVE_ALERT"})
        },time)
    }
    return(
        <AlertContext.Provider value={{message:state,setAlert}}>
            {children}
        </AlertContext.Provider>
    )
}
export default AlertContext