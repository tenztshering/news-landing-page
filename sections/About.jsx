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
          Introducing the most convenient way to stay up-to-date on the latest
          news. Our mobile app delivers news in the form of PDFs straight to
          your device, allowing you to read on-the-go without any distractions
          or interruptions. With a sleek and intuitive design, our app makes it
          easy to access and browse through news articles from a variety of
          sources. Whether you're interested in current events, sports,
          entertainment, or technology, our app has something for everyone. Stay
          informed and never miss a beat with our mobile app.
        </motion.p>
      </div>
      <div className="w-1/2 max-sm:w-full">
        <Image
          alt="BhutanNews"
          quality={50}
          src="/mockup/Scene.svg"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
