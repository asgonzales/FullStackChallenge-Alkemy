// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { getResults } from '../../redux/actions';
import CardOper from '../CardOper/CardOper';
import style from './ResultsOper.module.css';








export default function ResultsOper () {
    // const dispatch = useDispatch()
    const results = useSelector(state => state.results)

    // useEffect(() => {
    //     dispatch(getResults('asd','asdasd'))
    // }, [dispatch])




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