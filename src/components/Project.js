import React from 'react';
import { motion } from 'framer-motion';

const Project = ({ link, imgUrl, description, title }) => {
  return (
    <div className='place-items-center text-center'>
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
        className='mx-auto place-items-center'
      />
      <div>
        <a href={link}>
          <h4 className='text-center text-2xl font-semibold'> {title}</h4>
        </a>
        <p className='text-md pt-5'>{description}</p>
      </div>
    </div>
  );
};

export default Project;
