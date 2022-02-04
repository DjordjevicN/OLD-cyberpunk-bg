import React,{useState} from 'react';
import './sidebarMenu.scss'
import { motion } from 'framer-motion'

function SidebarMenu() {
const [isOpen,setIsOpen]=useState(true)

const burger = {
  open: { rotate: -90, },
  closed: {  rotate: 0,   transition:{
    delay:.5,
 
  } },
 
}
const line1 = {
  open: { y: -490,  transition:{
    delay:.3,
    duration:.3
  } },
  closed: { y: 0,
     transition:{
    delay:.3,
    duration:.3
  } },
}
const menu = {
  open: {opacity:1, x:0,  transition:{
    delay:.4,
    duration:.3
  } },
  closed: { opacity: 0,x:30,
     transition:{
    delay:.25,
    duration:.2
  } },
}


  return <div className="sidebar">
      <div className="sidebar__content">
       <motion.div className="burger"
       animate={isOpen ? "open" : "closed"}
       variants={burger}
    
       onClick={() => setIsOpen(isOpen => !isOpen)} >
         <motion.div className="line-1" 
         animate={isOpen ? "open" : "closed"}
         variants={line1}
       
         ></motion.div>
         <div className="line-2" style={{opacity:isOpen?0:1}}></div>
         
         <div className="line-3" style={{width:isOpen?'50px':'40px'}}></div>
       </motion.div>
       <motion.div className="menuLinks"   
        animate={isOpen ? "open" : "closed"}
         variants={menu}>
           <a href='/'  className="linkItem">HOME</a>
           <a href='/projects' className="linkItem">PROJECTS</a>
           <a href='/about' className="linkItem">ABOUT ME</a>
         </motion.div>
      </div>
    </div>
   ;
}

export default SidebarMenu;
