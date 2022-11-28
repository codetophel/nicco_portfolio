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
      className='relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly py-10 px-10 text-center md:flex-row md:text-left'
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
        className='md:mt-30 md:h-95 mt-56 h-56 w-56 flex-shrink-0 rounded-full object-cover p-3 hover:animate-pulse  md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]
        '
        src='https://firebasestorage.googleapis.com/v0/b/insta-clone-d89df.appspot.com/o/posts%2FrHA3YnXNrIBhKnV9FFgh%2Fimage?alt=media&token=84b3f591-89ac-43c2-9517-a1d3744ee027'
        alt='nicco_pic'
      />

      <div className='px:0 space-y-10 md:px-10'>
        <h4 className='mt-3 text-3xl font-semibold uppercase md:mt-0'>Bio</h4>
        <p className='text-justify text-sm md:text-base'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
        <div className='top[-50%] absolute left-0 h-[500px] w-full -skew-y-12 bg-[#f7ab0a]/5'></div>
        <div className='bottom[-30%] absolute right-0 h-[500px] w-full -skew-y-6 bg-[#f7ab0a]/5'></div>
      </div>
    </motion.div>
  );
};

export default About;
