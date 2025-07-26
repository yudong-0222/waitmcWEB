'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { fadeIn, staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText, SmallTitle } from '../components';

const SndSeven = () => (
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
          <source src="/snd_gun_deo.mp4" type="video/mp4" />
        </video>
      </div>
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
        {/* Desktop Verison Picture Icon */}
        <motion.div
            variants={fadeIn('right', 'spring', 0.5, 1)}
            className="flex-[0.95] relative flex sm:hidden md:hidden lg:flex xl:flex 4k:flex"
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
                    <source src="/snd_gun_deo.mp4" type="video/mp4" />
                </video>
            </div>
        </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-1"
      >
        <TitleText title={<>流暢開火，精準擊殺！</>} />
        <div className="flex flex-row">
          {/* <SmallTitle title={<>🚧 我們正在建置新的頁面，以進行更詳細的說明...</>} /> */}
          <span className="text-[#ff4e86] text-[24px] font-extrabold">
            <span className="text-white">開發團隊</span>
            自製模型
          </span>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-[20px] text-white">極致射擊手感，流暢槍械操控。</span>
          </div>
          <span className="text-[20px] text-gray-400">在 Minecraft 中也能體驗 FPS 的射擊爽感！</span>
          <div>
            <span className="text-[20px] text-gray-400">想大開殺戒？切換至</span>
            <span className="text-[20px] text-[#36ffd7]">全自動模式</span>
          </div>
          <div>
            <span className="text-[20px] text-gray-400">需節制彈藥？切換至</span>
            <span className="text-[20px] text-[#36ffd7]">半自動、單點擊發模式</span>
          </div>
          <div>
            <span className="text-[20px] text-[#36ffd7]">舉槍、瞄準、射擊</span>
            <span className="text-[20px] text-gray-400">——才是戰場上的本能！</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
    {/* Join Text */}
    <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col mt-[140px]`}
        >
        <TitleText title={<>拿好武器，一起 <span className="text-[#1797FF]">S</span><span className="text-[#FFFFFF]">N</span><span className="text-[#FF3939]">D</span></>} textStyles="text-center" />
        <div className="mt-[30px] flex flex-col">
          <div className="w-full h-full relative aspect-video">
            <video
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src="/o1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex justify-center mt-[40px]">
            <a href="https://discord.gg/RNJQFYbjVp" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#738adb] rounded w-[140px] h-[60px] hover:bg-[#3e66f5]" type="button">
                <div className="flex flex-row items-center justify-center">
                <img src="https://i.imgur.com/Fipslup.png" alt="dc_lgo" className="max-w-[24px] max-h-[24px] object-contain" />
                <span className="ml-2 text-[20px] text-white">
                    Discord
                </span>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-[25px]">
          <span className='text-[#ffffff] text-[32px] font-bold'>▲加入<span className="text-[#738adb]"> Discord </span> 以獲取最新消息！▲</span> <br/>
        </div>
    </motion.div>
  </section>
);

export default SndSeven;