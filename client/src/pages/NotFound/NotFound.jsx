import { useEffect } from 'react';
import style from './NotFound.module.css';








export default function NotFound () {

    useEffect(() => {
        document.title = 'FinnApp | Not found'
    }, [])



    return (
        <div className={style.contNotFound}>
            <h1>Page not Found :{'('}</h1>
        </div>
    )
}