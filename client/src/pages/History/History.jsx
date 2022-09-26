import { useEffect } from 'react';
import ResultsOper from '../../components/ResultsOper/ResultsOper';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './History.module.css';








export default function History () {

    useEffect(() => {
        document.title = 'FinnApp | History'
    }, [])




    return (
        <div className={style.contHistory}>
            <div className={style.divSearch}>
                <SearchBar />
            </div>
            <div className={style.divResults}>
                <ResultsOper />
            </div>
        </div>
    )
}