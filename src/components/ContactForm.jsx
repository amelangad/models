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
            <h1 className="  flex justify-center items-center text-2xl font-bold lg:hidden py-10 leading-[0.5px]">Contact</h1>
            <div className="relative lg:overflow-hidden lg:absolute lg:right-20 w-full md:w-3/4 lg:w-1/2 h-1/2  flex justify-center lg:items-start bg-[#f0eee3] rounded-[0px] md:rounded-tl-[100px]  md:rounded-tr-[350px] md:rounded-bl-[400px] md:rounded-br-[200px]">
                <motion.h1 className =" hidden lg:flex text-3xl lg:py-20 font-mono uppercase"
                initial={{y:-100}}
                whileInView={{y: 0}}
                transition={{
                    duration: .5,
                    delay:.5,
                    type: "spring",
                    stiffness: 500,
                }}>
                    C</motion.h1>
                    <motion.h1 className ="hidden lg:flex text-3xl lg:py-20 font-mono uppercase"
                initial={{y:-120}}
                whileInView={{y: 0}}
                transition={{
                    duration: .5,
                    delay: .8,
                    type: "spring",
                    stiffness: 500,
                }}>
                    o</motion.h1>
                    <motion.h1 className ="hidden lg:flex text-3xl lg:py-20 font-mono uppercase"
                initial={{y:-120}}
                whileInView={{y: 0}}
                transition={{
                    duration: .5,
                    delay: 1,
                    type: "spring",
                    stiffness: 500,
                }}>
                    n</motion.h1>
                    <motion.h1 className ="hidden lg:flex text-3xl lg:py-20 font-mono uppercase"
                initial={{y:-120}}
                whileInView={{y: 0}}
                transition={{
                    duration: .5,
                    delay: 1.2,
                    type: "spring",
                    stiffness: 500,
                }}>
                    t</motion.h1>
                    <motion.h1 className ="hidden lg:flex text-3xl lg:py-20 font-mono uppercase"
                initial={{y:-120}}
                whileInView={{y: 0}}
                transition={{
                    duration: .5,
                    delay: 1.5,
                    type: "spring",
                    stiffness: 500,
                }}>
                    a</motion.h1>
                    <motion.h1 className ="hidden lg:flex text-3xl lg:py-20 font-mono uppercase"
                initial={{y:-120}}
                whileInView={{y: 0}}
                transition={{
                    duration: .5,
                    delay: 1.8,
                    type: "spring",
                    stiffness: 500,
                }}>
                    c</motion.h1>
                    <motion.h1 className ="hidden lg:flex text-3xl lg:py-20 font-mono uppercase"
                initial={{y:-120}}
                whileInView={{y: 0}}
                transition={{
                    duration: .5,
                    delay: 2,
                    type: "spring",
                    stiffness: 500,
                }}>
                    t</motion.h1>
                
           
    <form action="/" className="w-2/3 max-h-full  absolute  top-[5rem] lg:top-[10rem]">
     <div className ="flex flex-row justify-center items-end gap-20">
<div className ="relative z-0">
   <input type="text"
   name="name"
   placeholder=""
   className ="w-full h-full focus:outline-none px-3 py-3 peer block bg-transparent border-b appearance-none border-black focus:ring-2 "/>
   <label className ="absolute top-5 -z-10 origin-[0] text-black text-sm -translate-y-3 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75">name</label>
   </div>

   <div className ="relative z-0">
   <input type="email"
    placeholder=""
   name="email"
   className ="w-full h-full focus:outline-none px-3 py-3 peer block bg-transparent border-b appearance-none border-black focus:ring-2 "/>
   <label className ="absolute top-5  -z-10 origin-[0] text-black text-sm -translate-y-3 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75">email</label>
   </div>
     </div>
     <div className ="relative z-0">
   <textarea
    placeholder=""
   className ="resize-none w-full  focus:outline-none  block px-3 py-10 peer bg-transparent border-b appearance-none border-black focus:ring-2 "/>
   <label className ="absolute top-5 z-10 origin-[0] text-black text-sm -translate-y-3 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-3 peer-focus:scale-75">type your question</label>
   </div>
   <motion.button
    type="submit"
   className ="bg-black text-white my-5  px-8 py-5 flex justify-center items-center m-auto w-200"
   whileTap={{scale: .9}}
   whileHover={{scale: 1.1}}
   transition={{
    duration: .5,
    type: "spring",
    stiffness: 500,
}}>send</motion.button>
    </form>
    </div>
            </div>
        </div>
    )
}
