import style from './AboutCard.module.css';








export default function AboutCard () {




    return (
        <div className={style.contAboutCard}>
            <div>
                <h1>About</h1>
                <h3>FinnApp</h3>
                <p>FinnApp is an application where you can see a register of all your income and expenses. You can add, modify and delete operations, search the history and view related statistics.</p>
            </div>
            <div>
            <h1>Made by</h1>
            <h3>Sebastian Gonzales</h3>
            <p>App made by Sebastian Gonzales as personal project</p>
            </div>
            <div>
                <button>

                </button>
                <button>

                </button>
            </div>
        </div>
    )
}