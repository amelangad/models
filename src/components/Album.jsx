import React from 'react'
import { motion } from "framer-motion"

export default function Album() {


    return (
        <div className="w-full h-full bg-[#e0dfc5] flex flex-col justify-center items-start">
            <motion.p className="w-full lg:w-1/3 text-[4rem]  sm:text-[6rem] md:text-[10rem]  lg:[text-[10em] tracking-[-5px] lg:tracking-[-15px]  py-5 lg:py-0">Album <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 2,
                    type: "spring",
                    repeat: Infinity,
                    repeatDelay: 1,
                    repeatType: "mirror"
                }}> .</motion.span></motion.p>
            <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:m-20 overflow-hidden">
                <div className="w-full flex flex-col gap-5">
                    <motion.div className=" h-[500px] w-[500px] overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "tween",
                            stiffness: 3,
                            delay: .5
                        }}>
                        <motion.img
                            src="/models2/model1.jpg"
                            alt="model"
                            className="object-cover"
                            whileHover={{ scale: 1.5, rotate: 20 }}
                            transition={{
                                duration: 2,
                                type: "tween",
                                stiffness: 3,
                            }} />
                    </motion.div>
                    <motion.div className=" h-[500px] w-[500px] overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "tween",
                            stiffness: 3,
                            delay: .5
                        }}>
                        <motion.img
                            src="/models2/model2.jpg"
                            alt="model"
                            className="object-cover"
                            whileHover={{ scale: 1.5, rotate: 10 }}
                            transition={{
                                duration: 2,
                                type: "tween",
                                stiffness: 3,
                            }} />
                    </motion.div>
                    <motion.div className=" h-[500px] w-[500px] overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "tween",
                            stiffness: 3,
                            delay: .6
                        }}>
                        <motion.img
                            src="/models2/model3.jpg"
                            alt="model"
                            className="object-cover"
                            whileHover={{ scale: 1.5, rotateZ: -25 }}
                            transition={{
                                duration: 2,
                                type: "tween",
                                stiffness: 3,
                            }} />
                    </motion.div>
                    <motion.div className=" h-[500px] w-[500px] overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "tween",
                            stiffness: 3,
                            delay: .2
                        }}>
                        <motion.img
                            src="/models2/model4.jpg"
                            alt="model"
                            className="object-cover"
                            whileHover={{ scale: 1.5, rotateZ: 40 }}
                            transition={{
                                duration: 2,
                                type: "tween",
                                stiffness: 3,
                            }} />
                    </motion.div>
                </div>

            <div className="w-full flex flex-col gap-10">
            <motion.div className=" h-[500px] w-[500px] overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "tween",
                            stiffness: 3,
                            delay: .5
                        }}>
                        <motion.img
                            src="/models2/model5.jpg"
                            alt="model"
                            className="object-cover"
                            whileHover={{ scale: 1.5, rotate: -20 }}
                            transition={{
                                duration: 2,
                                type: "tween",
                                stiffness: 3,
                            }} />
                    </motion.div>
                    <motion.div className=" h-[500px] w-[500px] overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "tween",
                            stiffness: 3,
                            delay: .3
                        }}>
                        <motion.img
                            src="/models2/model6.jpg"
                            alt="model"
                            className="object-cover"
                            whileHover={{ scale: 1.5, rotate: 10 }}
                            transition={{
                                duration: 2,
                                type: "tween",
                                stiffness: 3,
                            }} />
                    </motion.div>
                    <motion.div className="h-[500px] w-[500px] overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "tween",
                            stiffness: 3,
                            delay: .4
                        }}>
                        <motion.img
                            src="/models2/model12.jpg"
                            alt="model"
                            className="object-cover"
                            whileHover={{ scale: 1.5, rotateZ: 30 }}
                            transition={{
                                duration: 2,
                                type: "tween",
                                stiffness: 3,
                            }} />
                    </motion.div>
                    <motion.div className=" h-[500px] w-[500px] overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "tween",
                            stiffness: 3,
                            delay: .8
                        }}>
                        <motion.img
                            src="/models2/model7.jpg"
                            alt="model"
                            className="object-cover"
                            whileHover={{ scale: 1.5, rotateZ: -20 }}
                            transition={{
                                duration: 2,
                                type: "tween",
                                stiffness: 3,
                            }} />
                    </motion.div>
            </div>
            <div className="w-full flex flex-col gap-5 overflow-hidden">
            <motion.div className="h-[500px] w-[500px] overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "tween",
                            stiffness: 3,
                            delay: .3
                        }}>
                        <motion.img
                            src="/models2/model8.jpg"
                            alt="model"
                            className="object-cover"
                            whileHover={{ scale: 1.5, rotate: 15 }}
                            transition={{
                                duration: 2,
                                type: "tween",
                                stiffness: 3,
                            }} />
                    </motion.div>
                    <motion.div className=" h-[500px] w-[500px] overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "tween",
                            stiffness: 3,
                            delay: .7
                        }}>
                        <motion.img
                            src="/models2/model9.jpg"
                            alt="model"
                            className="object-cover"
                            whileHover={{ scale: 1.5, rotateZ: -30 }}
                            transition={{
                                duration: 2,
                                type: "tween",
                                stiffness: 3,
                            }} />
                    </motion.div>
                    <motion.div className=" h-[500px] w-[500px] overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "tween",
                            stiffness: 3,
                            delay: .1
                        }}>
                        <motion.img
                            src="/models2/model10.jpg"
                            alt="model"
                            className="object-cover"
                            whileHover={{ scale: 1.5, rotate: -20 }}
                            transition={{
                                duration: 2,
                                type: "tween",
                                stiffness: 3,
                            }} />
                    </motion.div>
                    <motion.div className=" h-[500px] w-[500px] overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "tween",
                            stiffness: 3,
                        }}>
                        <motion.img
                            src="/models2/model11.jpg"
                            alt="model"
                            className="object-cover"
                            whileHover={{ scale: 1.5, rotateZ: -40 }}
                            transition={{
                                duration: 2,
                                type: "tween",
                                stiffness: 3,
                                delay: .5
                            }} />
                    </motion.div>
            </div>
            </div>
            </div>
    )
}
