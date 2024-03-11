import Lottie from "react-lottie";
import animationData from "../../public/loading.json";
const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pointer-events-none w-[100vw] h-[100vh] flex justify-center items-center">
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

export default Loading;
