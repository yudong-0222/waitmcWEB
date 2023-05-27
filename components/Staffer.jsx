import styles from '../styles';

const Staffs = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#80fff2]`}
    >
      <img src={imgUrl} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <h1 className="mt-[26px] font-extrabold text-[36px] leading-[30.24px] text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[22px] text-[#f9f9f9] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default Staffs;
