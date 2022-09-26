import { useSelector } from 'react-redux';
import CardOper from '../CardOper/CardOper';
import style from './ResultsOper.module.css';








export default function ResultsOper () {
    const results = useSelector(state => state.results)





    return (
        <div className={style.contResultsOper}>
            {
                typeof(results) === 'string' ? <h1>No results</h1> : <></>
            }
            {
                typeof(results) === 'object' && results.length > 0 && results.map((oper, index) => {
                    return (
                        <CardOper key={index} oper={oper} edit/>
                    )
                })
            }
        </div>
    )
}