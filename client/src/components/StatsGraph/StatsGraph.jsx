import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatistics } from '../../redux/actions';
import style from './StatsGraph.module.css';








export default function StatsGraph () {

    const dispatch = useDispatch()

    const stats = useSelector(state => state.stats)

    useEffect(() => {
        dispatch(getStatistics())
    }, [])

    const preba = () => {
        console.log(stats)
    }
    return (
        <div className={style.contStatsGraph}>
            <button onClick={preba}> PRUEBA </button>
        </div>
    )
}