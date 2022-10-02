import style from './AboutCard.module.css';
import linkedin from '../../media/LinkedIn.png';
import portfolio from '../../media/maletin.png';







export default function AboutCard () {
    const urlLinkedin = 'https://www.linkedin.com/in/asgonzalesr/'
    const urlPortfolio = 'https://portfolio-asgonzales.vercel.app/'



    return (
        <div className={style.contAboutCard}>
            <div className={style.divPage}>
                <h1>About</h1>
                <h3>FinnApp</h3>
                <p>FinnApp is an application where you can see a register of all your income and expenses. You can add, modify and delete operations, search the history and view related statistics.</p>
            </div>
            <div className={style.divInfo}>
                <h1>Made by</h1>    
                <h3>Sebastian Gonzales</h3>
                <p>App made by Sebastian Gonzales as a personal project.</p>
            </div>
            <div className={style.divButtons}>
                <a href={urlLinkedin} target='_blank' rel='noopener noreferrer'>
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href={urlPortfolio} target='_blank' rel='noopener noreferrer'>
                    <img src={portfolio} alt="portfolio" />
                </a>
            </div>
        </div>
    )
}