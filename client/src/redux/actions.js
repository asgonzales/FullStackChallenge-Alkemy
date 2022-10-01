import axios from 'axios';
import toast from 'react-hot-toast';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_LAST_RECORDS = 'GET_LAST_RECORDS';
export const GET_BALANCE = 'GET_BALANCE';
export const REGISTER_OPERATION = 'REGISTER_OPERATION';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_RESULTS = 'GET_RESULTS';
export const GET_STATISTICS = 'GET_STATISTICS';


const BASE_URL = process.env.REACT_APP_BASE_URL;

axios.defaults.withCredentials = true;

export const registerUser = (newUser, navigate) => {
    toast.loading('Loading', { id: 'register' })
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `${BASE_URL}/user/signup`,
            data: newUser
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
            toast.error(err.response.data.error, {
                id: 'error'
            })
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
            // console.log(response.data)
            localStorage.setItem('user', JSON.stringify({session: true, name: response.data.name}))
            toast.dismiss('login')
            toast.success(`Welcome ${response.data.name}!`)
            navigate('/home')
        })
        .catch(err => {
            toast.dismiss('login')
            toast.error(err.response.data.error, {
                id: 'error'
            })
        })
    }
}
export const signGoogle = (credential, navigate) => {
    toast.loading('Logging In', {
        id:'signGoogle'
    })
    return(dispatch) => {
        axios({
            method: 'POST',
            url:`${BASE_URL}/user/signGoogle`,
            data: { credential }
        })
        .then(response => {
            localStorage.setItem('user', JSON.stringify({session: true, name: response.data.name}))
            toast.dismiss('signGoogle')
            toast.success(`Welcome ${response.data.name}!`)
            navigate('/home')
        })
        .catch(err => {
            toast.dismiss('signGoogle')
            toast.error(err.response.data.error, {
                id: 'error'
            })
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
                // console.log('ERROR', err.response.data.sessionEnd)
                if(err.response.data.sessionEnd) endSession(dispatch)
                toast.err(err.response.data.error, {
                    id: 'error'
                })
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
            toast.error(err.response.data.error, {
                id: 'error'
            })
            if(err.response.data.sessionEnd) endSession(dispatch)
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
                toast.error(err.response.data.error, {
                    id: 'error'
                })
                if(err.response.data.sessionEnd) endSession(dispatch)
            })
    }
}
export const getCategories = (type) => {
    const url = new URL(`${BASE_URL}/category`)
    url.searchParams.append('type', type)
    return (dispatch) => {
        try {
            axios({
                method: 'GET',
                url: url.href
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
export const getResults = (type, categoryId, concept, minMount, maxMount, minDate, maxDate) => {
    toast.loading('Searching operations', {
        id: 'getResults'
    })
    const url = new URL(`${BASE_URL}/operation/filter`)
    if(!!type) url.searchParams.append('type', type)
    if(!!categoryId) url.searchParams.append('categoryId', categoryId)
    if(!!concept) url.searchParams.append('concept', concept)
    if(!!minMount) url.searchParams.append('minMount', minMount)
    if(!!maxMount) url.searchParams.append('maxMount', maxMount)
    if(!!minDate) url.searchParams.append('minDate', minDate)
    if(!!maxDate) url.searchParams.append('maxDate', maxDate)

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
                toast.error(err.response.data.error, {
                    id: 'error'
                })
                if(err.response.data.sessionEnd) endSession(dispatch)
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
                toast.error(err.response.data.error, {
                    id: 'error'
                })
                if(err.response.data.sessionEnd) endSession(dispatch)
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
                toast.error(err.response.data.error, {
                    id: 'error'
                })
                if(err.response.data.sessionEnd) endSession(dispatch)
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
            // dispatch({
            //     type: GET_LAST_RECORDS,
            //     payload: []
            // })
            // dispatch({
            //     type: GET_RESULTS,
            //     payload: []
            // })
            // dispatch({
            //     type: GET_BALANCE,
            //     payload: 0
            // })
            // localStorage.removeItem('user')
            endSession(dispatch)
            navigate('/signin')
            toast.success('Come back soon!')
        })
        .catch(err => {
            toast.dismiss('signOut')
            toast.error(err.response.data.error, {
                id: 'error'
            })
        })
    }
}
export const getStatistics = (minDate, maxDate, type, categoryId) => {
    toast.loading('Getting statistics', {
        id: 'GET_STATISTICS'
    })
    const url = new URL(`${BASE_URL}/operation/statistics`)
    if(!!minDate) url.searchParams.append('minDate', minDate)
    if(!!maxDate) url.searchParams.append('maxDate', maxDate)
    if(!!type) url.searchParams.append('type', type)
    if(!!categoryId) url.searchParams.append('categoryId', categoryId)
    return (dispatch) => {
        axios({
            method: 'GET',
            url: url.href
        })
        .then(response => {
            dispatch({
                type: GET_STATISTICS,
                payload: response.data
            })
            toast.dismiss('GET_STATISTICS')
        })
        .catch(err => {
            toast.dismiss('GET_STATISTICS')
            toast.error(err.response.data.error)
            // console.log(err.response.data.error)
        })
    }
}

function endSession (dispatch) {
    dispatch({
        type: GET_LAST_RECORDS,
        payload: []
    })
    dispatch({
        type: GET_RESULTS,
        payload: []
    })
    dispatch({
        type: GET_BALANCE,
        payload: 0
    })
    localStorage.removeItem('user')
    window.location.reload(false)
}

