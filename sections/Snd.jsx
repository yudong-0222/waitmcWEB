import React from 'react'
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer,fadeIn } from '../utils/motion';
import { SNDTitle } from '../components/CustomTexts';

const SndHero = () => {
  return (
  <div className="relative z-[100] min-h-[88vh]">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="w-full"
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="flex flex-col items-center"
      >
        {/* Desktop Verison */}
        <div className="hidden sm:flex md:hidden lg:flex xl:flex">
          <div className="flex justify-center space-x-6 mt-[128px]">
            <SNDTitle title={<>Search</>} colour={'text-[#1797FF]'} />
            <motion.div
              variants={fadeIn('down', 'tween', 0.6, 1)}
              className="flex flex-col items-center"
            >
              <SNDTitle title={<>And</>} colour={'text-[#FFFFFF]'} /> 
            </motion.div>
            <SNDTitle title={<>Destroy</>} colour={'text-[#FF3939]'} />
          </div>
        </div>
        {/* Mobile Verison */}
        <div className="sm:hidden md:flex lg:hidden xl:hidden flex">
          <div className="flex justify-center space-x-2 mt-[128px]">
            <span className="text-[#1797FF] font-bold md:text-[82px] text-[32px]">Search</span>
            <motion.div
              variants={fadeIn('down', 'tween', 0.6, 1)}
              className="flex flex-col items-center"
            >
              <span className="text-[#FFFFFF] font-bold md:text-[82px] text-[32px]">And</span>
            </motion.div>
            <span className="text-[#FF3939] font-bold md:text-[82px] text-[32px]">Destroy</span>
          </div>
        </div>           
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.8, 1.2)}
        className="flex flex-col items-center"
      >
        <div className="flex justify-center">
            <span className="text-[#FFFF] text-[28px]">Das war ein befehl!</span>
        </div>
      </motion.div>
    </motion.div>
  </div>
  );
}

export default SndHero;
