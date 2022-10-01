import SearchBar from '../../components/SearchBar/SearchBar';
import StatsGraph from '../../components/StatsGraph/StatsGraph';
import style from './Statistics.module.css';








export default function Statistics () {




    return (
        <div className={style.contStatistics}>
            <div className={style.divSearch}>
                <SearchBar stats={true} />
            </div>
            <div className={style.divStats}>
                <StatsGraph />
            </div>
        </div>
    )
}