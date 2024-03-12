import { Suspense, lazy, memo, useEffect } from "react";
import { useRouter } from "next/router";

const Model = lazy(() => import("@/components/Model"));
import Header from "./Header";
import ThreeDeffect from "./threeDaffect";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";
import MobileHeader from "./MobileHeader";
import PageTransition from "./PageTransition";

import { Pacifico, Poppins } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Mars = () => {
  const router = useRouter();
  const prevLocation = router.asPath;

  useEffect(() => {
    const handleWheel = (event) => {
      const scrollDirection = event.deltaY > 0 ? "down" : "up";
      if (scrollDirection === "down") {
        router.push("/jupiter");
      } else if (scrollDirection === "up") {
        router.push("/");
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  });

  return (
    <PageTransition location={router} prevLocation={prevLocation}>
      <section className="mars text-center h-[100vh] text-white w-[100vw] selection:bg-red-700 flex flex-col justify-center items-center">
        <div className="w-[90vw] sm:w-[100vw] h-[100vh] flex sm:flex-row flex-col-reverse justify-end items-center">
          <div className="w-[90vw] sm:w-[800px] m-10 -mt-5 flex flex-col justify-center items-center">
            <Header location={"/"} />
            <MobileHeader location={"/"} />
            <ThreeDeffect>
              <h1
                style={pacifico.style}
                className="h-[100px] text-white text-[50px] mb-0 flex justify-center items-center text-center"
              >
                Skills
              </h1>
            </ThreeDeffect>
            <div
              style={poppins.style}
              className="text-[18px] flex flex-col justify-center items-center"
            >
              <div className="sm:w-[600px] text-white flex flex-wrap flex-row gap-3 font-bold justify-center items-center">
                <ThreeDeffect>
                  <ol className="skillring  flex flex-col gap-1 justify-center items-center">
                    <li className="">HTML</li>
                    <li className="">CSS</li>
                    <li className="">JAVASCRIPT</li>
                    <li className="">REACT</li>
                  </ol>
                </ThreeDeffect>
                <ThreeDeffect>
                  <ol className="skillring flex flex-col gap-1 justify-center items-center">
                    <li className="z-10">NEXT.JS</li>
                    <li className="z-10">FLUTTER</li>
                    <li className="z-10">REDUX</li>
                    <li className="z-10">DART</li>
                  </ol>
                </ThreeDeffect>
                <ThreeDeffect>
                  <ol className="skillring flex flex-col gap-1 justify-center items-center">
                    <li className="z-10">SUPABASE</li>
                    <li className="z-10">FIREBASE</li>
                    <li className="z-10">SANITY</li>
                    <li className="z-10">STRAPI</li>
                  </ol>
                </ThreeDeffect>
                <ThreeDeffect>
                  <ol className="skillring flex flex-col gap-1 justify-center items-center">
                    <li className="z-10">NODEJS</li>
                    <li className="z-10">SQL</li>
                    <li className="z-10">MONGODB</li>
                    <li className="z-10">GITHUB</li>
                  </ol>
                </ThreeDeffect>
                <ThreeDeffect>
                  <ol className="text-nowrap skillring flex flex-col gap-1 justify-center items-center">
                    <li className="z-10">BLOCK CHAIN</li>
                    <li className="z-10">SMART CONTRACT</li>
                    <li className="z-10">THREEJS</li>
                    <li className="z-10">FIGMA</li>
                  </ol>
                </ThreeDeffect>
              </div>
            </div>
          </div>
          <div className="w-[100vw] h-[180px] sm:w-[800px] sm:h-[800px] flex justify-center items-center sm:mb-[100px]">
            {" "}
            <Suspense fallback={<div></div>}>
              <Model img={"/mars.jpg"} />
            </Suspense>
          </div>
        </div>{" "}
        <MobileFooter location={"/jupiter"} />
        <div className="sm:-mt-[100px] sm:relative sm:left-[130px]">
          <Footer location={"/jupiter"} />
        </div>
      </section>
    </PageTransition>
  );
};

export default memo(Mars);
