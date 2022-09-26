import { Navigate, Outlet } from "react-router-dom"









export default function UserLogged () {
    const user = localStorage.getItem('user')



    return (
        <>
        {
            user ? <Outlet/> : <Navigate to='/signin'/>
        }
        </>
    )
}