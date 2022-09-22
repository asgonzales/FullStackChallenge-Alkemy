import { REGISTER_USER, LOGIN_USER } from "./actions"




const initialState = {
    userReg: '',
    userLog: ''
}


export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case REGISTER_USER: return {
            ...state,
            userReg: action.payload
        }
        case LOGIN_USER: return {
            ...state,
            userLog: action.payload
        }
            
    
        default: return state
    }
}