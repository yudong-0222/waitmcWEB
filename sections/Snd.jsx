import React from 'react'


import { motion } from 'framer-motion';

import {modes, sndmodes} from '../constants'
import styles from '../styles';
import { staggerContainer, textVariant,fadeIn,planetVariants } from '../utils/motion';
import { CustomTexts, TitleText, TypingText } from '../components';
import Modes from '../components/Modes';

const Snd = () => {
  return (
  <section className={`${styles.yPaddings} ${styles.paddings} sm:pl-16 pl-6 relative z-10`}>
    <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants('left')}
          className={`flex-1 ${styles.flexCenter} h-screen`}
        >
            <img
              src="/sndh.png"
              alt="get-started"
              className="object-contain z-10 rounded-3xl"
            />
        </motion.div>
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title="丨Search And Destroy" />
          <TitleText title={<>Search And Destroy 分流</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {sndmodes.map((feature) => (
              <Modes key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
  </section>
  )
}

export default Snd