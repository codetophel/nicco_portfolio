import React from 'react';
import { motion } from 'framer-motion';

const Project = ({ link, imgUrl, description, title }) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className='place-items-center text-center cursor-pointer' onClick={handleClick}>
      <motion.img
        initial={{
          y: -300,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        src={imgUrl}
        alt=''
        className=' mx-auto cursor-pointer place-items-center'
      />
      <div>
        <h4 className='text-center text-2xl font-semibold'> {title}</h4>
        <p className='text:sm md:text-md px-5 pt-5 text-justify md:px-7'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Project;
