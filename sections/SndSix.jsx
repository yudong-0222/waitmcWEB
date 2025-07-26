'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { fadeIn, staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText, SmallTitle } from '../components';

const SndSix = () => (
  <section className={`${styles.paddings} z-1 `}>
    {/* Mobile Version Icon Picture */}
    <motion.div
        variants={fadeIn('left', 'spring', 0.5, 1.75)}
        className="flex-1 relative hidden sm:block md:block lg:hidden xl:hidden"
    >
      <div className="w-full h-full relative aspect-video">
        <video
          className="w-full h-full object-cover rounded-lg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/snd_loadout_demo.mp4" type="video/mp4" />
        </video>
      </div>
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-1"
      >
        <TitleText title={<>可自定義的出戰配置</>} />
        <div className="flex flex-row">
          {/* <SmallTitle title={<>🚧 我們正在建置新的頁面，以進行更詳細的說明...</>} /> */}
          <span className="text-[#ffa63a] text-[24px]">
            ⚡勝利
            <span className="text-white">由你定義！⚡</span>
          </span>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-[20px] text-white">自定義</span>
            <span className="text-[20px] text-gray-400">六種對戰配置，</span>
            <span className="text-[20px] text-gray-400">依照不同戰術，搭配不同槍種！</span>
          </div>
          <span className="text-[20px] text-gray-400">你可以透過自定義 6 個背包（Loadout）作為出戰配置，</span>
          <span className="text-[20px] text-gray-400">並在每回合開始前都可以選擇不同的配置！</span>
          <span className="text-[20px] text-gray-400">對應不同戰術選擇不同的武器，只要你想！沒有什麼是做不到的！</span>
        </div>
      </motion.div>
      {/* Desktop Verison Picture Icon */}
      <motion.div
        variants={fadeIn('left', 'spring', 0.5, 1.75)}
        className="flex-1 relative flex sm:hidden md:hidden lg:flex xl:flex 4k:flex"
      >
        <div className="w-full h-full relative aspect-video">
          <video
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/snd_loadout_demo.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default SndSix;