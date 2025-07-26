import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
  >
    <div className="hidden sm:hidden md:hidden lg:flex xl:flex">
      <img
        src={imgUrl}
        alt="planet-01"
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      />
      {/* Desktop */}
      <div className="hidden md:flex lg:flex xl:flex w-full justify-between">
        <div className="items-center flex flex-row">
          <div className="md:ml-[62px] max-w-[650px]">
            <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
              {title}
            </h4>
            <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white ml-auto">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:flex xl:flex items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
            <img
              src="/arrow.svg"
              alt="arrow"
              className="w-[40%] h-[40%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Mobile */}
    <div className="sm:flex lg:hidden xl:hidden">
      <div className="flex justify-center">
        <img
          src={imgUrl}
          alt="planet-02"
          className="min-w-[270px] h-[250px] rounded-[32px] object-cover"
        />
      </div>
      <div className="w-full flex flex-row items-center">
        <div className="ml-[62px] max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white text-center">
            {title}
          </h4>
          <p className="mt-[8px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
