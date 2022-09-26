import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLastRecords } from '../../redux/actions';
import CardOper from '../CardOper/CardOper';
import style from './LastRecords.module.css';








export default function LastRecords () {
    const dispatch = useDispatch()
    const lastRecords = useSelector(state => state.lastRecords)

    useEffect(() => {
        dispatch(getLastRecords())
    }, [dispatch])




    return (
        <div className={style.contLastRecords}>
            {
                typeof(lastRecords) === 'string' ? <h1>No results</h1> : <></>
            }
            {
                typeof(lastRecords) === 'object' && lastRecords?.map((oper, index) => {
                    return (
                        <CardOper key={index} oper={oper} />
                    )
                })
            }
        </div>
    )
}