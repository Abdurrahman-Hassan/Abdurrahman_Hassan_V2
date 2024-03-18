import { Suspense, lazy, memo, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Model = lazy(() => import("@/components/Model"));
import Header from "./Header";
import ThreeDeffect from "./threeDaffect";
import MobileHeader from "./MobileHeader";

import { Pacifico, Oleo_Script } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const oleo = Oleo_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const Moon = ({ setindex, index }) => {
  /* const router = useRouter();

  const [navigate, setNavigate] = useState(false);

  useEffect(() => {
    if (navigate) {
      router.push("", "moon");
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
    <section className="moon text-center h-[100vh] text-white w-[100vw] selection:bg-teal-800 flex flex-col justify-center items-center">
      <div className="w-[90vw] sm:w-[100vw] h-[100vh] flex sm:flex-row flex-col-reverse justify-end items-center">
        <div className="w-[90vw] sm:w-[800px] m-10 -mt-5 flex flex-col justify-center items-center">
          <Header setindex={setindex} index={index} />
          <MobileHeader setindex={setindex} index={index} />
          <ThreeDeffect>
            <h1 style={pacifico.style} className="text-white text-[50px]">
              Versions
            </h1>
          </ThreeDeffect>
          <div
            style={oleo.style}
            className="text-[18px] flex flex-col justify-center items-center"
          >
            <ThreeDeffect>
              <div className="contactring w-[200px] h-[200px] rounded-full flex justify-center items-center text-center">
                <Link
                  href="https://v1-abdurrahmanhassan.netlify.app"
                  target="_blank"
                >
                  version 1
                </Link>
              </div>
            </ThreeDeffect>
          </div>
        </div>
        <div className="w-[100vw] h-[180px] sm:w-[800px] sm:h-[800px] flex justify-center items-center">
          {" "}
          <Suspense fallback={<div></div>}>
            <Model img={"/moon.jpg"} />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default memo(Moon);
