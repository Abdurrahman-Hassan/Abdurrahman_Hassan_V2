import { FaArrowDown } from "react-icons/fa";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";
import { memo, useState } from "react";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Footer = ({ setindex, index }) => {
  const text = ["S", "c", "r", "o", "l", "l", "-", "D", "o", "w", "n"];
  const [hoveredChar, setHoveredChar] = useState(null);
  const [arrowhover, setArrowhover] = useState(null);

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
    <button
      style={dancing.style}
      onClick={() => setindex(index !== 5 ? index + 1 : 5)}
      className="hidden sm:flex cursor-pointer flex-row justify-center items-center gap-4 relative z-10"
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
        <FaArrowDown />
      </motion.h4>
    </button>
  );
};

export default memo(Footer);
