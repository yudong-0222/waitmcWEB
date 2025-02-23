'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TypingTitle = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`mt-[8px] font-bold md:text-[54px] text-[32px] text-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);

export const SmallTitle = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[24px] text-[12px] text-gray-400 ${textStyles}`}
  >
    {title}
  </motion.h2>
);

export const SNDTitle = ({ title, colour }) => (
  <motion.h1
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`font-bold sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[75px] 4k:text-[128px] text-[40px] ${colour}`}
  >
    {title}
  </motion.h1>
);
