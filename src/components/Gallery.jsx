import React from 'react'
import { motion } from 'framer-motion'

export default function Gallery() {
  return (
    <div className="w-full h-[200vh] flex justify-center py-20 bg-[#e0dfc5] ">
      <div className="w-full lg:w-3/4 grid grid-cols-5 grid-rows-15 gap-1 lg:gap-5">
        <motion.div className="bg-transparent  overflow-hidden col-span-2 row-span-4">
          <motion.img src="/models/model1.jpg" alt="model"
            className="object-contain"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }} />
        </motion.div>
        <motion.div className="bg-transparent ] overflow-hidden col-span-3 row-span-3 col-start-3">
          <motion.img src="/models/model2.jpg" alt="model"
            className="object-contain"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }} />
        </motion.div>
        <motion.div className="bg-transparent overflow-hidden row-span-4 col-start-5 row-start-4">
          <motion.img src="/models/model3.jpg" alt="model"
            className="object-contain"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }} />
        </motion.div>
        <motion.div className="bg-transparent  overflow-hidden col-span-2 row-span-5 col-start-3 row-start-4">
          <motion.img src="/models/model4.jpg" alt="model"
            className="object-contain"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }} />
        </motion.div>
        <motion.div className="bg-transparent  overflow-hidden col-span-3 row-span-4 col-start-1 row-start-12">
          <motion.img src="/models/model5.jpg" alt="model"
            className="object-contain"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }} />
        </motion.div>
        <motion.div className="bg-transparent  overflow-hidden col-span-2 row-span-5 col-start-4 row-start-9">
          <motion.img src="/models/model6.jpg" alt="model"
            className="object-contain"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }} />
        </motion.div>
        <motion.div className="bg-transparent overflow-hidden col-span-2 row-span-5 col-start-1 row-start-5">
          <motion.img src="/models/model7.jpg" alt="model"
            className="object-contain"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }} />
        </motion.div>
        <motion.div className="bg-transparent  overflow-hidden col-span-3 row-span-2 col-start-1 row-start-10">
          <motion.img src="/models/model11.jpg" alt="model"
            className="object-contain"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }} />
        </motion.div>
        <motion.div className="bg-transparent overflow-hidden col-span-2 row-span-2 col-start-4 row-start-14">
          <motion.img src="/models/model8.jpg" alt="model"
            className="object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }} />
        </motion.div>
      </div>
    </div>
  )
}




<div className="grid grid-cols-5 grid-rows-15 gap-5">
    <div className="">1</div>
    <div className="">2</div>
    <div className="">3</div>
    <div className="">4</div>
    <div className="">5</div>
    <div className="">6</div>
    <div className="">7</div>
    <div className="col-span-3 row-span-2 col-start-1 row-start-10">8</div>
    <div className="col-span-2 row-span-2 col-start-4 row-start-14">9</div>
</div>