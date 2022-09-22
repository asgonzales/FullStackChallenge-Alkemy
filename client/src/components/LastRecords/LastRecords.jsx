import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLastRecords } from '../../redux/actions';
import style from './LastRecords.module.css';








export default function LastRecords () {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLastRecords())
    }, [])




    return (
        <div className={style.contLastRecords}>
            SOY EL LASTRECORDS
        </div>
    )
}