import { useState } from 'react';
import style from './SignUp.module.css';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/actions';
import { useEffect } from 'react';







export default function SignUp () {
    const dispatch = useDispatch()

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
        console.log(emailPass,passwordPass)
        dispatch(registerUser(email, password))
    }

    return (
        <div className={style.contSignUp}>
            <div className={style.divTitle}>
                <h1>Sign up</h1>
            </div>
            <div className={style.divForm}>
                <form onSubmit={submitForm} className={style.form}>
                    <input className={style.inputBox} id='email' type="text" placeholder='email' onChange={handleEmail}/>
                    <input className={style.inputBox} id='password' type="password" placeholder='password' onChange={handlePassword} />
                    {/* <label id='labelError'></label> */}
                    <input id='submitButton' className={style.inputButton} type="submit" value='Sign up' disabled/>
                </form>
            </div>
            <div>

            </div>
        </div>
    )
}