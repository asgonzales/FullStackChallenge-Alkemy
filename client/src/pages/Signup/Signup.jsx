import { useEffect } from 'react';
import SignUp from '../../components/SignUp/SignUp';
import style from './Signup.module.css';








export default function Signup () {

    useEffect(() => {
        document.title = 'FinnApp | Sign Up'
    }, [])



    return (
        <div className={style.contSignup}>
            <SignUp />
        </div>
    )
}