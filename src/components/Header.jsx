import { FaArrowUp } from "react-icons/fa";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";
import { memo, useState } from "react";
import { useRouter } from "next/router";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Header = ({ location }) => {
  const text = ["S", "c", "r", "o", "l", "l", "-", "U", "p"];
  const [hoveredChar, setHoveredChar] = useState(null);
  const [arrowhover, setArrowhover] = useState(null);

  const router = useRouter();

  const handleHover = (char) => {
    setHoveredChar(char);
  };

  const handleLeave = () => {
    setHoveredChar(null);
  };

  const charVariants = {
    hover: {
      y: -1, // Animate scroll up by 1px
      scale: 3, // Increase size by 20%
      transition: { duration: 0.3 }, // Set animation duration
    },
    initial: {
      y: 0,
      scale: 1,
    },
  };

  return (
    <div
      style={dancing.style}
      onClick={() => {
        router.push(location);
      }}
      className="hidden sm:flex cursor-pointer flex-row justify-center items-center gap-4"
    >
      <div className="flex flex-row gap-3">
        {text.map((char, index) => (
          <motion.h4
            key={`char-${index}`}
            className="text-2xl" // Adjust font size as needed
            variants={charVariants}
            initial="initial"
            animate={hoveredChar === char ? "hover" : "initial"}
            onMouseEnter={() => handleHover(char)}
            onMouseLeave={handleLeave}
          >
            <span>{char}</span>
          </motion.h4>
        ))}
      </div>
      <motion.h4
        className="text-2xl" // Adjust font size as needed
        variants={charVariants}
        initial="initial"
        animate={arrowhover ? "hover" : "initial"}
        onMouseEnter={() => setArrowhover(true)}
        onMouseLeave={() => setArrowhover(false)}
      >
        <FaArrowUp />
      </motion.h4>
    </div>
  );
};

export default memo(Header);
{
  /* <div style={dancing.style} className="font-bold text-xl mt-5 flex flex-row">
      <div
        className="w-[150px] h-[150px] flex flex-col justify-center items-center"
        onClick={() => {
          setindex(0);
        }}
      >
        <Firstpage img={"/venus.jpg"} />
        <h4 className="-mt-[20px]">About</h4>
      </div>
      <div
        className="w-[150px] h-[150px] flex flex-col justify-center items-center"
        onClick={() => {
          setindex(1);
        }}
      >
        <Firstpage img={"/earthmap.jpg"} />
        <h4 className="-mt-[20px]">Home</h4>
      </div>{" "}
      <div
        className="w-[150px] h-[150px] flex flex-col justify-center items-center"
        onClick={() => {
          setindex(2);
        }}
      >
        <Firstpage img={"/mars.jpg"} />
        <h4 className="-mt-[20px]">Skills</h4>
      </div>
      <div
        className="w-[150px] h-[150px] flex flex-col justify-center items-center"
        onClick={() => {
          setindex(3);
        }}
      >
        <Firstpage img={"/jupiter.jpg"} />
        <h4 className="-mt-[20px]">Projects</h4>
      </div>
      <div
        className="w-[150px] h-[150px] flex flex-col justify-center items-center"
        onClick={() => {
          setindex(4);
        }}
      >
        <Firstpage img={"/neptune.jpg"} />
        <h4 className="-mt-[20px]">Contact</h4>
      </div>
      <div
        className="w-[150px] h-[150px] flex flex-col justify-center items-center"
        onClick={() => {
          setindex(5);
        }}
      >
        <Firstpage img={"/moon.jpg"} />
        <h4 className="-mt-[20px]">Version</h4>
      </div>
    </div> */
}
