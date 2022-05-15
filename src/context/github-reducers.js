const githubReducers = (state,action)=>{
    switch(action.type){
        case "GET_USER":
            return {
                ...state,
                users:action.payload,
                loading:false,
                notFound:false,
                error:false
            };
        case "SET_NOT_FOUND":
            return {
                ...state,
                notFound:true
            }
        case "SET_LOADING":
            return {
                ...state,
                loading:true
            }
        case "CLEAR_USERS":
            return {
                ...state,
                users:[]
            }
        case "CLEAR_NOTFOUND":
            return {...state,notFound:false}
        case "GET_USER_PROFILE":
            return {
                ...state,
                user:action.payload,
                loading:false
            }
        case "GET_USER_REPO":
            return {
                ...state,
                userRepo:action.payload
            }
        case "ERROR":
            return {
                ...state,
                loading:false,
                error:true
            }

        default:
            return state
    }
}
export default githubReducers