import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <div className="bg-[#292525] w-full h-auto  text-white flex flex-col items-center relative">
      <div className="flex flex-col lg:flex-row w-full h-full justify-center items-center">
        <div className="w-full lg:w-1/3 lg: p-[5%] flex flex-col justify-center items-center cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.6 }}
            transition={{
              type: "tween",
              repeat: Infinity,
              repeatDelay: .5,
              repeatType: "mirror",
              duration: 2,
            }}
            exit={{ scale: 1 }}
            animate={{ scale: 1.1 }}
          ><FaInstagram size={35} /></motion.div>
        </div>
        <div className="w-full lg:w-1/3 lg: p-[5%] flex flex-col justify-center items-center cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.6 }}
            transition={{
              type: "tween",
              repeat: Infinity,
              repeatDelay: .5,
              repeatType: "mirror",
              duration: 2,
            }}
            exit={{ scale: 1 }}
            animate={{ scale: 1.1 }}
          ><FaFacebook size={35} /></motion.div>
        </div>
        <div className="w-full lg:w-1/3 lg: p-[5%] flex flex-col justify-center items-center cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.6 }}
            transition={{
              type: "tween",
              repeat: Infinity,
              repeatDelay: .5,
              repeatType: "mirror",
              duration: 2,
            }}
            exit={{ scale: 1 }}
            animate={{ scale: 1.1 }}
          ><FaTiktok size={35} /></motion.div>
        </div>
        <p className="w-full flex flex-col justify-center lg:justify-end items-center gap-3 text-xl md:text-2xl  lg:text-3xl overflow-hidden z-20 ">
          <span className="overflow-hidden">ul. Konwaliowa 64, 95-222 Gniezno</span>
          <span className="overflow-hidden font-thin">email: modelsmodels@photo.pl</span>
          <span className="overflow-hidden font-thin">Telefon: 555 555 555</span>
        </p>
    
      </div>
      <div className="flex py-5 uppercase text-2xl">
        &copy; Magda 2024</div>
    </div>
  )
}
