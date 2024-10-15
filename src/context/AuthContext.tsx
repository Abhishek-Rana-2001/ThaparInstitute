import { createContext,  PropsWithChildren, useContext, useState } from "react";

export interface User {
    username:string;
    role:"admin" | "user";
    id: string;
}

export interface AuthContextValue {
    user: User | null;
    setUser: (user: User | null) => void;
  }

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

type AuthProviderProps = PropsWithChildren



export const AuthProvider = ({children} : AuthProviderProps)=>{

    const [user, setUser] = useState<User | null>(null)

   return <AuthContext.Provider value={{user, setUser}}>
    {children}
   </AuthContext.Provider>
}


export const useAuth = ()=>{
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
        }
        return context
}

