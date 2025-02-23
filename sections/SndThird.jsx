import React from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer,fadeIn } from '../utils/motion';
import { SNDTitle } from '../components/CustomTexts';

const SndThird = () => {
  return (
    <section className="relative z-[1] flex items-center justify-center 4k:mt-[58px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full flex lg:flex-row flex-col"
      >
        {/* 左半邊 - 圖片部分 Desktop */}
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)} // 改用 fadeIn 保持一致
          className={`w-full lg:w-1/2 relative ${styles.flexCenter} hidden sm:hidden lg:flex`}
        >
          <img
            src="https://i.imgur.com/iHaM6OZ.png"
            alt="get-started"
            className="w-full h-screen object-cover"
          />
        </motion.div>
        {/* 右半邊 - 文字部分 */}
        <div className="w-full lg:w-1/2 flex flex-col p-8">
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="text-[#FFFFFF] text-start sm:pl-[85px]"
          >
            <SNDTitle title={<>經典重現 復刻地圖</>} />
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.4, 1.3)}
            className="text-start mt-4 hidden sm:flex h-full pl-[0px] sm:pl-[85px] md:pl-[85px]"
          >
            <div className="flex flex-col">
              <span className="text-[#8d8d8d] text-[24px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                我們團隊復刻了 COD 中熱門經典的地圖：
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                <span className="text-white">
                  迫降陣地、哈克尼倉庫、槍火戰區、荒漠油廠
                </span>...等！
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">每一張地圖都經過精心設計與還原</span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                <span className="text-[#8d8d8d]">
                從建築結構到戰術場景、細節
                </span>
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                讓你能夠在 Minecraft 中的槍戰體驗更上一層樓！
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                <span className="text-gradient3">
                  立即加入我們的伺服器
                </span>
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                感受更高風險帶來的腎上腺素飆升
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                完全沉浸在真實的戰爭氛圍中。
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                從<span className="text-white">迫降陣地</span>的殘垣斷壁，到<span className="text-white">荒漠油廠</span>的開闊對峙
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                每一場戰鬥將徹底點燃你的熱情。
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                無論是衝鋒陷陣還是潛伏狙擊，現在就拿起武器
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                創造屬於自己的<span className="text-gradient4">傳奇故事</span>！
              </span>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="text-start mt-4 flex sm:hidden h-full pl-[10px]"
          >
            <div className="flex flex-col">
              <span className="text-[#8d8d8d] text-[24px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                我們團隊復刻了 COD 中熱門經典的地圖：
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                <span className="text-white">
                  迫降陣地、哈克尼倉庫、槍火戰區、荒漠油廠
                </span>...等！
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">每一張地圖都經過精心設計與還原</span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                <span className="text-[#8d8d8d]">
                從建築結構到戰術場景、細節
                </span>
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                讓你能夠在 Minecraft 中的槍戰體驗更上一層樓！
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                <span className="text-gradient3">
                  立即加入我們的伺服器
                </span>
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                感受更高風險帶來的腎上腺素飆升
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                完全沉浸在真實的戰爭氛圍中。
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                從<span className="text-white">迫降陣地</span>的殘垣斷壁，到<span className="text-white">荒漠油廠</span>的開闊對峙
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                每一場戰鬥將徹底點燃你的熱情。
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                無論是衝鋒陷陣還是潛伏狙擊，現在就拿起武器
              </span>
              <span className="text-[#8d8d8d] text-[36px] sm:text-[24px] lg:text-[24px] xl:text-[30px] 3xl:text-[56px]">
                創造屬於自己的<span className="text-gradient4">傳奇故事</span>！
              </span>
            </div>
          </motion.div>
        </div>
        {/* 右半邊 - 圖片部分 Mobile */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.1, 1)} // 改用 fadeIn 保持一致
          className={`${styles.flexCenter} flex sm:flex md:flex lg:hidden xl:hidden`}
        >
          <img
            src="https://i.imgur.com/iHaM6OZ.png"
            alt="get-started"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SndThird;
