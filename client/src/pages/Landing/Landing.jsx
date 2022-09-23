import { Link } from 'react-router-dom';
import style from './Landing.module.css';








export default function Landing () {




    return (
        <div className={style.contLanding}>
            <div>
                <h1>LALALA</h1>
            </div>
            <div>
                <button>
                    <Link to='/signin'>Ingresar</Link>
                </button>
            </div>
        </div>
    )
}