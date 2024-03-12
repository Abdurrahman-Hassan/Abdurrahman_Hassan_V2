import { Suspense, lazy, memo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Model = lazy(() => import("@/components/Model"));
import Header from "./Header";
import ThreeDeffect from "./threeDaffect";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";
import MobileHeader from "./MobileHeader";
import PageTransition from "@/components/PageTransition";

import { Pacifico, Poppins } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Jupiter = () => {
  const router = useRouter();
  const prevLocation = router.asPath;

  useEffect(() => {
    const handleWheel = (event) => {
      const scrollDirection = event.deltaY > 0 ? "down" : "up";
      if (scrollDirection === "down") {
        router.push("/neptune");
      } else if (scrollDirection === "up") {
        router.push("/mars");
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  });

  return (
    <PageTransition location={router} prevLocation={prevLocation}>
      <section className="jupiter text-center h-[100vh] text-white w-[100vw] selection:bg-orange-400 flex flex-col justify-center items-center">
        <div className="w-[90vw] sm:w-[100vw] h-[100vh] flex sm:flex-row flex-col-reverse justify-end items-center">
          <div className="w-[90vw] sm:w-[800px] m-10 -mt-5 flex flex-col justify-center items-center">
            <Header location={"/mars"} />
            <MobileHeader location={"/mars"} />

            <ThreeDeffect>
              <h1
                style={pacifico.style}
                className="h-[100px] text-white text-[50px] mb-0 flex justify-center items-center text-center"
              >
                Projects
              </h1>
            </ThreeDeffect>
            <div
              style={poppins.style}
              className="text-[18px]  flex flex-col justify-center items-center"
            >
              <div className="sm:w-[600px] text-white flex flex-wrap flex-row gap-3 font-bold justify-center items-center">
                <ThreeDeffect>
                  <div className="skillring2 flex flex-col gap-1 justify-center items-center">
                    <Link
                      href={"https://blogy-platform.netlify.app/"}
                      target="_blank"
                      className="w-[100px]"
                    >
                      Blogging Platform
                    </Link>
                  </div>
                </ThreeDeffect>
                <ThreeDeffect>
                  <div className="skillring2 flex flex-col gap-1 justify-center items-center">
                    <Link
                      href={"https://neoweatherstation.netlify.app/"}
                      target="_blank"
                      className="w-[100px]"
                    >
                      Weather Station
                    </Link>
                  </div>
                </ThreeDeffect>
                <ThreeDeffect>
                  <div className="skillring2 flex flex-col gap-1 justify-center items-center">
                    <Link
                      href={"https://examplelanding01.netlify.app/"}
                      target="_blank"
                      className="w-[100px]"
                    >
                      Landing Page
                    </Link>
                  </div>
                </ThreeDeffect>
                <ThreeDeffect>
                  <div className="skillring2 flex flex-col gap-1 justify-center items-center">
                    <Link
                      href={"https://simple-url.netlify.app/"}
                      target="_blank"
                      className="w-[100px]"
                    >
                      Url Shortner
                    </Link>
                  </div>
                </ThreeDeffect>
                <ThreeDeffect>
                  <div className="skillring2 flex flex-col gap-1 justify-center items-center">
                    <Link
                      href={"https://movies-names.netlify.app/"}
                      target="_blank"
                      className="w-[100px]"
                    >
                      Movie Browser
                    </Link>
                  </div>
                </ThreeDeffect>
                <ThreeDeffect>
                  <div className="skillring2 flex flex-col gap-1 justify-center items-center">
                    <Link
                      href={"https://www.tajirxpress.com/"}
                      target="_blank"
                      className="w-[100px]"
                    >
                      TajirXpress
                    </Link>
                  </div>
                </ThreeDeffect>
                <ThreeDeffect>
                  <div className="skillring2 flex flex-col gap-1 justify-center items-center">
                    <Link
                      href={"https://www.alquddus.pk/"}
                      target="_blank"
                      className="w-[100px]"
                    >
                      Al Quddus
                    </Link>
                  </div>
                </ThreeDeffect>
              </div>
            </div>
          </div>
          <div className="w-[100vw] h-[180px] sm:w-[800px] sm:h-[800px] flex justify-center items-center sm:mb-[100px]">
            <Suspense fallback={<div></div>}>
              <Model img={"/jupiter.jpg"} />
            </Suspense>
          </div>
        </div>{" "}
        <MobileFooter location={"/neptune"} />
        <div className="sm:-mt-[100px] sm:relative sm:left-[130px]">
          <Footer location={"/neptune"} />
        </div>
      </section>
    </PageTransition>
  );
};

export default memo(Jupiter);
