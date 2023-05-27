import React from 'react'

import { motion } from 'framer-motion';

import {modes, sndmodes, owner,admin} from '../constants'
import styles from '../styles';
import { staggerContainer, textVariant,fadeIn,planetVariants } from '../utils/motion';
import { CustomTexts, TitleText, TypingText } from '../components';
import Modes from '../components/Modes';
import { TypingTitle } from '../components/CustomTexts';
import Staffer from '../components/Staffer';
import Staffs from '../components/Staffer';


const Staff = () => {
  return (
    <section className={`${styles.yPaddings} ${styles.paddings} sm:pl-16 pl-6 relative z-10`}>
    <motion.div 
    variants={staggerContainer} 
    initial="hidden" 
    whileInView="show" 
    viewport={{once: false ,amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className='flex justify-center items-center flex-col relative z-10'>
        <motion.h2 variants={textVariant(1.1)}
        className={`${styles.heroBloding}`}>
          FOUNDER OF WAIT
        </motion.h2>
      </div>
  </motion.div>
  <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      > 
        <TypingTitle title='OWNERS 🧲' textStyles='text-center'/>
        <div className="mt-[48px] flex flex-wrap justify-center gap-[24px]">
          {owner.map((owner) => (
            <Staffs key={owner.title} {...owner} />
          ))}
        </div>
        <TypingTitle title='ADMINS 🌟' textStyles='text-center'/>
        <div className="mt-[48px] flex flex-wrap justify-center gap-[24px]">
          {admin.map((admin) => (
            <Staffs key={admin.title} {...admin} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>

  )
}

export default Staff