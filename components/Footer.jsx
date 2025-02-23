import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = ({ gredient }) => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.xPaddings} py-8 relative`}
    id="footer"
  >
    <div className={`${gredient}`} />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      {/* <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          WAIT Network
        </h4>
        <a href="https://discord.gg/RNJQFYbjVp" rel="noopener noreferrer">
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#7289DA] rounded-[32px] gap-[12px]">
            <img
              src="/discord.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-bold text-[16px] text-white">
              加入 WAIT Discord
            </span>
          </button>
        </a>
      </div> */}
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            WAIT NETWORK
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Capybara © 2017 - 2025 WAIT Network.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a href={social.link} target="_blank" rel="noopener noreferrer" key={social.name}>
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
