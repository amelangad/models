import React from 'react'
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className ="w-full h-screen flex flex-col-reverse lg:flex-row bg-[#c6ccb7]">
        <div className="w-full h-screen lg:w-2/3 flex flex-col justify-center items-center bg-[#c6ccb7]">
            <div className ="w-full lg:w-3/4 h-3/4  p-5 lg:p-20 text-20 bg-[#e7d2d2] rounded-br-[70%] rounded-bl-[30%] rounded-tl-[50%] rounded-tr-[30%] flex justify-center items-center shadow-xl text-lg font-thin leading-[2rem]">
                Lorem Ipsum is a form of dummy text used in the printing industry. It was first used in the 15th century by an unknown printer to fill a proof book with text. Five centuries later, it came into use in the electronics industry, remaining virtually unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>


        </div>
        <div className ="w-full lg:w-1/3 h-auto lg:h-full flex justify-center items-center bg-[#f1dada] ">
        <motion.p className="w-full lg:rotate-90  text-[4rem]  sm:text-[6rem] md:text-[10rem]  lg:[text-[10em] tracking-[-5px] lg:tracking-[-15px] ">About
        <motion.span
        initial={{opacity:0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{
        duration:2,
        type:"spring",
        repeat: Infinity,
        repeatDelay: 1,
        repeatType: "mirror"
        }}> .</motion.span></motion.p>
        </div>
    
    </div>
  )
}
