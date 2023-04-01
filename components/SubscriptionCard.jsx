'use client';

import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const SubscriptionCard = ({ index, title, description, link }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-full black-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-black-gradient rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        <p className="text-white text-sm">{description}</p>
      </div>
      <div className="text-center">
        <a href={link} className="bg-white text-black px-10 py-2 rounded-lg">
          Get it now
        </a>
      </div>
    </motion.div>
  </Tilt>
);

export default SubscriptionCard;
