import axios from 'axios';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_LAST_RECORDS = 'GET_LAST_RECORDS';





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