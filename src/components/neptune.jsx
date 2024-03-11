import { useState, useRef, Suspense, lazy, memo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Model = lazy(() => import("@/components/Model"));
import Header from "./Header";
import ThreeDeffect from "./threeDaffect";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";
import MobileHeader from "./MobileHeader";
import PageTransition from "@/components/PageTransition";

import { BsGithub, BsMailbox, BsFillSendFill } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";

import emailjs from "@emailjs/browser";

import {
  Pacifico,
  Permanent_Marker,
  Montserrat_Alternates,
  Raleway,
} from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});
const raleway = Raleway({
  weight: ["400", "900"],
  subsets: ["latin"],
});
const montserrat_alt = Montserrat_Alternates({
  weight: "400",
  subsets: ["latin"],
});

const Neptune = () => {
  const inputRef = useRef(null);

  const [formmessage, setFormMessage] = useState("");
  const [formname, setFormName] = useState("");
  const [formemail, setFormEmail] = useState("");

  const router = useRouter();
  const prevLocation = router.asPath;

  useEffect(() => {
    const handleWheel = (event) => {
      const scrollDirection = event.deltaY > 0 ? "down" : "up";
      if (scrollDirection === "down") {
        router.push("/moon");
      } else if (scrollDirection === "up") {
        router.push("/jupiter");
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  });

  const sendmail = (e) => {
    e.preventDefault();
    console.log(formemail, formmessage, formname);
    if (formemail && formmessage && formname) {
      var templateParams = {
        from_name: formname,
        to_name: "Abdurrahman Hassan",
        message: `${formmessage} email: ${formemail}`,
        reply_to: "hanzalajj@gmail.com",
      };
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Your Message has been send successfully.");
            setFormMessage("");
            setFormName("");
            setFormName("");
          },
          function (error) {
            console.log("FAILED...", error);
            alert("Your Message Failed!");
          }
        );
    }
  };

  return (
    <PageTransition location={router} prevLocation={prevLocation}>
      <section className="neptune text-center h-[100vh] text-white w-[100vw] selection:bg-cyan-700 flex flex-col justify-center items-center">
        <div className="w-[90vw] sm:w-[100vw] h-[100vh] flex sm:flex-row flex-col-reverse justify-center items-center">
          <div className="w-[90vw] sm:w-[800px] m-10 -mt-5 flex flex-col justify-center items-center">
            <Header location={"/jupiter"} />
            <MobileHeader location={"/jupiter"} />
            <ThreeDeffect>
              <h1 style={pacifico.style} className="text-white text-[50px]">
                Contact
              </h1>
            </ThreeDeffect>
            <div
              style={marker.style}
              className="text-[18px] flex flex-row justify-center items-center"
            >
              <div className="flex flex-col justify-center items-center">
                <form
                  onSubmit={sendmail}
                  className="flex flex-col justify-center items-center gap-2"
                >
                  <div className="flex flex-col text-start w-[300px] justify-center items-center">
                    <label htmlFor="name" style={raleway.style}>
                      Name
                    </label>
                    <input
                      required
                      ref={inputRef}
                      style={montserrat_alt.style}
                      type="text"
                      id="name"
                      className="pl-2 font-semibold text-xl bg-transparent text-white border-2 border-[#FFD700] rounded-md outline-none focus:outline-none"
                      placeholder="John Doe"
                      defaultValue={formname}
                      onChange={(e) => setFormName(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col text-start w-[300px] justify-center items-center">
                    <label htmlFor="email" style={raleway.style}>
                      Email
                    </label>
                    <input
                      style={montserrat_alt.style}
                      required
                      type="email"
                      className="pl-2 font-semibold text-xl bg-transparent text-white border-2 border-[#FFD700] rounded-md outline-none focus:outline-none"
                      id="email"
                      placeholder="John@doe.com"
                      value={formemail}
                      onChange={(e) => setFormEmail(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col text-start w-[300px] justify-center items-center">
                    <label htmlFor="message" style={raleway.style}>
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      style={montserrat_alt.style}
                      id="message"
                      cols="25"
                      className="pl-2 font-semibold text-xl bg-transparent text-white border-2 border-[#FFD700] rounded-md outline-none focus:outline-none"
                      rows="3"
                      value={formmessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <ThreeDeffect>
                    <button
                      className="flex flex-row justify-center items-center text-center"
                      type="submit"
                    >
                      Send{" "}
                      <span>
                        <BsFillSendFill />
                      </span>
                    </button>
                  </ThreeDeffect>
                </form>
                <div className="flex flex-row justify-center items-center text-[10px] sm:text-[20px] w-[100vw] sm:w-[600px]">
                  <ThreeDeffect>
                    <Link
                      style={pacifico.style}
                      href={"mailto:hanzalajj@gmail.com"}
                      className="w-[120px]  contactring text-wrap flex flex-col justify-center items-center"
                      target="_blank"
                    >
                      <div>
                        <BsMailbox />
                      </div>
                      <p className="text-[10px] sm:text-[20px] m-0 p-0">
                        hanzalajj @gmail.com
                      </p>
                    </Link>
                  </ThreeDeffect>
                  <ThreeDeffect>
                    <Link
                      className="contactring text-wrap flex flex-col justify-center items-center"
                      style={pacifico.style}
                      href={"tel:+923112910773"}
                      target="_blank"
                    >
                      <div>
                        <AiOutlinePhone />
                      </div>
                      <p className="text-[10px] sm:text-[20px] m-0 p-0">
                        +92 3112910773
                      </p>
                    </Link>
                  </ThreeDeffect>
                  <ThreeDeffect>
                    <Link
                      className="contactring text-wrap flex flex-col justify-center items-center"
                      style={pacifico.style}
                      href={"https://www.google.com/maps/place/Karachi"}
                      target="_blank"
                    >
                      <div>
                        <CiLocationArrow1 />
                      </div>
                      <p className="text-[10px] sm:text-[20px] m-0 p-0">
                        Karachi, Pakistan
                      </p>
                    </Link>
                  </ThreeDeffect>
                  <ThreeDeffect>
                    <Link
                      className="hidden contactring text-wrap sm:flex flex-col justify-center items-center"
                      href={"https://github.com/Abdurrahman-Hassan"}
                      target="_blank"
                    >
                      <BsGithub />
                    </Link>
                  </ThreeDeffect>
                  <ThreeDeffect>
                    <Link
                      className="hidden contactring text-wrap sm:flex flex-col justify-center items-center"
                      href={
                        "https://www.linkedin.com/in/abdur-rahman-hassan-246709234"
                      }
                      target="_blank"
                    >
                      <FiLinkedin />
                    </Link>
                  </ThreeDeffect>
                  <div className="sm:hidden text-wrap flex flex-row gap-1 justify-center items-center">
                    <ThreeDeffect>
                      <Link
                        className="smallring"
                        href={
                          "https://www.linkedin.com/in/abdur-rahman-hassan-246709234"
                        }
                        target="_blank"
                      >
                        <FiLinkedin />
                      </Link>
                    </ThreeDeffect>
                    <ThreeDeffect>
                      <Link
                        className="smallring"
                        href={"https://github.com/Abdurrahman-Hassan"}
                        target="_blank"
                      >
                        <BsGithub />
                      </Link>
                    </ThreeDeffect>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100vw] h-[180px] sm:w-[800px] sm:h-[800px] flex justify-center items-center sm:mb-[100px]">
            {" "}
            <Suspense fallback={<div></div>}>
              <Model img={"/neptune.jpg"} />
            </Suspense>
          </div>
        </div>
        <MobileFooter location={"/moon"} />
        <div className="sm:-mt-[100px] sm:relative sm:left-[130px]">
          <Footer location={"/moon"} />
        </div>
      </section>
    </PageTransition>
  );
};

export default memo(Neptune);
