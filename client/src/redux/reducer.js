import { REGISTER_USER } from "./actions"




const initialState = {
    userReg: ''
}


export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case REGISTER_USER: return {
            ...state,
            userReg: action.payload
        }
            
    
        default: return state
    }
}