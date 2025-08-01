'use client';

import {motion} from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import Swal from 'sweetalert2';

function e() {
  const textToCopy = 'waitmc.top';

  const tempInput = document.createElement('input');
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);

  tempInput.select();
  document.execCommand('copy');

  document.body.removeChild(tempInput);

  Swal.fire({
    title: '複製成功',
    text: '已將伺服器 IP 複製到剪貼簿',
    icon: 'success',
    showConfirmButton: false,
    timer: 1500,
    toast: true,
  });
}

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div 
    variants={staggerContainer} 
    initial="hidden" 
    whileInView="show" 
    viewport={{once: true ,amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className='flex justify-center items-center flex-col relative z-10'>
        <motion.h1 variants={textVariant(1.1)}
        className={`${styles.heroHeading} pointer-events-none`}>
          WAIT
        </motion.h1>
        <motion.div
        variants={textVariant(1.2)}
        className='flex flex-row justify-center items-center pointer-events-none'>
            <h1 className={`${styles.heroHeading}`}>NET</h1>
            <h1 className={`${styles.heroHeading}`}>WORK</h1>
        </motion.div>
      </div>
      <motion.div
      variants={slideIn('right','tween',0.2,1)}
      className='relative w-auto md:-mt-[120px] -mt-[12px]'
      >
      <div className='absolute h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]' />
          <img 
          src="/h.webp" 
          alt="cover" 
          className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'/>
          <div className='flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
            <a onClick={e}>
              <img src="/copy.png" alt="stamp" className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain hover:cursor-pointer'/>
            </a>
          </div>
      </motion.div>
  </motion.div>
  </section>
);

export default Hero;
