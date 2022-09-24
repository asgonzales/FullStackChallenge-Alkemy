import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from '../../redux/actions';
import style from './NavBar.module.css';







export default function NavBar () {
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const [openNavBar, setOpenNavBar] = useState(false)

    const handleNavBar = () => {
        setOpenNavBar(!openNavBar)
    }
    const handlerSignOut = () => {
        dispatch(signOut(navigate))
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
                        <button onClick={handlerSignOut}>Sign Out</button>
                    </div>
                </div>
            }
        </div>
    )
}