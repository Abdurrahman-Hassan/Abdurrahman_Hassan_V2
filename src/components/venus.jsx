import { Suspense, lazy, memo, useEffect, useState } from "react";

import { useRouter } from "next/router";

const Model = lazy(() => import("@/components/Model"));
import ThreeDeffect from "./threeDaffect";
import Footer from "./Footer";

import { Pacifico, Oleo_Script, Poppins } from "next/font/google";
import MobileHeader from "./MobileHeader";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const oleo = Oleo_Script({
  subsets: ["latin"],
  weight: ["400"],
});
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Venus = ({ setindex, index }) => {
  const router = useRouter();
  const [navigate, setNavigate] = useState(false);

  useEffect(() => {
    if (navigate) {
      router.push("", "venus");
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

  return (
    <section className="venus text-center w-[100vw] h-[100vh] text-white sm:w-[100vw] selection:bg-yellow-700 flex flex-col justify-center items-center">
      <div className="w-[90vw] sm:w-[100vw] h-[100vh] flex sm:flex-row flex-col-reverse justify-end items-center">
        <div className="w-[90vw] sm:w-[800px] m-10 -mt-5 flex flex-col justify-center items-center">
          <MobileHeader setindex={setindex} index={index} />

          <ThreeDeffect>
            <h1
              style={pacifico.style}
              className="text-white sm:text-[50px] text-[30px] mb-0 "
            >
              Who I Am
            </h1>
          </ThreeDeffect>
          <div
            style={poppins.style}
            className="text-[18px] flex flex-col justify-center items-center font-bold"
          >
            <p className="sm:text-[16px] text-[12px] text-center">
              Hello! I&apos;m Abdurrahman Hassan, a passionate Full-Stack
              Developer hailing from the vibrant city of Karachi, Pakistan. With
              a deep-rooted love for technology and a relentless pursuit of
              excellence, I&apos;ve honed my skills across a diverse range of
              cutting-edge technologies and frameworks.
            </p>
          </div>
          <div className="w-[800px] text-center flex flex-col justify-center items-center gap-2">
            <div>
              <h3 style={oleo.style} className="text-[20px]">
                Education
              </h3>
              <div style={poppins.style} className="w-[400px]">
                <h4>2021-Present</h4>
                <h5>Bachelor Degree in Software Engineering</h5>
                <h5>Virtual University of Pakistan</h5>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 style={oleo.style} className="text-[20px]">
                Experience
              </h3>

              <div
                style={poppins.style}
                className="flex flex-col sm:flex-row justify-center items-center gap-3"
              >
                <div className="w-[230px] flex flex-col justify-center items-center">
                  <h4>Jul 2023 - Present</h4>
                  <h5>Full-stack Next.js Developer</h5>
                  <h5>Tajir Xpress by Fusion4</h5>
                </div>
                <div className="w-[220px] flex flex-col justify-center items-center">
                  <h4>May 2023 - Jul 2023</h4>
                  <h5>Full-Stack Ionic Developer</h5>
                  <h5>NB Pvt Ltd</h5>
                </div>
                <div className="w-[220px] flex flex-col justify-center items-center">
                  <h4>Feb 2023 - Apr 2023</h4>
                  <h5>NextJS Developer</h5>
                  <h5>Al Quddus Pvt Ltd</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100vw] h-[180px] sm:w-[800px] sm:h-[800px] flex justify-center items-center sm:mb-[100px]">
          {" "}
          <Suspense fallback={<div></div>}>
            <Model img={"/venus.jpg"} />
          </Suspense>
        </div>
      </div>{" "}
      <div className="sm:-mt-[100px] sm:relative sm:left-[130px]">
        <Footer setindex={setindex} index={index} />
      </div>
    </section>
  );
};

export default memo(Venus);
