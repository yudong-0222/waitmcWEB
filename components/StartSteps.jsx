import styles from '../styles';

const NEWS = ({ number, title, subtitle }) => {
  const spilitText = subtitle.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      {index !== subtitle.length - 1 && <br />}
    </span>
  ));

  return (
    <div>
      {/* // Desktop Ver. */}
      <div className="hidden sm:block">
        <div className={`${styles.flexStart} flex-row`}>
          <div
            className={`${styles.flexCenter} w-[90px] h-[90px] rounded-[24px] bg-[#0A356D] border-transparent hover:border-[#0E76BC] hover:border-4 hover:cursor-default`}
          >
            <p className="font-extrabold text-[20px] text-white">
              {number}
            </p>
          </div>
          <div>
            <p className="ml-[30px] font-extrabold text-[24px] text-[#ffffff]">
              {title}
            </p>
            <p className="mt-[5px] ml-[30px] font-normal text-[16px] text-[#B0B0B0]">
              {spilitText}
            </p>
          </div>
        </div>
      </div>
      {/* //Mobile Ver. */}
      <div className="sm:hidden lg:hidden xl:hidden">
        <div className={`${styles.flexStart} flex-row`}>
          <div className="ml-[12px]">
            <p className="font-extrabold text-[24px] text-[#ffffff]">
              {title}
            </p>
            <p className="mt-[5px] font-normal text-[16px] text-[#B0B0B0]">
              {spilitText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NEWS;
