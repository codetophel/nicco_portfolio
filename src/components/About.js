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
        className='md:mt-30 mt-[400px] h-56 w-56 flex-shrink-0 rounded-full object-cover p-3 hover:animate-pulse md:h-[600px]  md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]
        '
        src='https://firebasestorage.googleapis.com/v0/b/insta-clone-d89df.appspot.com/o/posts%2FrHA3YnXNrIBhKnV9FFgh%2Fimage?alt=media&token=84b3f591-89ac-43c2-9517-a1d3744ee027'
        alt='nicco_pic'
      />

      <div className='px:0 space-y-10 md:px-10'>
        <h4 className='mt-3 text-3xl font-semibold uppercase md:mt-[300px]'>
          Bio
        </h4>
        <p className='text-justify text-sm md:text-base'>
          Hi, I'm Akande Nicodemus based in Ibadan, Nigeria. An experienced
          React Developer with 3 years in the industry. Proficient with React.
          Used problem-solving aptitude to enhance application performance by
          14%. Created data visualization tools and integrated designs.
          Increased speed of product lifecycle and 100% of the time delivered
          projects within deadline. Seeking to work on projects to leverage
          experience with JavaScript to impress existing clients and obtain new
          ones. I have multiple projects using JavaScript(ES6), Frameworks:
          ReactJS, Redux, Node.js, Express.js, Tailwind, Bootstrap Databases:
          MongoDB, MySQL, Firestore. Concepts: Data Structures & Algorithms,
          Git, Netlify, Heroku, API Development, Model-View-Controller (MVC),
          Firebase, etc I'm able to deliver excellent results under a tight
          schedule. Outside of my tech life, I enjoy watching basketball,tennis
          and football. Also a big netflix fan.
        </p>
        <div className='top[-50%] absolute left-0 h-[500px] w-full -skew-y-12 bg-[#f7ab0a]/5'></div>
        <div className='bottom[-30%] absolute right-0 h-[500px] w-full -skew-y-6 bg-[#f7ab0a]/5'></div>
      </div>
    </motion.div>
  );
};

export default About;
