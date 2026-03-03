import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  User,
  AtSign,
  MessageSquare,
  Send,
  Copyright,
  CheckCircle,
  XCircle,
} from "lucide-react";

const Section3 = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const submithandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.target);

    // --- YOUR ACCESS KEY IS PLUGGED IN HERE ---
    formData.append("access_key", "581cf87e-03d4-4993-87ac-c483483a89f0");
    // This sets the Subject line of the email you receive
    formData.append("subject", "New Contact from Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset(); // Clears the form fields
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      // Auto-hide the status message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen px-6 py-20 w-full max-w-7xl mx-auto flex flex-col items-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center text-4xl md:text-6xl font-black text-white mb-16 tracking-tighter"
      >
        Let's Connect
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 w-full">
        {/* Animated Visual */}
        <motion.div
          className="w-full max-w-[300px] md:max-w-[450px]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/connector.png"
            alt="Contact me"
            width={500}
            height={600}
            layout="responsive"
            priority
            className="drop-shadow-[0_0_50px_rgba(1,154,66,0.2)]"
          />
        </motion.div>

        {/* Form Container */}
        <div className="w-full max-w-md bg-[#111] p-8 rounded-[2.5rem]">
          <form onSubmit={submithandler} className="space-y-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-gray-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <User size={14} /> Name
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="John Doe"
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:ring-2 focus:ring-[#019a42] transition-all"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-gray-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <AtSign size={14} /> Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:ring-2 focus:ring-[#019a42] transition-all"
              />
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label className="text-gray-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <MessageSquare size={14} /> Message
              </label>
              <textarea
                name="message"
                required
                placeholder="How can I help you?"
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:ring-2 focus:ring-[#019a42] transition-all h-32 resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-5 rounded-2xl font-bold text-white flex justify-center items-center gap-3 transition-all ${
                isSubmitting
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-[#019a42] hover:bg-[#01b54d] shadow-[0_10px_20px_rgba(1,154,66,0.3)]"
              }`}
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </motion.button>

            {/* Status Messages */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#019a42]/10 text-[#019a42] p-4 rounded-xl flex items-center gap-3 border border-[#019a42]/20"
                >
                  <CheckCircle size={20} />
                  <span className="text-sm font-medium">
                    Message sent successfully!
                  </span>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-red-500/10 text-red-500 p-4 rounded-xl flex items-center gap-3 border border-red-500/20"
                >
                  <XCircle size={20} />
                  <span className="text-sm font-medium">
                    Something went wrong. Try again.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>

      <footer className=" mt-10 flex flex-col justify-center items-center w-full ">
        <div className="text-white text-[12px] flex">
          <h5>Shubh Mishra</h5>

          <p className="flex gap-2">
            <Copyright className="mt-1 ml-2" size={12} strokeWidth={1.25} />
            2026
          </p>
        </div>

        <div className="text-white text-[12px] flex">
          <Image
            src="/images/logo1.png"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </div>

        <ul className=" w-50 flex gap-5 ml-15 mb-10 text-[#b0b2c3] ">
          <li className="w-7">
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

          <li className="w-7">
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

          <li className="w-7">
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
        </ul>
      </footer>
    </div>
  );
};

export default Section3;
