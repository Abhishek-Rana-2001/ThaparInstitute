import { createContext,  PropsWithChildren, useContext, useState } from "react";

export interface User {
    username:string;
    role:"admin" | "user";
    id: string;
}

export interface AuthContextValue {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  }

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

type AuthProviderProps = PropsWithChildren


const isValidUser = (data: any): data is User => {
    return (
        typeof data === "object" &&
        data !== null &&
        typeof data.username === "string" &&
        (data.role === "admin" || data.role === "user") &&
        typeof data.id === "string"
    );
};


export const AuthProvider = ({children} : AuthProviderProps)=>{

    const storedUser = sessionStorage.getItem("user");
    const initialUser = storedUser ? JSON.parse(storedUser) : null;

    const [user, setUser] = useState<User | null>(isValidUser(initialUser) ? initialUser : null);

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

