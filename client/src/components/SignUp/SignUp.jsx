import style from './SignUp.module.css';








export default function SignUp () {


    const submitForm = (e) => {
        e.preventDefault()
        console.log('pepe')
    }

    return (
        <div className={style.contSignUp}>
            <div className={style.divTitle}>
                <h1>Sign up</h1>
            </div>
            <div className={style.divForm}>
                <form onSubmit={submitForm} className={style.form}>
                    {/* <label htmlFor="email">email</label> */}
                    <input className={style.inputBox} id='email' type="text" placeholder='email'/>
                    {/* <label htmlFor="password">password</label> */}
                    <input className={style.inputBox} id='password' type="password" placeholder='password' />
                    <input className={style.inputButton} type="submit" value='Sign up' />
                </form>
            </div>
            <div>

            </div>
        </div>
    )
}