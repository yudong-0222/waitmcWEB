import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => {
  const spilitText = subtitle.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      {index !== subtitle.length - 1 && <br />}
    </span>
  ));
  return (
    <div className="flex flex-col sm:max-w-[850px] min-w-[210px]">
      {/* Desktop layout */}
      <div className="hidden sm:flex items-center gap-8">
        {/* Desktop title */}
        <h1 className="hidden sm:block mt-2 font-bold text-[24px] leading-[30.24px] text-white">
          {title}
        </h1>
        <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
          <img src={imgUrl} alt="icon" className="w-2/3 h-2/3 object-contain" />
        </div>
        <div>
          <p className="font-normal text-[16px] text-[#B0B0B0] leading-[25px]">
            {spilitText}
          </p>
        </div>
      </div>
      {/* Mobile layout */}
      <div className="sm:hidden">
        <div className="flex flex-row">
          <div className="flex flex-row items-center gap-4">
            <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
              <img src={imgUrl} alt="icon" className="w-2/3 h-2/3 object-contain" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-[24px] text-white">
                {title}
              </h1>
            </div>
          </div>
        </div>
        <p className="mt-2 font-normal text-[16px] text-[#B0B0B0] leading-[25px]">
          {spilitText}
        </p>
      </div>
    </div>    
  )
}

export default NewFeatures;
