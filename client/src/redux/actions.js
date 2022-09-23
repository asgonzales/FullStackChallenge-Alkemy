import axios from 'axios';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_LAST_RECORDS = 'GET_LAST_RECORDS';
export const GET_BALANCE = 'GET_BALANCE';
export const REGISTER_OPERATION = 'REGISTER_OPERATION';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_RESULTS = 'GET_RESULTS';


const BASE_URL = 'http://localhost:3001'

axios.defaults.withCredentials = true;

export const registerUser = (email, password) => {
    return (dispatch) => {
        try {
            axios({
                method: 'POST',
                url: `${BASE_URL}/user/signup`,
                data: {email, password}
            })
            .then(response => {
                dispatch({
                    type: REGISTER_USER,
                    payload: response.data
                })
                console.log('Usuario registrado :D')
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}
export const loginUser = (email, password) => {
    return (dispatch) => {
        try {
            axios({
                method: 'POST',
                url: `${BASE_URL}/user/signin`,
                data: {email, password}
            })
            .then(response => {
                dispatch({
                    type: LOGIN_USER,
                    payload: response.data
                })
                // localStorage.setItem('token', response.data.token)
                document.cookie= `token=${response.data.token}`
                // console.log(response.data)
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}
export const getLastRecords = () => {
    return (dispatch) => {
        try {
            axios({
                method: 'GET',
                url: `${BASE_URL}/operation/lastrecords`
            })
            .then(response => {
                dispatch({
                    type: GET_LAST_RECORDS,
                    payload: response.data
                })
                console.log('LastRecords success')
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}
export const getBalance = () => {
    return (dispatch) => {
        try {
            axios({
                method: 'GET',
                url: `${BASE_URL}/operation/total`
            })
            .then(response => {
                dispatch({
                    type: GET_BALANCE,
                    payload: response.data
                })
                console.log('getBalance success :D', response.data)
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}
export const registerOperation = (operation) => {
    return (dispatch) => {
        try {
            axios({
                method: 'POST',
                url:`${BASE_URL}/operation`,
                data: operation
            })
            .then(response => {
                dispatch({
                    type: REGISTER_OPERATION,
                    payload: response.data
                })
                console.log('REGISTEROPERATION SUCCESS', response.data)
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}
export const getCategories = () => {
    return (dispatch) => {
        try {
            axios({
                method: 'GET',
                url: `${BASE_URL}/category`
            })
            .then(response => {
                dispatch({
                    type: GET_CATEGORIES,
                    payload: response.data
                })
                console.log('GETCATEGORIES', response.data)
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}
export const getResults = (type, categoryId) => {
    const url = new URL(`${BASE_URL}/operation/filter`)
    if(!!type) url.searchParams.append('type', type)
    if(!!categoryId) url.searchParams.append('categoryId', categoryId)
    return (dispatch) => {
        try {
            axios({
                method: 'GET',
                url: url.href
            })
            .then(response => {
                dispatch({
                    type: GET_RESULTS,
                    payload: response.data
                })
                console.log('GETRESULTS', response.data)
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}
export const updateOperation = (operation) => {
    return () => {
        try {
            axios({
                method: 'PUT',
                url: `${BASE_URL}/operation`,
                data: operation
            })
            .then(response => {
                console.log('UPDATEOPERATION', response.data)
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}
export const deleteOperation = (operationId) => {
    return () => {
        try {
            axios({
                method: 'DELETE',
                url:`${BASE_URL}/operation`,
                data: { operationId }
            })
            .then(response => {
                console.log('DELETEOPERATION', response.data)
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}