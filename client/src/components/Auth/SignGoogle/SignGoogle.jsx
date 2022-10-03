import { useEffect } from 'react';
import style from './SignGoogle.module.css';
import { useDispatch } from 'react-redux';
import { signGoogle } from '../../../redux/actions';
import { useNavigate } from 'react-router-dom';







export default function SignGoogle () {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleCallBackResponse (response) {
        // console.log(response.credential)
        dispatch(signGoogle(response.credential, navigate))
    }

    useEffect(() => {
        window.google && window.google.accounts.id.initialize({
            client_id: '98217127170-7k4ol4980vn0p5h0ktfrv1fra0s601o7.apps.googleusercontent.com',
            callback: handleCallBackResponse
        });
        window.google && window.google.accounts.id.renderButton(
            document.getElementById('signGoogle'),
            { theme: 'outline', size: 'large'}
        )
    }, [])


    return (
        <div className={style.contSignGoogle}>
            <div className={style.divTitle}>
                <h3>Or continue with</h3>
            </div>
            <div id='signGoogle'>
            </div>
        </div>
    )
}