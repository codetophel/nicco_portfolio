import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '../ExperienceCard';

const Experience = () => {
  return (
    <motion.div className='relative mx-auto flex max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-justify md:flex-row'>
      <h3 className='absolute top-24 text-2xl uppercase tracking-[15px] text-gray-500 '>
        Experience
      </h3>

      <div className='md:mt-30 mx-auto mt-[7rem] items-center p-10'>
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;
