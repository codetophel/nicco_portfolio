import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <motion.div className='relative mx-auto mt-[50px] flex min-h-screen max-w-full flex-col items-center justify-evenly overflow-hidden  text-justify md:flex-row md:px-10'>
      <h3 className='absolute top-24 text-2xl uppercase tracking-[15px] text-gray-500 '>
        Experience
      </h3>

      <div className='md:mt-30 mx-auto mt-[7rem] w-full items-center justify-center space-x-5 p-10'>
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;
