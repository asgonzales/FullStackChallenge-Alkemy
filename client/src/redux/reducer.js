import {
    REGISTER_USER,
    LOGIN_USER,
    GET_LAST_RECORDS,
    GET_BALANCE,
    GET_CATEGORIES
} from "./actions"




const initialState = {
    userReg: '',
    userLog: '',
    lastRecords: [],
    totalBalance: '',
    categories: ''
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
        case GET_BALANCE: return {
            ...state,
            totalBalance: action.payload
        }
        case GET_CATEGORIES: return {
            ...state,
            categories: action.payload
        }
    
        default: return state
    }
}