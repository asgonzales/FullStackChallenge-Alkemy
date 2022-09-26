import axios from 'axios';
import toast from 'react-hot-toast';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_LAST_RECORDS = 'GET_LAST_RECORDS';
export const GET_BALANCE = 'GET_BALANCE';
export const REGISTER_OPERATION = 'REGISTER_OPERATION';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_RESULTS = 'GET_RESULTS';


const BASE_URL = process.env.REACT_APP_BASE_URL;

axios.defaults.withCredentials = true;

export const registerUser = (email, password, navigate) => {
    toast.loading('Loading', { id: 'register' })
    return (dispatch) => {
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
            toast.dismiss('register')
            toast.success('Please Log In')
            navigate('/signin')
        })
        .catch(err => {
            toast.dismiss('register')
            toast.error(err.response.data.error)
        })
    }
}
export const loginUser = (email, password, navigate) => {
    toast.loading('Logging In', { id: 'login' })
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `${BASE_URL}/user/signin`,
            data: {email, password}
        })
        .then(response => {
            // dispatch({
            //     type: LOGIN_USER,
            //     payload: true
            // })
            localStorage.setItem('user', 'true')
            toast.dismiss('login')
            toast.success('Welcome!')
            navigate('/home')
        })
        .catch(err => {
            toast.dismiss('login')
            toast.error(err.response.data.error)
        })
    }
}
export const getLastRecords = () => {
    toast.loading('Searching records...', {
        id: 'LastRecords'
    })
    return (dispatch) => {
            axios({
                method: 'GET',
                url: `${BASE_URL}/operation/lastrecords`
            })
            .then(response => {
                dispatch({
                    type: GET_LAST_RECORDS,
                    payload: response.data.length > 0 ? response.data : 'empty'
                })
                toast.dismiss('LastRecords')
            })
            .catch (err => {
                toast.dismiss('LastRecords')
                toast.err(err.response.data.error)
            })
    }
}
export const getBalance = () => {
    toast.loading('Searching records...', {
        id: 'LastRecords'
    })
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `${BASE_URL}/operation/total`
        })
        .then(response => {
            dispatch({
                type: GET_BALANCE,
                payload: response.data
            })
            toast.dismiss('LastRecords')
        })
        .catch(err => {
            toast.dismiss('LastRecords')
            toast.error(err.response.data.error)
        })
    }
}
export const registerOperation = (operation, closePortal) => {
    toast.loading('Adding new operation', {
        id: 'registerOperation'
    })
    return (dispatch) => {
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
                dispatch(getBalance())
                dispatch(getLastRecords())
                closePortal()
                toast.dismiss('registerOperation')
                toast.success('Operation added')
            })
            .catch(err => {
                toast.dismiss('registerOperation')
                toast.error(err.response.data.error)
            })
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
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}
export const getResults = (type, categoryId) => {
    toast.loading('Searching operations', {
        id: 'getResults'
    })
    const url = new URL(`${BASE_URL}/operation/filter`)
    if(!!type) url.searchParams.append('type', type)
    if(!!categoryId) url.searchParams.append('categoryId', categoryId)
    return (dispatch) => {
            axios({
                method: 'GET',
                url: url.href
            })
            .then(response => {
                dispatch({
                    type: GET_RESULTS,
                    payload: response.data.length > 0 ? response.data : 'empty'
                })
                toast.dismiss('getResults')
            })
            .catch(err => {
                toast.dismiss('getResults')
                toast.error(err.response.data.error)
            })
    }
}
export const updateOperation = (operation, closePortal) => {
    toast.loading('Updating operation', {
        id: 'updateOperation'
    })
    return (dispatch) => {
            axios({
                method: 'PUT',
                url: `${BASE_URL}/operation`,
                data: operation
            })
            .then(response => {
                toast.dismiss('updateOperation')
                toast.success('operation updated')
                dispatch(getResults())
                closePortal()
            })
            .catch(err => {
                toast.dismiss('updateOperation')
                toast.error(err.response.data.error)
            })
    }
}
export const deleteOperation = (operationId, closePortal) => {
    toast.loading('Deleting operation', {
        id: 'deleteOperation'
    })
    return (dispatch) => {
            axios({
                method: 'DELETE',
                url:`${BASE_URL}/operation`,
                data: { operationId }
            })
            .then(response => {
                toast.dismiss('deleteOperation')
                toast.success('Operation deleted')
                dispatch(getResults())
                closePortal()
            })
            .catch(err => {
                toast.dismiss('deleteOperation')
                
                toast.error(err.response.data.error)
            })
    }
}
export const signOut = (navigate) => {
    toast.loading('Signing out', {
        id: 'signOut'
    })
    return(dispatch) => {
        axios({
            method: 'PUT',
            url: `${BASE_URL}/user/signout`
        })
        .then(response => {
            toast.dismiss('signOut')
            dispatch({
                type: GET_LAST_RECORDS,
                payload: []
            })
            dispatch({
                type: GET_RESULTS,
                payload: []
            })
            localStorage.removeItem('user')
            navigate('/signin')
            toast.success('Come back soon!')
        })
        .catch(err => {
            toast.dismiss('signOut')
            toast.error(err.response.data.error)
        })
    }
}