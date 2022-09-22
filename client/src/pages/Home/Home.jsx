import LastRecords from '../../components/LastRecords/LastRecords';
import RegisterOper from '../../components/RegisterOper/RegisterOper';
import TotalBalance from '../../components/TotalBalance/TotalBalance';
import style from './Home.module.css';
import { useState } from 'react';








export default function Home () {

    const [openPortal, setOpenPortal] = useState(false)

    const handlePortal = () => {
        setOpenPortal(!openPortal)
    }


    return (
        <div className={style.contHome}>
            <div>
                <TotalBalance />
            </div>
            <div>
                <LastRecords />
            </div>
            <div>
                <button onClick={handlePortal}>Add Operation</button>
                {
                    openPortal?
                    <RegisterOper closePortal={handlePortal} />
                    : <></>
                }
            </div>
        </div>
    )
}