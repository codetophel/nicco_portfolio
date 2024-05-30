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
          className='md:mt-30 mt-[250px] h-56 w-56 flex-shrink-0 rounded-full object-cover hover:animate-pulse md:h-[500px]  md:w-64 md:rounded-lg xl:h-[500px] xl:w-[500px]
          '
          src='/img/nicco.jpeg'
          alt='nicco_pic'
        />

        <div className='px:0 space-y-10 md:px-10'>
          <h4 className='mt-3 text-lg font-semibold uppercase md:mt-[300px] md:text-3xl'>
            Bio
          </h4>
          <p className='text-justify text-sm md:text-base'>
            I am a seasoned React Developer with over five years of hands-on
            experience in crafting highly responsive user interface components.
            My proficiency lies in translating complex designs into high-quality
            code using JavaScript, TypeScript, and ReactJS. I excel in frontend
            performance optimization and troubleshooting. Throughout my career,
            I have successfully delivered multiple projects leveraging
            technologies such as JavaScript (ES6), Node.js, Redux, and
            Express.js. Well-versed in using modern CSS frameworks like Tailwind
            and Bootstrap and have extensive experience with databases including
            MongoDB, MySQL, and Firestore. My strong grasp of data structures
            and algorithms enhances my software testing and automation
            capabilities. I am adept at using version control systems like Git
            and thrive in cloud-based development environments. I consistently
            meet deadlines and deliver quality results efficiently. Beyond the
            technical realm, I am an avid soccer and basketball fan. I enjoy
            playing soccer and watching movies in my free time.
          </p>
          <div className='top[-50%] absolute left-0 h-[500px] w-full -skew-y-12 bg-[#f7ab0a]/5'></div>
          <div className='bottom[-30%] absolute right-0 h-[500px] w-full -skew-y-6 bg-[#f7ab0a]/5'></div>
        </div>
    </motion.div>
  );
};

export default About;
