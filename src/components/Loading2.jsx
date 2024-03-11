import Lottie from "react-lottie";
import animationData from "../../public/loading.json";
const Loading2 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pointer-events-none h-[100vh] flex justify-center items-center">
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

export default Loading2;
