import { useState } from 'react';
import style from './SignIn.module.css';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';







export default function SignUp () {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailPass, setEmailPass] = useState(false)
    const [passwordPass, setPasswordPass] = useState(false)


    const handleEmail = (e) => {
        setEmail(e.target.value)
        const emailVerf = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/
        setEmailPass(emailVerf.test(e.target.value))
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordPass(e.target.value !== '' ? true : false)
    }
    useEffect(() => {
        if(emailPass && passwordPass) document.getElementById('submitButton').disabled = false
        else document.getElementById('submitButton').disabled = true
    }, [emailPass, passwordPass])



    const submitForm = (e) => {
        e.preventDefault()
        dispatch(loginUser(email, password, navigate))
    }

    return (
        <div className={style.contSignUp}>
            <div className={style.divTitle}>
                <h1>Log In</h1>
            </div>
            <div className={style.divForm}>
                <form onSubmit={submitForm} className={style.form}>
                    <input className={style.inputBox} id='email' type="text" placeholder='email' onChange={handleEmail}/>
                    <input className={style.inputBox} id='password' type="password" placeholder='password' onChange={handlePassword} />
                    {/* <label id='labelError'></label> */}
                    <input id='submitButton' className={style.inputButton} type="submit" value='Log In' disabled/>
                </form>
            </div>
            <div className={style.signup}>
                <Link to='/signup' className={style.linkText}>Don't have an account? Sign up</Link>
            </div>
        </div>
    )
}