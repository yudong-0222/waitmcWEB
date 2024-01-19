import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex flex-col sm:max-w-[850px] min-w-[210px]">
    {/* Desktop layout */}
    <div className="hidden sm:flex items-center">
      <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
        <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
      </div>
      <div className="ml-4">
        <p className="font-normal text-[16px] text-[#B0B0B0] leading-[25px] whitespace-pre-line">
          {subtitle}
        </p>
      </div>
    </div>

    {/* Mobile layout */}
    <div className="sm:hidden">
      <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
        <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
      </div>
      <h1 className="mt-2 font-bold text-[24px] leading-[30.24px] text-white">
        {title}
      </h1>
      <p className="mt-2 font-normal text-[16px] text-[#B0B0B0] leading-[25px] whitespace-pre-line">
        {subtitle}
      </p>
    </div>

    {/* Desktop title */}
    <h1 className="hidden sm:block mt-2 font-bold text-[24px] leading-[30.24px] text-white">
      {title}
    </h1>
  </div>
);

export default NewFeatures;
