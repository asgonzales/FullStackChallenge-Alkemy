import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ChangeTheme from '../../helpers/ChangeTheme/ChangeTheme';
import { signOut } from '../../redux/actions';
import style from './NavBar.module.css';







export default function NavBar () {
    const dispatch = useDispatch()
    const nameUser = JSON.parse(localStorage.getItem('user')).name

    const navigate = useNavigate()
    const [openNavBar, setOpenNavBar] = useState(false)
    const [theme, setTheme] = useState(true)

    const handleNavBar = () => {
        setOpenNavBar(!openNavBar)
    }
    const handlerSignOut = () => {
        dispatch(signOut(navigate))
    }
    const handleTheme = () => {
        ChangeTheme(theme, setTheme)
    }
    return (
        <div className={style.contNavBar}>
            <button className={style.navButton} onClick={handleNavBar} >Menu</button>
            {
                openNavBar &&
                <div className={style.backgroundNavBar}>
                    <div onClick={handleNavBar} className={style.closeDiv}></div>
                    <div className={style.contMenu}>
                        <h3>Welcome {nameUser}</h3>
                        <Link onClick={handleNavBar} className={style.link} to='/home'>Home</Link>
                        <Link onClick={handleNavBar} className={style.link} to='/history'>History</Link>
                        <button onClick={handleTheme}>{theme?'Dark mode': 'Light mode'}</button>
                        <button onClick={handlerSignOut}>Sign Out</button>
                    </div>
                </div>
            }
        </div>
    )
}