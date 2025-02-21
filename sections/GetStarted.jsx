'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newsLA } from '../constants';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import NEWS from '../components/StartSteps';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-[0.8] ${styles.flexEnd}`}
      >
        <img
          src="/reca.png"
          alt="get-started"
          className="w-[85%] h-[85%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.8] flex justify-center flex-col"
      >
        <TypingText title="| NEWS" />
        <TitleText title={<>最新消息 📰</>} />
        <div className="mt-[31px] flex flex-col max-w-[590px] gap-[24px]">
          {newsLA.map((feature, index) => (
            <NEWS
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              title={feature.title}
              subtitle={feature.subtitle}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;