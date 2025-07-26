import { motion, useTransform } from 'framer-motion';
import { zoomIn } from '../utils/motion';

const SECTION_HEIGHT = 1500;

const SndFour = ({ scrollYProgress }) => {
  return (
    <div>
      {/* Desktop Verison */}
      <div className="hidden sm:block md:block lg:block xl:block">
        <motion.div
          className=""
          style={{
            height: `calc(${SECTION_HEIGHT}px + 100vh)`,
            // scale
          }}
        >
          <Backimg url="https://i.imgur.com/NabwUOO.png" title="經典爆破" />\
          <Back2 url="https://i.imgur.com/LjWzTdG.png" />
        </motion.div>
      </div>
      {/* Mobile Verison */}
      <div className="block sm:block md:block lg:hidden xl:hidden">
        <motion.div
          className="relative"
        >
          <BackImgMobile url="https://i.imgur.com/NabwUOO.png" title="經典爆破" />\
          {/* <p>test123</p> */}
          <Back2Mobile url="https://i.imgur.com/LjWzTdG.png" />
        </motion.div>
      </div>
    </div>
  );
};

// Normal Background Image
const Backimg = ({url, title, desc}) => {
  return (
    <motion.div 
      className="sticky top-0 h-screen w-full"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true ,amount:0.0 }}
      variants={ zoomIn(0, 0.2) }
      style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
        <TextBox info={title} desc={desc} />
    </motion.div>
  );
};

const Back2 = ({ url }) => {
  return (
    <motion.div
      className="flex relative lg:sticky top-0 w-full lg:h-screen items-center justify-center"
      style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }}
    />
  );
};
// Mobile Background Image 
// Normal Background Image
const BackImgMobile = ({ url, title, desc }) => {
  return (
    <motion.div 
      className="sticky top-0 h-screen w-full bg-center bg-no-repeat"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.0 }}
      variants={ zoomIn(0, 0.2) }
      style={{
        backgroundImage: `url(${url})`
      }}
    >
        <TextBox info={title} desc={desc} />
    </motion.div>
  );
};
// Mobile MapInfo Image
const Back2Mobile = ({ url }) => {
  return (
    <motion.div
      className="relative w-full h-screen bg-center bg-no-repeat bg-contain"
      style={{
        backgroundImage: `url(${url})`,
      }}
    />
  );
};

const TextBox = ({ info, desc }) => {
  return (
    <motion.div
      variants={ zoomIn(0.2, 0.1) } 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false ,amount:0.25 }}
      className={`w-full max-w-xs sm:max-w-md bg-gray-700 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-lg 
        sticky
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        z-10`}
    >
      <motion.h2 className="text-white text-[32px] sm:text-[64px] font-bold text-center">{info}</motion.h2>
      <p className="text-white text-sm mt-2">{desc}</p>
    </motion.div>
  );
};

export default SndFour;
