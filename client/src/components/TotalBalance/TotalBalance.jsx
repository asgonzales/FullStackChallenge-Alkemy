import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBalance } from '../../redux/actions';
import style from './TotalBalance.module.css';








export default function TotalBalance () {
    const dispatch = useDispatch()
    const totalBalance = useSelector(state => state.totalBalance)

    useEffect(() => {
        dispatch(getBalance())
    }, [dispatch])

    return (
        <div className={style.contTotalBalance}>
            <h4>Total</h4>
            <h1>$ {Number(totalBalance.total).toLocaleString('ca')}</h1>
        </div>
    )
}