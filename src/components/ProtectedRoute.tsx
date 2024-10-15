import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import type { PropsWithChildren } from "react"

export const ProtectedRoute = ({children} : PropsWithChildren)=>{

     const {user} = useAuth()

    return (
     user === null ? <Navigate to={"/login"} replace={true}></Navigate> : children
    )
}