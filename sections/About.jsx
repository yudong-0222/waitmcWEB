'use client';

import {motion} from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer} from '../utils/motion';


const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* <div className='gradient-02 z-0' /> */}
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About" textStyles="text-center" />
      <motion.p
      variants={fadeIn('up', 'tween',0.2,1)}
      className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'>
        <span className='font-extrabold text-white'>WAIT Network Since 2017</span>
        <br />
        我們擁有
        <span className='font-extrabold text-white'> 5 年以上</span>
        
        的伺服器架設經驗
        <br />
        提供所有玩家
        <span className='font-extrabold text-white'>最有趣、完整的遊戲體驗！</span>
        <br /> 
        加入 <span className='font-extrabold text-white'>WAIT Network</span>
        <br/>
        一同體驗
        <span className='font-extrabold text-white'> PvP </span>
        和
        <span className='font-extrabold text-[#3865ff]'> Search </span>
        <span className='font-extrabold text-white'> And </span>
        <span className='font-extrabold text-[#ff3838]'> Destroy</span>
      </motion.p>
      <motion.img
      variants={fadeIn('up','tween', 0.3,1)}
      src='/arrow-down.svg'
      alt='arrow-down'
      className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
      
    </motion.div>
  </section>
);

export default About;
