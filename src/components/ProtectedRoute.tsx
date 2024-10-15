import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import type { PropsWithChildren } from "react"

export const ProtectedRoute = ({children} : PropsWithChildren)=>{

     const {pathname} = useLocation()
     const {user} = useAuth()

    return (
     user === null ? <Navigate to={"/login"} replace={true}></Navigate> : children
    )
}