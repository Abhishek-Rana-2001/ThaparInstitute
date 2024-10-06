
import { menuItems } from "../data/menuItems";
import {easeInOut, motion} from "framer-motion"
import { Button } from "./Button";
import { NavLink, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation()
  return (
    <div className="sticky top-0 bg-[#111] z-10">
       <div className="px-10">
       <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{duration:0.5, ease:easeInOut, delay:0.25}} className="flex justify-between items-center py-4">
        <h1 className="text-4xl font-bold "><NavLink to={"/"}>TI</NavLink></h1>
        <ul className="flex gap-5 md:flex-row md:opacity-1">
          {menuItems.map((menuItem, index) => {
            return (
              <li className="text-white/65" key={index}>
                  {menuItem.link ? <NavLink className={`hover:text-white transition-colors duration-200 ease-in-out ${location.pathname === menuItem.link ? "text-white" : ""}`} to={menuItem?.link}>{menuItem.title}</NavLink> : <>{menuItem.title}</> }
              </li>
            );
          })}
        </ul>
        <Button size="small" variant="primary">Login</Button>
        </motion.div>
       </div>
    </div>
  );
};

