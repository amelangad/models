import React, { useRef, useEffect } from 'react'
import { useInView, useAnimation, motion } from "framer-motion"

export default function Models() {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const scrollBee = useAnimation()

    useEffect(() => {
        if (isInView) {
            scrollBee.start("visible");
        }
    }, [isInView])


    return (
        <div className="w-full min-h-screen flex flex-col lg:flex-row  justify-center bg-[#a6c9a6]" ref={ref}>
            <motion.p className="w-full lg:w-1/3 text-[4rem]  sm:text-[6rem] md:text-[10rem]  lg:[text-[10em] tracking-[-5px] lg:tracking-[-15px]  bg-[#f1dada]  py-5 lg:py-0">Models <motion.span
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
            <div className="w-full lg:w-2/3 flex flex-col justify-center items-center lg:justify-start lg:items-start">
                <div className="w-full lg:overflow-hidden flex flex-col lg:flex-row  h-[600px] lg:h-[350px]">
                    <motion.div className="w-1/4 mx-auto lg:w-[350px] lg:rounded-full overflow-hidden py-10 lg:py-0  lg:m-10"
                        variants={{
                            hidden: { opacity: 0, x: -400 },
                            visible: { opacity: 1, x: 0 }

                        }}
                        initial="hidden"
                        animate={scrollBee}
                        transition={{
                            type: "tween",
                            duration: 3,
                            delay: 3,
                        }}
                    >
                        <img src="/models/model4.jpg" alt="model" className=" object-cover" />
                    </motion.div>
                    <motion.div className="w-full overflow-hidden  my-10 lg:mx-10 shadow-2xl"
                        variants={{
                            hidden: { opacity: 0, x: 400 },
                            visible: { opacity: 1, x: 0 }

                        }}
                        initial="hidden"
                        animate={scrollBee}
                        transition={{
                            type: "tween",
                            duration: 3,
                            delay: 1,
                        }}
                    >
                        <div className=" p-10 flex flex-col  justify-start lg:justify-center">
                            <h1 className="font-light text-3xl">Elena Yoshi</h1>
                            <p className="p-5 font-extralight text-lg">Lorem ipsum is a form of dummy text used in the printing industry. It was first used in the 15th century by an unknown printer to fill a proof book with text. Five centuries later, it came into use in the electronics industry, remaining virtually unchanged. </p>
                        </div>

                    </motion.div>
                </div>
                <div className="w-full lg:overflow-hidden flex flex-col lg:flex-row  h-[600px] lg:h-[350px]">
                    <motion.div className="w-1/4 mx-auto lg:w-[350px]  overflow-hidden py-10 lg:py-0 lg:m-10 lg:relative"
                        variants={{
                            hidden: { opacity: 0, x: -400 },
                            visible: { opacity: 1, x: 0 }

                        }}
                        initial="hidden"
                        animate={scrollBee}
                        transition={{
                            type: "tween",
                            duration: 3,
                        }}
                    >
                        <img src="/models/model7.jpg" alt="model" className="object-cover" />
                        <div className="hidden lg:block absolute top-0 left-20 h-[100px]  w-[400px] rotate-45 bg-[#a6c9a6]"></div>
                        <div className="hidden lg:block lg:absolute top-0 right-40 h-[100px]  w-[300px] rotate-45 bg-[#a6c9a6]"></div>
                        <div className="hidden lg:block lg:absolute bottom-0 left-20 h-[100px]  w-[400px] -rotate-45 bg-[#a6c9a6]"></div>

                    </motion.div>
                    <motion.div className="w-full overflow-hidden  my-10 lg:mx-10 shadow-2xl"
                        variants={{
                            hidden: { opacity: 0, x: -400 },
                            visible: { opacity: 1, x: 0 }

                        }}
                        initial="hidden"
                        animate={scrollBee}
                        transition={{
                            type: "tween",
                            duration: 3,
                            delay: 2,
                        }}
                    >
                        <div className="p-10 flex flex-col justify-center">
                            <h1 className="font-light text-3xl">Ann Walker </h1>
                            <p className="p-5 font-extralight text-lg">Lorem ipsum is a form of dummy text used in the printing industry. It was first used in the 15th century by an unknown printer to fill a proof book with text. Five centuries later, it came into use in the electronics industry, remaining virtually unchanged. </p>
                        </div>
                    </motion.div>
                </div>
                <div className="w-full lg:overflow-hidden flex flex-col lg:flex-row  h-[600px] lg:h-[350px]">
                    <motion.div className="w-1/4 mx-auto lg:w-[350px]  overflow-hidden py-10 lg:py-0 lg:m-10"
                        variants={{
                            hidden: { opacity: 0, x: 400 },
                            visible: { opacity: 1, x: 0 }

                        }}
                        initial="hidden"
                        animate={scrollBee}
                        transition={{
                            type: "tween",
                            duration: 3,
                            delay: 2,
                        }}
                    >
                        <img src="/models/model3.jpg" alt="model" className="object-cover" />
                    </motion.div>
                    <motion.div className="w-full overflow-hidden  my-10 lg:mx-10 shadow-2xl"
                        variants={{
                            hidden: { opacity: 0, x: 400 },
                            visible: { opacity: 1, x: 0 }

                        }}
                        initial="hidden"
                        animate={scrollBee}
                        transition={{
                            type: "tween",
                            duration: 3,
                        }}
                    >
                         
                        <div className="p-10 flex flex-col justify-center">
                            <h1 className="font-light text-3xl">Jasmin Hoo</h1>
                            <p className="p-5 font-extralight text-lg">Lorem ipsum is a form of dummy text used in the printing industry. It was first used in the 15th century by an unknown printer to fill a proof book with text. Five centuries later, it came into use in the electronics industry, remaining virtually unchanged. </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
