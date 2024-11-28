import { useState } from "react"
import { NavLink } from "react-router-dom"

const Avatar = ()=>{
    const [menuOpen, setMenuOpen] = useState(false)
   return <div className="flex flex-col gap-2">
        <button onClick={()=>setMenuOpen(!menuOpen)}>Avatar</button>
        {menuOpen && <div className="flex flex-col gap-1">
           {
              <NavLink to={"/login"}>Login</NavLink>
           }
        </div>}
    </div>
}


export default Avatar