import {useRef, useState} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';

import styles from '../styles';
import { staggerContainer,fadeIn,zoomIn } from '../utils/motion';
import { SNDTitle } from '../components/CustomTexts';

const SECTION_HEIGHT = 1500;

const SndFive = ({scrollYProgress}) => {
  return (
    <div 
      className={`relative w-full`}
      style={{
        height: `calc(${SECTION_HEIGHT}px + 100vh)`
      }}
    >
      <Backimg url={"https://i.imgur.com/LQoku7E.png"} />
      <TextBox info={"爆w破模式"} desc={""} />
      {/* <Backimg url={"https://i.imgur.com/LQoku7E.png"} /> */}
    </div>
  );  
};


const Backimg = ({url}) => {
  const { scrollY } = useScroll();

  return(
    <motion.div 
      className="sticky top-0 h-screen w-full"
      variants={zoomIn(0.4, 1.3)}
      style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    />
  );
};

const TextBox = ({info, desc}) => {
  return (
    <motion.div
      variants={zoomIn(0, 0.5)}
      className="sticky z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-80 p-6 rounded-lg shadow-lg max-w-md"
    >
      <h2 className="text-white text-[64px] font-bold text-center">{info}</h2>
      <p className="text-white text-sm mt-2">{desc}</p>
    </motion.div>
  );
};


export default SndFive;
