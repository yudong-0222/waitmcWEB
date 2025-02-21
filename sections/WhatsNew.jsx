'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText, SmallTitle} from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* Mobile Version Icon Picture */}
    <motion.div
      variants={planetVariants('right')}
      initial="hidden"
      whileInView="show"
      className={`flex-1 ${styles.flexCenter} sm:block lg:hidden xl:hidden`}
    >
      <img
        src="/logowait.png"
        alt="get-started"
        className="w-[65%] h-[65%] object-contain"
      />
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
        className="flex-[0.95]"
      >
        <TypingText title="| About" />
        <TitleText title={<>關於 WAIT Network</>} />
        <div>
          {/* <SmallTitle title={<>🚧 我們正在建置新的頁面，以進行更詳細的說明...</>} /> */}
          <SmallTitle title={<>⭐ 一個致力打造 <span className="text-[#FFFF]">Player vs. Player</span> 的臺灣伺服器</>} />
        </div>
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      {/* Desktop Verison Picture Icon */}
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter} hidden sm:block`}
      >
        <img
          src="/logowait.png"
          alt="get-started"
          className="w-[85%] h-[85%] object-contain rounded-56 hidden sm:hidden lg:block xl:block"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
