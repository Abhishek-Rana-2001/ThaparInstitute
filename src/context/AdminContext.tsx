import { createContext,PropsWithChildren, useContext, useState } from "react";
import { course } from "../components/forms/StudentForm";



type AdminContextValue = {
    courses: course[],
    setCourses:React.Dispatch<React.SetStateAction<course[]>>
}


const AdminContext = createContext<AdminContextValue | undefined>(undefined)


export const AdminContextProvider = ({children } : PropsWithChildren) =>{
    const [courses, setCourses] = useState<course[]>([])
    return <AdminContext.Provider value={{courses, setCourses}}>
        {children}
    </AdminContext.Provider>
}


export const useAdminContext = ()=>{
    const context = useContext(AdminContext)
    if(!context){
        throw new Error('useAdminContext must be used within a AdminContextProvider')
        }
        return context
}