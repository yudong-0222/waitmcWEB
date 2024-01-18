import styles from '../styles';

const NEWS = ({ number, title, subtitle }) => (
  <div className={`${styles.flexStart} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[90px] h-[90px] rounded-[24px] bg-[#0A356D] border-transparent hover:border-[#0E76BC] hover:border-4 hover:cursor-default`}
    >
      <p className="font-extrabold text-[20px] text-white">
        {number}
      </p>
    </div>
    <div className='whitespace-pre-line'>
      <p className="ml-[30px] font-extrabold text-[24px] text-[#ffffff]">
        {title}
      </p>
      <p className="mt-[5px] ml-[30px] font-normal text-[16px] text-[#B0B0B0]">
        {subtitle}
      </p>
    </div>
  </div>
);

export default NEWS;
