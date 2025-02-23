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
            <span className="text-[#1797FF] font-bold sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[95px] 4k:text-[128px] text-[40px]">Search</span>
            <motion.div
              variants={fadeIn('down', 'tween', 0.6, 1)}
              className="flex flex-col items-center"
            >
              <span className="text-[#FFFFFF] font-bold sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[95px] 4k:text-[128px] text-[40px]">And</span>
            </motion.div>
            <span className="text-[#FF3939] font-bold sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[95px] 4k:text-[128px] text-[40px]">Destroy</span>
          </div>
        </div>
        {/* Mobile Verison */}
        <div className="sm:hidden md:flex lg:hidden xl:hidden flex">
          <div className="flex justify-center space-x-2 mt-[128px]">
            <span className="text-[#1797FF] font-bold lg:text-[82px] text-[42px]">Search</span>
            <motion.div
              variants={fadeIn('down', 'tween', 0.6, 1)}
              className="flex flex-col items-center"
            >
              <span className="text-[#FFFFFF] font-bold lg:text-[82px] text-[42px]">And</span>
            </motion.div>
            <span className="text-[#FF3939] font-bold lg:text-[82px] text-[42px]">Destroy</span>
          </div>
        </div>           
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.8, 1.2)}
        className="flex flex-col items-center"
      >
        <div className="flex justify-center">
            <span className="text-[#FFFF] text-[28px]">瞄準、射擊——生死對決</span>
        </div>
      </motion.div>
    </motion.div>
  </div>
  );
}

export default SndHero;
