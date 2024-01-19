import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className={`${styles.innerWidth} mx-auto flex items-start gap-8`}>
        <a href="/" className="z-9999">
          <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white cursor-pointer z-9999">
            WAIT NETWORK
          </h2>
        </a>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-white text-extrabold">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] hover:border-y-2 border-indigo-500 ${
                active === nav.title ? 'text-white' : 'text-dimWhite'
              } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className="font-poppins font-bold text-[32px] ml-10">
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
              <span className="relative text-white">WAITMC.TOP</span>
            </span>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? '/close.svg' : '/menu.svg'}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-[#F5A931] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col text-white">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-dimWhite'
                  } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
