"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import PhoneCanvas from "../components/canvas/Phone";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { AppStore } from "../components";
import { TypingText } from "../components/CustomTexts";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full h-screen mt-10 flex justify-between max-sm:flex-col max-sm:items-center overflow-hidden">
      <motion.div
        className={`${styles.paddingX} flex `}
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <div className="flex flex-col items-start">
          <h1 className={`${styles.heroHeadText}`}>
            Bhutan<span className="text-[#71d7ff]">News</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            One place for all the <br className="sm:block hidden" /> News in
            Bhutan
          </p>
          <div className="bg-gray-100 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-5 mt-10">
            <AppStore />
          </div>
          <div className="h-20 w-full mt-10">
            <TypingText title="The platform for media houses in Bhutan" />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {/* <PhoneCanvas /> */}
        <div className="w-auto h-4/6 relative  max-sm:w-full">
          <img alt="BhutanNews" fill title="BhutanNews" src="/Hero.svg" />
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Hero, "");
