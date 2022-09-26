import style from './Signin.module.css';
import SignIn from '../../components/SignIn/SignIn.jsx';
import { useEffect } from 'react';







export default function Signin () {

    useEffect(() => {
        document.title = 'FinnApp | Sign In'
    }, [])



    return (
        <div className={style.contSignin}>
            <SignIn />
        </div>
    )
}