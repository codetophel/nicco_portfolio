import React from 'react';
import 'animate.css';

const Skill = ({ img, proficiency }) => {
  return (
    <div className=' group relative flex cursor-pointer'>
      <img
        className='h-24 w-24 rounded-full border bg-[whitesmoke] object-cover filter transition duration-200 ease-in-out group-hover:grayscale dark:border-gray-500 md:h-28 md:w-28 xl:h-32 xl:w-32'
        src={img}
        alt='react_icon'
      />
      <div className='absolute z-0 h-24 w-24 rounded-full opacity-0 transition duration-200 ease-in-out group-hover:opacity-80 dark:group-hover:bg-white md:h-28 md:w-28 xl:h-32 xl:w-32'>
        <div className='flex h-full items-center justify-center'>
          <p className='text-2xl font-bold opacity-100 dark:text-black '>
            {proficiency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
