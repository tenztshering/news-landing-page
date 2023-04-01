import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const FeatureCard = ({ index, title }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-full blue-cyan-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-black-gradient rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col">
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

export default FeatureCard;
