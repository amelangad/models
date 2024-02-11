import React from 'react'
import {motion} from "framer-motion"

export default function ContactForm() {
    return (
        <div className ="w-screen h-auto flex flex-col lg:flex-row ">
        <div className="w-full h-screen grid place-items-center bg-[#a6c9a6] m-0">
            <div className="relative gallery w-[500px] h-[500px]">
                <div className="absolute w-full h-full  origin-center three">
                    <img src="/models2/main.jpg" alt="model"
                        className="absolute w-full h-full object-cover" /></div>
            </div>
        </div>
        <div className ="w-full h-screen bg-[#c2afd3] flex flex-col justify-center items-center">
            <h1 className="  flex justify-center items-center text-2xl font-bold lg:hidden py-20 leading-[0.5px]">Contact</h1>
            <div className="relative lg:overflow-hidden lg:absolute lg:right-20 w-full md:w-3/4 lg:w-1/2 h-1/2  flex justify-center lg:items-start bg-[#f0eee3] rounded-[20px] md:rounded-tl-[100px]  md:rounded-tr-[350px] md:rounded-bl-[400px] md:rounded-br-[200px]">
                <motion.h1 className =" hidden lg:flex text-3xl lg:py-20 font-mono"
                initial={{y:-100}}
                whileInView={{y: 0}}
                transition={{
                    duration: .5,
                    delay:.5,
                    type: "spring",
                    stiffness: 500,
                }}>
                    C</motion.h1>
                    <motion.h1 className ="hidden lg:flex text-3xl lg:py-20 font-mono"
                initial={{y:-120}}
                whileInView={{y: 0}}
                transition={{
                    duration: .5,
                    delay: .8,
                    type: "spring",
                    stiffness: 500,
                }}>
                    o</motion.h1>
                    <motion.h1 className ="hidden lg:flex text-3xl lg:py-20 font-mono"
                initial={{y:-120}}
                whileInView={{y: 0}}
                transition={{
                    duration: .5,
                    delay: 1,
                    type: "spring",
                    stiffness: 500,
                }}>
                    n</motion.h1>
                    <motion.h1 className ="hidden lg:flex text-3xl lg:py-20 font-mono"
                initial={{y:-120}}
                whileInView={{y: 0}}
                transition={{
                    duration: .5,
                    delay: 1.2,
                    type: "spring",
                    stiffness: 500,
                }}>
                    t</motion.h1>
                    <motion.h1 className ="hidden lg:flex text-3xl lg:py-20 font-mono"
                initial={{y:-120}}
                whileInView={{y: 0}}
                transition={{
                    duration: .5,
                    delay: 1.5,
                    type: "spring",
                    stiffness: 500,
                }}>
                    a</motion.h1>
                    <motion.h1 className ="hidden lg:flex text-3xl lg:py-20 font-mono"
                initial={{y:-120}}
                whileInView={{y: 0}}
                transition={{
                    duration: .5,
                    delay: 1.8,
                    type: "spring",
                    stiffness: 500,
                }}>
                    c</motion.h1>
                    <motion.h1 className ="hidden lg:flex text-3xl lg:py-20 font-mono"
                initial={{y:-120}}
                whileInView={{y: 0}}
                transition={{
                    duration: .5,
                    delay: 2,
                    type: "spring",
                    stiffness: 500,
                }}>
                    t</motion.h1>
                
           
    <form action="/" className="py-20 lg:py-0 px-5 absolute lg:left-1/3 lg:top-1/4">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative z-0">
          <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
        </div>
        <div className="relative z-0">
          <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
        </div>
        <div className="relative z-0 col-span-2">
          <textarea name="message" rows="5"  className="resize-none peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
        </div>
      </div>
      <div className ="flex justify-center items-center">
      <button type="submit" className="mt-5 rounded-md bg-black mx-auto lg:px-10 py-2 mb-5 text-white">Send Message</button>
      </div>
    </form>
    </div>
            </div>
        </div>
    )
}
