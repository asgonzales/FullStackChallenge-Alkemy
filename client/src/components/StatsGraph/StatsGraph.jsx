import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatistics } from '../../redux/actions';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Legend, Tooltip, LineController, BarController } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import style from './StatsGraph.module.css';
import { useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Legend, Tooltip, LineController, BarController)







export default function StatsGraph () {

    const dispatch = useDispatch()
    const [dataTotal, setDataTotal] = useState({ labels: [], datasets: []})
    const [dataMin, setDataMin] = useState({ labels: [], datasets: []})
    const [dataMax, setDataMax] = useState({ labels: [], datasets: []})
    const [dataAvrg, setDataAvrg] = useState({ labels: [], datasets: []})
    const [dataCant, setDataCant] = useState({ labels: [], datasets: []})

    const stats = useSelector(state => state.stats)

    const r = getComputedStyle(document.body)

    useEffect(() => {
        dispatch(getStatistics())
    }, [])
    useEffect(() => {
        setDataTotal({
            labels: stats.map(val => val[0]),
            datasets: [
                {
                    type: 'bar',
                    label: 'total',
                    data: stats.map(val => val[1].acum),
                    borderColor: r.getPropertyValue('--primary'),
                    borderWidth: 2,
                    backgroundColor: r.getPropertyValue('--primary')
                }
            ]
        })
        setDataMin({
            labels: stats.map(val => val[0]),
            datasets: [
                {
                    type: 'line',
                    label: 'Min Value',
                    data: stats.map(val => val[1].min),
                    borderColor: r.getPropertyValue('--primary'),
                    backgroundColor: r.getPropertyValue('--primary'),
                    fill: true
                }
            ]
        })
        setDataMax({
            labels: stats.map(val => val[0]),
            datasets: [
                {
                    type: 'line',
                    label: 'Max Value',
                    data: stats.map(val => val[1].max),
                    borderWidth: 3,
                    borderColor: r.getPropertyValue('--primary'),
                    backgroundColor: r.getPropertyValue('--primary'),
                }
            ]
        })
        setDataAvrg({
            labels: stats.map(val => val[0]),
            datasets: [
                {
                    type: 'line',
                    label: 'Promedio',
                    data: stats.map(val => val[1].prom),
                    borderColor: r.getPropertyValue('--primary'),
                    backgroundColor: r.getPropertyValue('--primary'),
                    lineTension: 0.2
                }
            ]
        })
        setDataCant({
            labels: stats.map(val => val[0]),
            datasets: [
                {
                    type: 'line',
                    label: 'Quantity',
                    data: stats.map(val => val[1].cant),
                    borderColor: r.getPropertyValue('--primary'),
                    backgroundColor: r.getPropertyValue('--primary'),
                }
            ]
        })
    }, [stats])

    // const preba = () => {
        // console.log(r.getPropertyValue('--primary'))
        // console.log(stats.map(val => val[0]))
        // console.log(stats)
    // }
    return (
        <div className={style.contStatsGraph}>
            {/* <button onClick={preba}> PRUEBA </button> */}
            <Chart type='bar' data={dataTotal} />
            <Chart type='bar' data={dataMin} />
            <Chart type='bar' data={dataMax} />
            <Chart type='bar' data={dataAvrg} />
            <Chart type='bar' data={dataCant} />
        </div>
    )
}