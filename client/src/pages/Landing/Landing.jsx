import { Link, Navigate } from 'react-router-dom';
import style from './Landing.module.css';








export default function Landing () {




    return (
        <div className={style.contLanding}>
            <div>
                <h1>Welcome</h1>
            </div>
            <div>
                <button>
                    <Link to='/signin'>Ingresar</Link>
                </button>
            </div>
            <Navigate to='/signin' />
        </div>
    )
}