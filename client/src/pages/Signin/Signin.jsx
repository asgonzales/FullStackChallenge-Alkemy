import style from './Signin.module.css';
import SignIn from '../../components/Auth/SignIn/SignIn.jsx';
import SignGoogle from '../../components/Auth/SignGoogle/SignGoogle.jsx';
import { useEffect } from 'react';







export default function Signin () {

    useEffect(() => {
        document.title = 'FinnApp | Sign In'
    }, [])



    return (
        <div className={style.contSignin}>
            <SignIn />
            <SignGoogle />
        </div>
    )
}