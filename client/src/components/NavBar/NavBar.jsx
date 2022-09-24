import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';







export default function NavBar () {

    const [openNavBar, setOpenNavBar] = useState(false)

    const handleNavBar = () => {
        setOpenNavBar(!openNavBar)
    }

    return (
        <div className={style.contNavBar}>
            <button className={style.navButton} onClick={handleNavBar} >Menu</button>
            {
                openNavBar &&
                <div className={style.backgroundNavBar}>
                    <div onClick={handleNavBar} className={style.closeDiv}></div>
                    <div className={style.contMenu}>
                        <Link className={style.link} to='/home'>Home</Link>
                        <Link className={style.link} to='/history'>History</Link>
                        <button>Sign Out</button>
                    </div>
                </div>
            }
        </div>
    )
}