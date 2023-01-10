import { Navigate, Outlet } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"

const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus()

    if(checkingStatus){
        return <h4 className="text-4xl text-center my-20 text-slate-900">Loading...</h4>
    }

    return loggedIn ? <Outlet/> : <Navigate to='/admin-login' />
}

export default PrivateRoute


