import React from 'react'
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { SNDTitle } from '../components/CustomTexts';

const SndSec = () => {
  return (
    <section className={`relative z-[1] flex items-center justify-center 4k:mt-[58px]`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full flex lg:flex-row flex-col"
      >
        {/* 左半邊 - 文字部分 */}
        <div className="w-full lg:w-1/2 flex flex-col p-8">
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="text-[#FFFFFF] text-start sm:pl-[85px]"
          >
            <SNDTitle title={<>槍戰新紀元</>} />
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="text-start mt-4 hidden sm:flex h-full pl-[0px] sm:pl-[85px] md:pl-[85px]"
          >
            <div className="flex flex-col">
              <span className="text-[#8d8d8d] text-[24px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                <span className="text-[#1797FF] font-bold">S</span>  
                <span className="text-[#fff] font-bold">N</span>  
                <span className="text-[#FF3939] font-bold">D</span>  
                專為槍戰愛好者打造
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]"><span className="text-white">⚡爆破、🔥寫實、⚔️單挑</span> 三大模式</span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                <span className="text-[#43ffbd]">
                  ⚡經典爆破
                </span>
                <span className="text-[24px]">
                  ：爭分奪秒的
                  <span className="text-[#fff]">
                    拆彈任務
                  </span>
                  ，挑戰團隊默契與策略。
                </span>
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                <span className="text-[#ff4343]">
                  🔥寫實模式
                </span>
                <span className="text-[24px]">
                  ：沉浸於真實戰場的
                  <span className="text-white">
                    軍事工藝
                  </span>
                  。在
                  <span className="text-white">
                    壕溝
                  </span>
                  與
                  <span className="text-white">
                    散兵坑
                  </span>中，體驗子彈掠身的
                  <span className="text-white">
                  緊張
                  </span>
                  與
                  <span className="text-white">
                  腎上腺素
                  </span>
                  飆升的快感！
                </span>
              </span>
              {/* <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                <span className="text-gradient">
                  單挑模式
                </span>
                <span className="text-[24px]">
                  ：熟悉的戰術對決，爭分奪秒的拆彈任務，挑戰團隊默契與策略。
                </span>
              </span> */}
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="text-start mt-4 flex sm:hidden h-full pl-[10px]"
          >
            <div className="flex flex-col">
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                <span className="text-[#43ffbd]">
                  ⚡經典爆破
                </span>
                <span className="text-[24px]">
                  ：爭分奪秒的
                  <span className="text-[#fff]">
                    拆彈任務
                  </span>
                  ，挑戰團隊默契與策略。
                </span>
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                <span className="text-[#ff4343]">
                  🔥寫實模式
                </span>
                <span className="text-[24px]">
                  ：沉浸於真實戰場的
                  <span className="text-white">
                    軍事工藝
                  </span>
                  。在
                  <span className="text-white">
                    壕溝
                  </span>
                  與
                  <span className="text-white">
                    散兵坑
                  </span>中，體驗子彈掠身的
                  <span className="text-white">
                  緊張
                  </span>
                  與
                  <span className="text-white">
                  腎上腺素
                  </span>
                  飆升的快感！
                </span>
              </span>
            </div>
          </motion.div>
        </div>
        {/* 右半邊 - 圖片部分 Desktop*/}
        <motion.div
          variants={fadeIn('left', 'tween', 0.4, 1)} // 改用 fadeIn 保持一致
          className={`w-full lg:w-1/2 relative ${styles.flexCenter} hidden sm:hidden lg:flex`}
        >
          <img
            src="/sxh.webp"
            alt="get-started"
            className="w-full h-screen object-cover"
          />
        </motion.div>
        {/* 右半邊 - 圖片部分 Mobile*/}
        <motion.div
          variants={fadeIn('left', 'tween', 0.1, 1)} // 改用 fadeIn 保持一致
          className={` ${styles.flexCenter} flex sm:flex md:flex lg:hidden xl:hidden`}
        >
          <img
            src="/sxh.webp"
            alt="get-started"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SndSec;
