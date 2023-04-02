'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { AppStore } from '../components';
import { TypingText } from '../components/CustomTexts';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full h-screen relative flex justify-between max-sm:justify-center max-sm:flex-col max-sm:items-center overflow-hidden">
      <motion.div
        className={`${styles.paddingX} flex `}
        variants={slideIn('left', 'tween', 0.2, 1)}
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
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <div className="w-auto h-96 relative  max-sm:w-full">
          <Image
            quality={50}
            alt="BhutanNews"
            title="BhutanNews"
            src="/Hero.svg"
            width={500}
            height={500}
            priority={true}
            loading="eager"
            placeholder="blur"
            blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
          />
        </div>
      </motion.div>
      <div className="absolute bottom-32 max-sm:bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-ful bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, '');
