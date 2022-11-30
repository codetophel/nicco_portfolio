import React from 'react';
import Project from './Project';
import { motion } from 'framer-motion';

const Projects = ({ resumeData }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative z-0 mx-auto flex min-h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-center md:flex-row '
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[15px] text-gray-500 '>
        Projects
      </h3>

      <div className='grid-col-1 grid-col-1 z-20 mt-24 grid place-items-center justify-center p-10 lg:grid-cols-3 lg:gap-5 '>
        {resumeData.projects.map((project) => {
          return (
            <Project
              key={project.id}
              id={project.id}
              imgUrl={project.imgurl}
              link={project.link}
              description={project.description}
              title={project.name}
            />
          );
        })}
        <Project />
      </div>

      {/* <div className='top[-30%] absolute left-0 h-[500px] w-full -skew-y-3 bg-[#f7ab0a]/10'></div>
      <div className='top[-30%] absolute right-0 h-[500px] w-full -skew-y-6 bg-[#f7ab0a]/5'></div> */}
    </motion.div>
  );
};

export default Projects;
