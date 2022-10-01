import AboutCard from '../../components/About/AboutCard';
import style from './About.module.css';








export default function About () {




    return (
        <div className={style.contAbout}>
            <div className={style.divAbt}>
                <AboutCard />
            </div>
        </div>
    )
}