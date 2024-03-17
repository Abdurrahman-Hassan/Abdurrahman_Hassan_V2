import React, {
  memo,
  useState,
  useEffect,
  useRef,
  lazy,
  Suspense,
} from "react";

const Earth = lazy(() => import("@/components/Earth"));

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";

import Loading from "@/components/Loading";
import Mars from "@/components/mars";
import Jupiter from "@/components/jupiter";
import Neptune from "@/components/neptune";
import Moon from "@/components/moon";
import Venus from "@/components/venus";

const Home = () => {
  const awesomeSliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [maxIndex, setMaxIndex] = useState(1);

  useEffect(() => {
    const handleWheel = (event) => {
      const scrollDirection = event.deltaY > 0 ? "down" : "up";
      setMaxIndex(awesomeSliderRef.current.media.length - 1);

      setActiveIndex((prevIndex) => {
        if (scrollDirection === "down") {
          return Math.min(prevIndex + 1, maxIndex);
        } else if (scrollDirection === "up") {
          return Math.max(prevIndex - 1, 0);
        } else {
          return prevIndex;
        }
      });
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeIndex, maxIndex]);

  return (
    <div className="awesome">
      <AwesomeSlider
        animation="foldOutAnimation"
        infinite={false}
        transitionDelay={100}
        bullets={false}
        buttons={false}
        mobileTouch={false}
        ref={awesomeSliderRef}
        selected={activeIndex}
        className=" overflow-hidden w-[100vw] h-[100vh]"
      >
        <div>
          {activeIndex === 0 && (
            <Venus setindex={setActiveIndex} index={activeIndex} />
          )}
        </div>
        <div>
          {" "}
          {activeIndex === 1 && (
            <Suspense fallback={<Loading />}>
              <Earth setindex={setActiveIndex} index={activeIndex} />
            </Suspense>
          )}
        </div>
        <div>
          {" "}
          {activeIndex === 2 && (
            <Mars setindex={setActiveIndex} index={activeIndex} />
          )}
        </div>
        <div>
          {" "}
          {activeIndex === 3 && (
            <Jupiter setindex={setActiveIndex} index={activeIndex} />
          )}
        </div>
        <div>
          {" "}
          {activeIndex === 4 && (
            <Neptune setindex={setActiveIndex} index={activeIndex} />
          )}
        </div>
        <div>
          {" "}
          {activeIndex === 5 && (
            <Moon setindex={setActiveIndex} index={activeIndex} />
          )}
        </div>
      </AwesomeSlider>
    </div>
  );
};
export default Home;
