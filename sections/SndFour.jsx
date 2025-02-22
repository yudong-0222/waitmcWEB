import React from 'react'
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer,fadeIn,zoomIn } from '../utils/motion';
import { SNDTitle } from '../components/CustomTexts';

const SndFour = () => {
  return (
    <section className={`relative z-[1] flex items-center justify-center 4k:mt-[58px]`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full flex"
      >
        {/* 左半邊 - 圖片部分 Desktop*/}
        <motion.div
          variants={zoomIn(0.5, 1)} // 改用 fadeIn 保持一致
          className={`w-full relative ${styles.flexCenter} hidden sm:hidden lg:flex`}
        >
          <img
            src="https://i.imgur.com/NabwUOO.png"
            alt="MapView_SND"
            className="w-screen h-screen object-cover"
          />
        </motion.div>        
      </motion.div>        
    </section>
  );
};

export default SndFour;
