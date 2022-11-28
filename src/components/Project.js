import React from 'react';
import { motion } from 'framer-motion';

const Project = ({ id, projects, imgUrl, description, title }) => {
  return (
    <div className='flex min-h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44'>
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
        src='https://firebasestorage.googleapis.com/v0/b/insta-clone-d89df.appspot.com/o/posts%2FrHA3YnXNrIBhKnV9FFgh%2Fimage?alt=media&token=84b3f591-89ac-43c2-9517-a1d3744ee027'
        alt=''
      />
      <div>
        <h4 className='text-center text-2xl font-semibold'>
          {' '}
          case study {id + 1} of {projects.length}: {title}
        </h4>
        <p className='text-md text-justify'>{description}</p>
      </div>
    </div>
  );
};

export default Project;
