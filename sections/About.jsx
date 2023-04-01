import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { textContainer, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Image from 'next/image';
import { TypingText } from '../components/CustomTexts';

const About = () => {
  return (
    <div className="flex justify-between items-center max-sm:flex-col gap-10">
      <div className="w-1/2 max-sm:w-full">
        <motion.div variants={textVariant()}>
          <TypingText title="| BhutanNews App" />
          <h2 className={styles.sectionHeadText}>About</h2>
        </motion.div>
        <motion.p
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          ipsam omnis consequatur. Consequatur, tempora repellat voluptatem
          cumque delectus accusamus doloribus necessitatibus, et culpa ullam
          explicabo quo provident labore debitis placeat?
        </motion.p>
      </div>
      <div className="w-1/2 max-sm:w-full">
        <Image
          alt="BhutanNews"
          quality={50}
          src="/mockup/Scene.svg"
          width={500}
          height={500}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
