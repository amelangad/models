import React, {useRef} from 'react'
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
  } from "framer-motion";


export default function Text() {

    function ParallaxText({ children, baseVelocity = 100 }) {
      const baseX = useMotionValue(0);
      const { scrollY } = useScroll();
      const scrollVelocity = useVelocity(scrollY);
      const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
      });
      const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
      });
    
      const x = useTransform(baseX, (v) => (200,20, v));
    
      const directionFactor = useRef(1);
      useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
  
        if (velocityFactor.get() < 0) {
          directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
          directionFactor.current = 1;
        }
    
        moveBy += directionFactor.current * moveBy * velocityFactor.get();
    
        baseX.set(baseX.get() + moveBy);
      });
    

      return (
        <div className=" w-screen h-full flex p-0 m-0 justify-center items-center ">
          <motion.div style={{ x }} className ="p-0 m-0 flex flex-row flex-nowrap gap-2 justify-center ">
            <span className ="overflow-hidden font-light text-pretty text-white ">{children} </span>
            <span className ="overflow-hidden font-extrabold ">{children} </span>
            <span className ="overflow-hidden font-light text-white ">{children} </span>
            <span className ="overflow-hidden font-extrabold">{children} </span>
          </motion.div>
        </div>
      );
    }
    return (
        <section className =" w-screen  uppercase text:xl lg:text-[6rem] font-italic font-extrabold overflow-hidden py-[8rem] model bg-cover ">
          <ParallaxText  baseVelocity={-5} >Models</ParallaxText>
          <ParallaxText baseVelocity={5}>Photos</ParallaxText>
        </section>
      );
}
