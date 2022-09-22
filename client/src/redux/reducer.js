import {
    REGISTER_USER,
    LOGIN_USER,
    GET_LAST_RECORDS
} from "./actions"




const initialState = {
    userReg: '',
    userLog: '',
    lastRecords: []
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
        case GET_LAST_RECORDS: return {
            ...state,
            lastRecords: action.payload
        }
            
    
        default: return state
    }
}