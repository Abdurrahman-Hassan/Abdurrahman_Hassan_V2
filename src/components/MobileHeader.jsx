import { FaArrowLeft } from "react-icons/fa";
import { Dancing_Script } from "next/font/google";
import { memo } from "react";
import { useRouter } from "next/router";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const MobileHeader = ({ location }) => {
  const router = useRouter();
  return (
    <div
      style={dancing.style}
      onClick={() => {
        router.push(location);
      }}
      className="sm:hidden block cursor-pointer absolute top-10 left-5 z-10"
    >
      <div className="text-4xl">
        <FaArrowLeft />
      </div>
    </div>
  );
};

export default memo(MobileHeader);
