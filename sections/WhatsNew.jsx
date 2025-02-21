'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText, SmallTitle} from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
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
        <TypingText title="| Whats new?" />
        <TitleText title={<>WAIT Network 2.0 更新了什麼?</>} />
        <div>
          <SmallTitle title={<>🚧 我們正在建置新的頁面，以進行更詳細的說明...</>} />
        </div>
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter} hidden sm:block`}
      >
        <img
          src="/logowait.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain rounded-56"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;