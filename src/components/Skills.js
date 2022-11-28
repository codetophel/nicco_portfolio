import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center text-center xl:flex-row xl:space-y-0 xl:px-10'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[15px] text-gray-500 '>
        Skills
      </h3>
      <h3 className='absolute top-36 text-lg capitalize tracking-[5px] text-gray-500 '>
        Hover for skill proficiency
      </h3>

      <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;