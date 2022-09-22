import LastRecords from '../../components/LastRecords/LastRecords';
import TotalBalance from '../../components/TotalBalance/TotalBalance';
import style from './Home.module.css';








export default function Home () {




    return (
        <div className={style.contHome}>
            <TotalBalance />
            <LastRecords />
        </div>
    )
}