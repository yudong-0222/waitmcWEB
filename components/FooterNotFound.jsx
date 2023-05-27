import React from 'react';
import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const FooterNotFound = () => (
  <div className="fixed bottom-0 left-0 w-full">
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
      id="footer22"
    >
      <div className="gradient-06" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">
              WAIT NETWORK
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Capybara © 2017 - 2023 Wait Network.
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
  </div>
);

export default FooterNotFound;
