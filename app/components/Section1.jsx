"use client";

import Image from "next/image";
import Link from "next/link";
import MatterBackground from "./MatterBackground";
import Header from "./Header";
import { animate } from "framer-motion";
import { motion } from "motion/react";

const Section1 = () => {
  const scrollToSection2 = () => {
    const element = document.getElementById("section-2");

    if (element) {
      const offset = element.offsetTop;

      animate(window.scrollY, offset, {
        type: "spring",
        stiffness: 100,
        damping: 20,
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    } else {
      console.error("Target section 'section-2' not found!");
    }
  };

  return (
    <div>
      <MatterBackground className="absolute hidden" />
      <section
        id="lolo"
        className="flex flex-col relative justify-between min-h-screen"
      >
        <Header />

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" relative  "
        >
          <div className="pointer-events-none   max-w-screen-lg mx-auto">
            <div className="absolute top-0 -translate-y-29 translate-x-20 sm:-translate-y-47 sm:translate-x-28 md:-translate-y-92 md:translate-x-30  lg:-translate-y-98 lg:translate-x-30">
              <Image
                src="/images/logo1.png"
                alt="Logo"
                width={900}
                height={900}
                priority
                className=" pointer-events-none w-[250] sm:w-[400px] lg:w-[800px] md:w-[750px] h-auto"
              />
            </div>

            <div className="text-white pointer-events-none  px-3.5 relative">
              <h1 className="pointer-events-none md:text-6xl sm:text-4xl text-2xl font-bold ">
                Shubh Mishra
              </h1>
              <p className="pointer-events-none font-medium text-[10px] md:text-[20px] text-amber-100 py-3 sm:py-6 md:py-8">
                Software Engineer
              </p>
            </div>
          </div>

          <ul className=" w-5 sm:w-7 text-[#b0b2c3] space-y-5 -mt-30 sm:-mt-49 absolute right-8 ml-auto ">
            <li>
              <Link
                href="https://www.linkedin.com/in/shubh-mishra001/"
                target="_blank"
              >
                <svg
                  className="hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                  />
                </svg>
              </Link>
            </li>

            <li>
              <Link href="https://github.com/shubh-Rocks" target="_blank">
                <svg
                  className="hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </Link>
            </li>

            <li>
              <Link href="mailto:smishra64310@gmail.com" target="_blank">
                <svg
                  className="hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                  />
                </svg>
              </Link>
            </li>

            <li>
              <Link href="https://t.me/Shubhmishraa001" target="_blank">
                <svg
                  className="hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z" />
                </svg>
              </Link>
            </li>
          </ul>
        </motion.div>

        <button
          onClick={scrollToSection2}
          className="bg-linear-to-r mb-15 from-red-400 to-orange-300 font-medium text-gray-800 w-30 h-10 cursor-pointer rounded-[15px] group self-center flex-col  hover:scale-110 ease-in-out duration-200"
        >
          Latest Work
          <svg
            width="50px"
            height="50px"
            viewBox="-3.6 -3.6 31.20 31.20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            className="absolute translate-x-8.5  mt-5  group-hover:-bottom-13"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.048"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 4V20M12 20L8 16M12 20L16 16"
                stroke="#fff"
                strokeWidth="1.44"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
      </section>
    </div>
  );
};

export default Section1;
