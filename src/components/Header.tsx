
import { menuItems } from "../data/menuItems";
import {easeInOut, motion} from "framer-motion"
import Button from "./Button";
import { NavLink, useLocation } from "react-router-dom";
import SideBar from "./SideBar";

 const Header = () => {
  const location = useLocation()
  return (
    <div className="sticky top-0 bg-[#111] z-10">
       <div className="px-10 flex justify-between w-full items-center">
       <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{duration:0.5, ease:easeInOut, delay:0.25}} className="flex justify-between items-center py-4 w-full">
        <h1 className="text-4xl font-bold "><NavLink to={"/"}>TI</NavLink></h1>
        <ul className="md:flex gap-5 md:flex-row md:opacity-1 hidden ">
          {menuItems.map((menuItem, index) => {
            return (
              <li className="text-white/65" key={index}>
                  {menuItem.link ? <NavLink className={`hover:text-white transition-colors duration-200 ease-in-out ${location.pathname === menuItem.link ? "text-white" : ""}`} to={menuItem?.link}>{menuItem.title}</NavLink> : <>{menuItem.title}</> }
              </li>
            );
          })}
        </ul>
        <Button size="small" variant="primary" className="md:block hidden">Login</Button>
        </motion.div>
        <SideBar/>
       </div>
    </div>
  );
};

export default Header

