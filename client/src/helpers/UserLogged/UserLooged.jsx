// import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"









export default function UserLogged () {
    // const userLogged = useSelector(state => state.userLogged)
    const user = localStorage.getItem('user')



    return (
        <>
        {
            user ? <Outlet/> : <Navigate to='/signin'/>
        }
        </>
    )
}