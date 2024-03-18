import React, {
  memo,
  useState,
  useEffect,
  useRef,
  lazy,
  Suspense,
} from "react";


import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";

const Earth = lazy(() => import("@/components/Earth"));
const Loading = lazy(() => import("@/components/Loading"));
const Mars = lazy(() => import("@/components/mars"));
const Jupiter = lazy(() => import("@/components/jupiter"));
const Neptune = lazy(() => import("@/components/neptune"));
const Moon = lazy(() => import("@/components/moon"));
const Venus = lazy(() => import("@/components/venus"));

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
          {" "}
          {activeIndex === 0 && (
            <Suspense fallback={<Loading />}>
              <Venus setindex={setActiveIndex} index={activeIndex} />
            </Suspense>
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
          {activeIndex === 2 && (
            <Suspense fallback={<Loading />}>
              <Mars setindex={setActiveIndex} index={activeIndex} />
            </Suspense>
          )}
        </div>
        <div>
          {activeIndex === 3 && (
            <Suspense fallback={<Loading />}>
              <Jupiter setindex={setActiveIndex} index={activeIndex} />
            </Suspense>
          )}
        </div>
        <div>
          {activeIndex === 4 && (
            <Suspense fallback={<Loading />}>
              <Neptune setindex={setActiveIndex} index={activeIndex} />
            </Suspense>
          )}
        </div>
        <div>
          {activeIndex === 5 && (
            <Suspense fallback={<Loading />}>
              <Moon setindex={setActiveIndex} index={activeIndex} />
            </Suspense>
          )}
        </div>
      </AwesomeSlider>
    </div>
  );
};
export default memo(Home);
