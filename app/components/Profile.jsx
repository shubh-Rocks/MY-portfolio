import { easeInOut, motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import Popup from "./Popup";
const Profile = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="flex items-center gap-1.5 md:gap-3.5 ">
      <div className=" w-10 h-10 md:w-18 md:h-18 bg-amber-50 rounded-full  backdrop-blur-md right-50 mt-3 ">
        <Image
          className="object-cover w-full h-full rounded-full"
          src="/images/my.jpeg"
          alt="Logo"
          width={80}
          height={80}
          priority
        />
      </div>

      <motion.button
        onClick={() => setShowPopup(true)}
        whileHover={{
          scale: 1.1,
          
        }}
        transition={{
          duration: 0.6,
          ease: "circInOut",
        }}
        className=" w-12 md:w-25 h-5 md:h-10 bg-linear-to-r mt-3.5 from-red-400 to-orange-300 font-semibold text-[6px] md:text-[15px]  px-1 py-0.5 md:px-2.5 md:py-1.5 rounded-[15px] group"
      >
        About me
        <svg
          width="50px"
          height="50px"
          viewBox="-3.6 -3.6 31.20 31.20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          className="absolute rotate-270 mt-5  hidden lg:block w-12 lg:-translate-y-14 md:translate-x-18 group-hover:left-3"
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
      </motion.button>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Profile;
