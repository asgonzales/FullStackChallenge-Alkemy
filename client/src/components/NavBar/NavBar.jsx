import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './NavBar.module.css';







export default function NavBar () {

    const navigate = useNavigate()
    const [openNavBar, setOpenNavBar] = useState(false)

    const handleNavBar = () => {
        setOpenNavBar(!openNavBar)
    }
    const signOut = () => {
        console.log(document.cookie)
        document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT'
        navigate('/signin')
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
                        <button onClick={signOut}>Sign Out</button>
                    </div>
                </div>
            }
        </div>
    )
}