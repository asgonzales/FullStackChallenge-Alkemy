import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBalance } from '../../redux/actions';
import style from './TotalBalance.module.css';








export default function () {
    const dispatch = useDispatch()
    const totalBalance = useSelector(state => state.totalBalance)

    useEffect(() => {
        dispatch(getBalance())
    }, [dispatch])

    return (
        <div className={style.contTotalBalance}>
            <h1>Total: {totalBalance.total}</h1>
        </div>
    )
}