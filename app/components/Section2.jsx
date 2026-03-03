import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const PROJECT_DATA = [
  {
    id: 1,
    title: " Expense Tracker",
    img: "/images/expens.png",
    description:
      "A user-friendly financial dashboard designed to simplify daily budget management and provide clear insights into personal spending habits. This solution helps users track income, expenses, savings, and financial goals in real time through intuitive visualizations and interactive components. Tech that are used in this project are #tailwind,#reactjs,#prisma,#nodejs  ",
  },
  {
    id: 2,
    title: "Shoe Company",
    img: "/images/shoeproject.png",
    description:
      "Developed a high-performance, responsive e-commerce application tailored for a premium shoe brand. The platform focuses on a seamless user experience, featuring fluid animations and a robust backend to handle product inventory and user transactions.The tech stack for this project are #nextjs,#nodejs,#postgresql,#tailwind ",
  },
  {
    id: 3,
    title: "Travel Story",
    img: "/images/travel.png",
    description:
      "A full-stack travel story web application that allows users to document and share their personal travel experiences in an organized and interactive way. The platform provides secure authentication, personalized content management, and dynamic search functionality to enhance user engagement. through high-res photography. In this project the tech i use are #tailwind,#reactjs,#prisma,#nodejs ",
  },
  {
    id: 4,
    title: "AI Ebook",
    img: "/images/bookproject.png",
    description:
      "An intelligent web application designed to help users plan, write, and export complete eBooks seamlessly in one integrated platform. The system leverages AI assistance to simplify the writing process, making content creation faster, more structured, and highly efficient. And tech are use in this project #tailwind,#reactjs,#mongodb,#nodejs ",
  },
];

export default function Section2() {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedItem ? "hidden" : "unset";
  }, [selectedItem]);

  return (
    <div
      id="section-2"
      className="p-4 flex flex-col justify-center items-center sm:p-8 md:p-12 min-h-screen bg-[#111]"
    >
      <h1 className="text-4xl md:text-6xl my-16 text-white font-bold tracking-tighter">
        Latest Work
      </h1>

      {/* 1. THE GRID WITH FLOATING HOVER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
        {PROJECT_DATA.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`}
            onClick={() => setSelectedItem(item)}
            whileHover={{
              y: -10, // The "Little bit of moving" on hover
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-[#111] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/5"
          >
            <motion.img
              layoutId={`image-${item.id}`}
              src={item.img}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* 2. THE MODAL WITH SPRING MOTION */}
            <motion.div
              layoutId={`card-${selectedItem.id}`}
              transition={{ type: "spring", damping: 20, stiffness: 150 }}
              className="relative w-full max-w-5xl bg-[#111] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh] border border-white/10"
            >
              {/* IMAGE SECTION - Soft scale-in */}
              <div className="w-full bg-[#1a1a1a] flex-shrink-0 flex items-center justify-center overflow-hidden">
                <motion.img
                  layoutId={`image-${selectedItem.id}`}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  src={selectedItem.img}
                  className="w-full h-auto max-h-[45vh] md:max-h-[55vh] object-contain"
                />
              </div>

              {/* 3. TEXT CONTENT - STAGGERED REVEAL */}
              <div className="p-4 md:p-8 ">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1, // This creates the "flowing" motion
                        delayChildren: 0.2,
                      },
                    },
                  }}
                >
                  <motion.h2
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    className="text-2xl md:text-5xl font-bold text-white"
                  >
                    {selectedItem.title}
                  </motion.h2>

                  <motion.p
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    className="mt-6 text-lg text-gray-400 max-w-5xl"
                  >
                    {selectedItem.description}
                  </motion.p>

                  <motion.div
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    className="mt-10 flex gap-4"
                  ></motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
