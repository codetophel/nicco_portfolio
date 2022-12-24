import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

const Header = () => {
  const onSubmit = () => {
    window.location.href = `mailto:nicodemusakande@gmail.com`;
  };
  return (
    <header className='sticky top-2 z-20 mx-auto flex max-w-7xl items-center justify-between px-5 md:top-0'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex items-center'
      >
        <SocialIcon
          url='https://twitter.com/daddienicco'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/nicodemus-akande/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://github.com/codetophel'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex cursor-pointer items-center text-gray-300'
      >
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
          onClick={onSubmit}
        />
        <p className='hidden text-sm uppercase text-gray-400 md:inline-flex'>
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
