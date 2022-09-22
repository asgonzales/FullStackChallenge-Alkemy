import axios from 'axios';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_LAST_RECORDS = 'GET_LAST_RECORDS';
export const GET_BALANCE = 'GET_BALANCE';
export const REGISTER_OPERATION = 'REGISTER_OPERATION';



const BASE_URL = 'http://localhost:3001'

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
                console.log('Inicio de sesión :D')
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