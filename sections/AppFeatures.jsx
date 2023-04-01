"use client";

import { SectionWrapper } from "../hoc";
import { TypingText } from "../components/CustomTexts";
import { motion } from "framer-motion";
import { slideIn, textContainer, textVariant } from "../utils/motion";
import styles from "../styles";
import { features } from "../constants";

const AppFeatures = () => (
  <section>
    {features.map((feature, index) => {
      return (
        <div
          className={`${
            feature.direction == "left" && "flex-row-reverse"
          } flex justify-between items-center max-sm:flex-col gap-10 mt-40`}
          index={index}
        >
          <div className="w-1/2 max-sm:w-full">
            <motion.div variants={textVariant()} whileInView={true}>
              <h2 className={styles.sectionSubHeadText}>{feature.title}</h2>
            </motion.div>
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
          <motion.div
            variants={slideIn(feature.direction, "tween", 0.2, 1)}
            whileInView={true}
            className="w-1/2 max-sm:w-full"
          >
            <img src={feature.image} className="w-full h-96" />
          </motion.div>
        </div>
      );
    })}
  </section>
);

export default SectionWrapper(AppFeatures, "features");
