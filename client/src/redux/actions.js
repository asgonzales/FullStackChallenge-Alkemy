import axios from 'axios';

export const REGISTER_USER = 'REGISTER_USER';






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