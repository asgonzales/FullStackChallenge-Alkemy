import ResultsOper from '../../components/ResultsOper/ResultsOper';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './History.module.css';








export default function History () {




    return (
        <div className={style.contHistory}>
            <SearchBar />
            <ResultsOper />
        </div>
    )
}