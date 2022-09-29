import { useEffect } from 'react';
import SignUp from '../../components/Auth/SignUp/SignUp';
import SignGoogle from '../../components/Auth/SignGoogle/SignGoogle.jsx';
import style from './Signup.module.css';








export default function Signup () {

    useEffect(() => {
        document.title = 'FinnApp | Sign Up'
    }, [])



    return (
        <div className={style.contSignup}>
            <SignUp />
            <SignGoogle />
        </div>
    )
}