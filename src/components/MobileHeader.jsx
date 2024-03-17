import { memo } from "react";
import Lottie from "react-lottie";
import right from "../../public/right.json";
import left from "../../public/left.json";

const MobileHeader = ({ setindex, index }) => {
  const rightOptions = {
    loop: true,
    autoplay: true,
    animationData: right,
  };
  const leftOptions = {
    loop: true,
    autoplay: true,
    animationData: left,
  };
  return (
    <div className="sm:hidden flex flex-row justify-between items-center w-[98vw] absolute z-50 top-7">
      <button onClick={() => setindex(index !== 0 ? index - 1 : 0)}>
        {index > 0 && (
          <div className="text-4xl">
            <Lottie options={leftOptions} height={100} width={100} />
          </div>
        )}
      </button>
      <button onClick={() => setindex(index !== 5 ? index + 1 : 5)}>
        {" "}
        {index < 5 && (
          <div className="text-4xl">
            <Lottie options={rightOptions} height={100} width={100} />
          </div>
        )}
      </button>
    </div>
  );
};

export default memo(MobileHeader);
