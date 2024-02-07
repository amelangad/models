import React from 'react'
import { motion } from "framer-motion"
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <motion.p className="w-full text-[4rem] sm:text-[6rem] md:text-[10rem] text-center lg:text-start pb-5 lg:pb-0 lg:text-[25rem] xl:text-[30em] bg-[#f1dada] tracking-[-5px] md:tracking-[-10px] lg:tracking-[-40px]">
    <Link to ="/">Models <motion.span
        initial={{opacity:0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{
        duration:2,
        type:"spring",
        repeat: Infinity,
        repeatDelay: 1,
        repeatType: "mirror"
        }}> .</motion.span></Link></motion.p>
  )
}
