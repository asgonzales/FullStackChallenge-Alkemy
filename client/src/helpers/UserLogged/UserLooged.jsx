import { Navigate, Outlet } from "react-router-dom"









export default function UserLogged () {
    const user = localStorage.getItem('user')
    // console.log(user?'asd':'uwu')


    return (
        <>
        {
            user ? <Outlet/> : <Navigate to='/signin'/>
        }
        </>
    )
}