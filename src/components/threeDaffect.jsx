import "atropos/css";
import Atropos from "atropos/react";
import { memo } from "react";

const ThreeDeffect = ({ children }) => {
  return (
    <div>
      <div className=" rounded-full">
        <Atropos
          className="my-atropos"
          activeOffset={100}
          shadow={false}
          highlight={0}
        >
          {children}
        </Atropos>
      </div>
    </div>
  );
};

export default memo(ThreeDeffect);
