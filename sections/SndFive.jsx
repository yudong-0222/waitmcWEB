import { motion } from 'framer-motion';
import { zoomIn } from '../utils/motion';

const SECTION_HEIGHT = 1500;

const SndFive = ({ scrollYProgress }) => {
  return (
    <div>
      {/* Desktop Verison */}
      <div className="hidden sm:block md:hidden lg:block xl:block">
        <motion.div
          className=""
          style={{
            height: `calc(${SECTION_HEIGHT}px + 100vh)`,
            // scale
          }}
        >
          <Backimg 
            url={"https://i.imgur.com/ePmppIY.png"} title={"寫實模式"} desc={"模擬真實戰場，寬闊平原上的軍事工藝，在壕溝與散兵坑中伏擊。雙方目標皆為「殲滅所有敵人」。"} />
        </motion.div>
      </div>
      {/* Mobile Verison */}
      <div className="block sm:block md:block lg:hidden xl:hidden">
        <motion.div
          className="relative"
        >
          <BackImgMobile url={"https://i.imgur.com/ePmppIY.png"} title={"寫實模式"} desc={"模擬真實戰場，寬闊平原上的軍事工藝，在壕溝與散兵坑中伏擊。雙方目標皆為「殲滅所有敵人」"} />
        </motion.div>
      </div>
    </div>
  );  
};
// Normal Background Image
const Backimg = ({ url, title, desc }) => {
  return(
    <motion.div 
      className="sticky top-0 h-screen w-full"
      initial="hidden"
      whileInView="show"
      viewport={{once: true ,amount:0.0}}
      variants={zoomIn(0, 0.2)}
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
// Normal Background Image
const BackImgMobile = ({ url, title, desc }) => {
  return(
    <motion.div 
      className="sticky top-0 h-screen w-full bg-center bg-no-repeat"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.0 }}
      variants={zoomIn(0, 0.2)}
      style={{
        backgroundImage: `url(${url})`
      }}
    >
        <TextBox info={title} desc={desc} />
    </motion.div>
  );
};
//Mobile MapInfo Image
const TextBox = ({ info, desc }) => {
  return (
    <motion.div
      variants={zoomIn(0.2, 0.1)} 
      initial="hidden"
      whileInView="show"
      viewport={{once: false ,amount:0.25}}
      className={`w-full max-w-xs sm:max-w-md bg-gray-700 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-lg 
        sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        z-10`}
    >
      <motion.h2 className="text-white text-[32px] sm:text-[64px] font-bold text-center">{info}</motion.h2>
      <p className="text-white text-[18px] mt-2">{desc}</p>
    </motion.div>
  );
};

export default SndFive;
