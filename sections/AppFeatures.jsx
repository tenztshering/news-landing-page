'use client';

import { SectionWrapper } from '../hoc';
import { TypingText } from '../components/CustomTexts';
import { motion } from 'framer-motion';
import { slideIn, textContainer, textVariant } from '../utils/motion';
import styles from '../styles';
import { features } from '../constants';
import Image from 'next/image';

const AppFeatures = () => (
  <div>
    {features.map((feature) => {
      return (
        <div
          className={`${
            feature.direction == 'left' && 'flex-row-reverse'
          } flex justify-between items-center max-sm:flex-col gap-10 mt-40`}
          key={feature.title}
        >
          <div className="w-1/2 max-sm:w-full">
            <div>
              <h2 className={styles.sectionSubHeadText}>{feature.title}</h2>
            </div>
            <motion.p
              variants={textContainer}
              initial="hidden"
              whileInView="show"
              className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi ipsam omnis consequatur. Consequatur, tempora repellat
              voluptatem cumque delectus accusamus doloribus necessitatibus, et
              culpa ullam explicabo quo provident labore debitis placeat?
            </motion.p>
          </div>
          <div className="w-1/4 max-sm:w-[60vw]">
            <Image
              src={feature.image}
              quality={100}
              width={50}
              height={50}
              loading="lazy"
              className="object-contain w-full"
            />
          </div>
        </div>
      );
    })}
  </div>
);

export default SectionWrapper(AppFeatures, 'features');
