import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components';
import { textVariant } from '../utils/motion';
import styles from '../styles';
import { TypingTitle } from '../components/CustomTexts';
import FooterNotFound from '../components/FooterNotFound';

const NotFound = () => (
  <div className="bg-primary-black overflow-hidden wtf">
    <Navbar />
    <div className="gradient-06 z-0" />
    <motion.div
      variants={textVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading}`}>
        404
      </motion.h1>
      <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading}`}>
        NOT FOUND
      </motion.h1>
      <TypingTitle title="oops 出了點錯誤?" textStyles="text-center" />
      <TypingTitle title="你現在所在的頁面已經搬到外太空了..." textStyles="text-center" />
      <a href="/">
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroBloding} hover:bg-cyan-833`}
        >
          [點擊我返回主頁]
        </motion.h1>
      </a>
    </motion.div>
    <FooterNotFound />
  </div>
);

export default NotFound;
