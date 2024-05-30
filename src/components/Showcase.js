import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Showcase = () => {
  const [text] = useTypewriter({
    words: [
      `Hi, I'm Nicodemus Akande.`,
      `Your favorite React Developer`,
      'Frontend Developer',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className='flex-0 flex h-screen flex-col items-center justify-center space-y-0 overflow-hidden text-center
    '
    >
      <img
        className='relative mx-auto mb-5 h-32 w-32 rounded-full object-cover'
        src='/img/nicco.jpeg'
        alt='nicco_pic'
      />

      <div className=''>
        <h2 className='pb-2 text-sm uppercase tracking-[5px] text-gray-400  md:tracking-[10px] '>
          Software developer
        </h2>
        <h1 className='text-md font-semibold lg:text-3xl'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>

        <div className='pt-3'>
          <a href='#about'>
            <button className='showcase-btn'>About</button>
          </a>
          <a href='#experience'>
            <button className='showcase-btn'>Experience</button>
          </a>
          <a href='#skills'>
            <button className='showcase-btn'>Skills</button>
          </a>
          <a href='#project'>
            <button className='showcase-btn'> Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
