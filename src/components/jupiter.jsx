import { Suspense, lazy, memo, useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const Model = lazy(() => import("@/components/Model"));
import Header from "./Header";
import ThreeDeffect from "./threeDaffect";
import Footer from "./Footer";
import MobileHeader from "./MobileHeader";

import { Pacifico, Poppins } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Jupiter = ({ setindex, index }) => {
  /* const router = useRouter();

  const [navigate, setNavigate] = useState(false);

  useEffect(() => {
    if (navigate) {
      router.push("", "jupiter");
      setNavigate(false); // Reset navigate state
    }
  }, [navigate, router]);

  useEffect(() => {
    // Trigger navigation after a delay
    const timer = setTimeout(() => {
      setNavigate(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []); // Empty dependency array to run once on mount
 */
  return (
    <section className="jupiter text-center h-[100vh] text-white w-[100vw] selection:bg-orange-400 flex flex-col justify-center items-center">
      <div className="w-[90vw] sm:w-[100vw] h-[100vh] flex sm:flex-row flex-col-reverse justify-end items-center">
        <div className="w-[90vw] sm:w-[800px] m-10 -mt-5 flex flex-col justify-center items-center">
          <Header setindex={setindex} index={index} />
          <MobileHeader setindex={setindex} index={index} />

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
      <div className="sm:-mt-[100px] sm:relative sm:left-[130px]">
        <Footer setindex={setindex} index={index} />
      </div>{" "}
    </section>
  );
};

export default memo(Jupiter);
