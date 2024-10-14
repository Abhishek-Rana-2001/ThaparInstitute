import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { easeInOut, motion, MotionConfig } from "framer-motion";
import { menuItems } from "../data/menuItems";

const SideBar = ({}) => {
  const [navOpen, setNavOpen] = useState(false);


  return (
    <>
      <AnimatedBurgerButton navOpen={navOpen} setNavOpen={setNavOpen} />
      <motion.div
        initial={{ y: "-100%", opacity:0 }}
        animate={{ y: navOpen ? "0%" : "-100%" , opacity: navOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: easeInOut }}
        className="fixed right-0 top-0 z-40 h-screen w-full  content-center space-y-8 bg-[#333] text-white md:hidden"
      >
        <Links navOpen={navOpen} setNavOpen={setNavOpen}/>
      </motion.div>
    </>
  );
};

export default SideBar;

type NavProps = {
    navOpen : boolean;
    setNavOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

const Links = ({navOpen,setNavOpen} : NavProps) => {
  const location = useLocation();

  return (
    <ul>
        {menuItems.map((item, index) => (
          <motion.li initial={{y:-20, opacity:0}} animate={navOpen ? {y:0, opacity:1 , transition:{duration : 0.5, delay:0.4, ease:"easeInOut"}}  :{}} key={index}>
            {/* Render the NavLink only if item has a link */}
            {item.link ? (
             <NavLink
             key={index}
             to={item.link}
             onClick={() => {
               setNavOpen(false);
             }}
               className={"block p-1 text-xl md:text-4xl group text-center"}
             >
               <span className="relative">
                 {item.title}
                 <span
                 className={`absolute bottom-0 left-0 h-1 w-full bg-white group-hover:scale-x-100 transition-transform duration-300 origin-left ease-in-out ${location.pathname === item.link ? "scale-x-100" : "scale-x-0"}`}
                 ></span>
               </span>
             </NavLink>
            ) : (
              <span>{item.title}</span>
            )}

          </motion.li>
        ))}
      {/* {links.map((link, index) => (
        <NavLink
        key={index}
        to={link.to}
        onClick={() => {
          setNavOpen(false);
        }}
          className={"block p-1 text-xl md:text-4xl group text-center"}
        >
          <span className="relative">
            {link.label}
            <span
            className={`absolute bottom-0 left-0 h-1 w-full bg-white group-hover:scale-x-100 transition-transform duration-300 origin-left ease-in-out ${location.pathname === link.to ? "scale-x-100" : "scale-x-0"}`}
            ></span>
          </span>
        </NavLink>
      ))} */}
    </ul>
  );
};

const AnimatedBurgerButton = ({ navOpen, setNavOpen } : NavProps) => {
  return (
    <MotionConfig transition={{duration: 0.3, ease:easeInOut}}>

    <motion.button
      onClick={() => setNavOpen(!navOpen)}
      className="relative z-50 h-10 w-10  gap-1 md:hidden block rounded-full hover:cursor-pointer hover:shadow-md "
      animate={navOpen ? "open" : "close"}
    >
      <motion.span
        style={{
          left: "50%",
          top: "35%",
          x: "-50%",
          y: "-35%",
        }}
        variants={{
          open: { rotate: ["0deg", "0deg", "45deg"] , top: ["35%" , "50%", "50%"] },
          close: { rotate: ["45deg", "0deg", "0deg"], top: [ "50%", "50%" ,"35%" ] },
        }}
        className="absolute h-[2px] w-5 bg-white"
      ></motion.span>
      <motion.span
        style={{
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
        }}
        variants={{
          open: { rotate: ["0deg", "0deg", "45deg"] , top: ["50%" , "50%", "50%"] },
          close: { rotate: ["45deg", "0deg", "0deg"], top: [ "50%", "50%" ,"50%" ] },
        }}
        className="absolute h-[2px] w-5 bg-white"
      ></motion.span>
      <motion.span
        style={{
          left: "50%",
          bottom: "35%",
          x: "-50%",
          y: "35%",
        }}
        variants={{
          open: { rotate: ["0deg", "0deg", "-45deg"] , bottom: ["35%" , "50%", "50%"] },
          close: { rotate: ["-45deg", "0deg", "0deg"], bottom: [ "50%", "50%" ,"35%" ] },
        }}
        className="absolute h-[2px] w-5 bg-white"
      ></motion.span>
    </motion.button>
    </MotionConfig>

  );
};