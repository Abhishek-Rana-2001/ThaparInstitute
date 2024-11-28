import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";


type DropDownMenuProps = {
    children: ReactNode;
}

const DropDownMenu = ({children} : DropDownMenuProps) => {
    const [isOpen, setIsOpen]= useState(false)
  return (
    <div className="flex justify-center items-center">
      <motion.div className="relative">
        <button onClick={()=>setIsOpen(prev => !prev)}>Avatar</button>

        {isOpen && <div className="absolute h-24 w-52 top-[120%] left-1/2 -translate-x-1/2 border-white border">
            {children}
        </div>}
      </motion.div>
    </div>
  );
};

export default DropDownMenu;
