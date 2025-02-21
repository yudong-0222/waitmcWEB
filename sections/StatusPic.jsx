'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const StatusPic = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
        <TypingText title="| Status" textStyles="text-center" />
        <TitleText title={<>WAIT Network Status</>} textStyles="text-center" />
            <div className="mt-[30px] flex flex-col">
                {/* <p>gay</p> */}
                <span className='text-[#ff38ba] m-auto text-4xl'>⭐伺服器封測中⭐</span> <br/>
                {/* <iframe className="w-[728px] h-[120px] max-w-[100%] border-transparent block m-auto hover:border-[#0E76BC]" src="https://sr-api.sfirew.com/server/waitmc.top/embed" /> */}
            </div>
            <div>
                <span className='text-fuchsia-400 flex justify-center text-2xl'>加入 Discord 以獲取最新消息！</span> <br/>
            </div>
        </motion.div>
    </section>
)

export default StatusPic