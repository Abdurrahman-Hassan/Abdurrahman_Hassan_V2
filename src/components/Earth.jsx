/* eslint-disable react/no-unescaped-entities */
import { Suspense, lazy, memo, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Model = lazy(() => import("@/components/Model"));
const ThreeDeffect = lazy(() => import("./threeDaffect"));
const Header = lazy(() => import("./Header"));
const PageTransition = lazy(() => import("./PageTransition"));
const Footer = lazy(() => import("./Footer"));
const MobileFooter = lazy(() => import("./MobileFooter"));
const MobileHeader = lazy(() => import("./MobileHeader"));

import { Pacifico, Oleo_Script, Poppins } from "next/font/google";
import Loading from "./Loading";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const oleo = Oleo_Script({
  subsets: ["latin"],
  weight: ["400"],
});
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Earth = () => {
  const [winsize, setWinsize] = useState(0);
  const router = useRouter();
  const prevLocation = router.asPath;

  useEffect(() => {
    setWinsize(window.screen.width.toFixed());
  }, []);

  if (winsize) {
    return (
      <PageTransition location={router} prevLocation={prevLocation}>
        <section className="earth text-center w-[100vw] h-[100vh] text-white sm:w-[100vw] selection:bg-emerald-800 flex flex-col justify-center items-center">
          <div className="w-[90vw] sm:w-[100vw] h-[100vh] flex sm:flex-row flex-col-reverse justify-end items-center">
            <div className="w-[90vw] sm:w-[800px] m-10 -mt-5 flex flex-col justify-center items-center">
              <Header location={"/venus"} />
              <MobileHeader location={"/venus"} />
              <ThreeDeffect>
                <div className="sm:mt-10 flex justify-center items-center w-[300px] h-[250px] -mb-5 -mt-10 sm:w-[400px] text-center ">
                  <h1
                    style={pacifico.style}
                    className=" text-[150px] text-center text-white bg-transparent sm:text-[200px] selection:bg-emerald-800"
                  >
                    AR
                  </h1>
                </div>
              </ThreeDeffect>
              <div
                style={oleo.style}
                className="text-[18px] flex flex-col justify-center items-center"
              >
                <h2>Abdurrahman Hassan</h2>
                <h3>Fullstack Developer</h3>
                <p
                  style={poppins.style}
                  className="text-[16px] text-center m-0"
                >
                  I'm Abdurrahman Hassan, a versatile Fullstack Developer
                  skilled in React, Next.js, MERN Stack, and more. I'm
                  passionate about creating user-centric web solutions that
                  simplify tasks and improve lives. In my free time, I love
                  diving into programming and exploring new tech. Let's
                  collaborate on your next project!
                </p>
                <a
                  className="skillring flex justify-center items-center rounded"
                  href="/Abdurrahman_Hassan.pdf"
                  download={`/Abdurrahman_Hassan.pdf`}
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="w-[100vw] h-[180px] sm:w-[800px] sm:h-[800px] flex justify-center items-center sm:mb-[100px]">
              {" "}
              <Suspense fallback={<div></div>}>
                {winsize < 640 ? (
                  <Model img={"/mobileearthmap.jpg"} />
                ) : (
                  <Model img={"/earthmap.jpg"} />
                )}
              </Suspense>
            </div>
          </div>{" "}
          <MobileFooter location={"/mars"} />
          <div className="sm:-mt-[100px] sm:relative sm:left-[130px]">
            <Footer location={"/mars"} />
          </div>
        </section>
      </PageTransition>
    );
  }
};

export default memo(Earth);
