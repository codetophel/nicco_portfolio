import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className='relative mx-auto mb-96 flex h-screen max-w-7xl flex-col items-center justify-evenly py-10 px-10 text-center md:flex-row md:text-left'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[15px] text-gray-500'>
        About
      </h3>
      <div className='flex items-center justify-evenly py-10 px-10 text-center md:flex-row md:text-left'>
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            className='md:mt-30 mt-[400px] h-56 w-56 flex-shrink-0 object-cover hover:animate-pulse md:h-[500px]  md:w-64 md:rounded-lg xl:h-[500px] xl:w-[500px]  rounded-lg
        '
            src='https://firebasestorage.googleapis.com/v0/b/insta-clone-d89df.appspot.com/o/posts%2FrHA3YnXNrIBhKnV9FFgh%2Fimage?alt=media&token=84b3f591-89ac-43c2-9517-a1d3744ee027'
            alt='nicco_pic'
          />

        <div className='px:0 space-y-10 md:px-10'>
          <h4 className='mt-3 text-lg font-semibold uppercase md:mt-[300px] md:text-3xl'>
            Bio
          </h4>
          <p className='text-justify text-sm md:text-base'>
            A highly efficient, hardworking, and talented professional who is
            dedicated to staying up to date with the latest trends and
            technologies in web applications designs and development. Effective
            leader with a background in managing and collaborating with diverse
            teams. I have over 3 years’ experience as a ReactJs developer. I
            used Industry best practices in solving problems and in delivering
            projects assigned to me. I have worked on multiple projects using
            technologies like Javascript (ES6), with the following frame works,
            Node.js, Redux, Express.js. Tailwind, Bootstrap, Databases such as
            MongoDB, MySql, Firestore. I have a dynamic understanding of data
            structure and algorithm with proven use in software testing and
            automation. I understand version controls technology like GIT, I
            work well with cloud based development tools such as Heroku, and
            Netlify. I’m able to deliver results as at when required without
            hassle. Outside of work, I’m a big soccer and basketball fan, I play
            soccer and see movies casually when I have the time.
          </p>
          <div className='top[-50%] absolute left-0 h-[500px] w-full -skew-y-12 bg-[#f7ab0a]/5'></div>
          <div className='bottom[-30%] absolute right-0 h-[500px] w-full -skew-y-6 bg-[#f7ab0a]/5'></div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
