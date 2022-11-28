import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-evenly px-10 pb-5 text-center md:flex-row'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[15px] text-gray-500 '>
        Contact
      </h3>

      <div className='mt-24 flex flex-col space-y-9 md:mt-10 md:flex-row'>
        <div className='mt-10 space-y-5 px-10 text-justify'>
          <h4 className='text-3xl font-semibold'>
            {' '}
            I've got what you need,{' '}
            <span className='text-[#f7ab0a]/70 '>let's talk </span>{' '}
          </h4>
          <div className='flex items-center justify-center space-x-5'>
            <PhoneIcon className='h-7 w-7 animate-pulse text-[#f7ab0a]/80' />
            <p className='text-lg'>+2348085586691</p>
          </div>
          <div className='flex items-center justify-center space-x-5 '>
            <EnvelopeIcon className='h-7 w-7 animate-pulse text-[#f7ab0a]/80' />
            <p className='text-lg'>nicodemusakande@gmail.com</p>
          </div>
          <div className='flex items-center justify-center space-x-5'>
            <MapPinIcon className='h-7 w-7 animate-pulse text-[#f7ab0a]/80' />
            <p className='text-lg'>Ibadan, Nigeria</p>
          </div>
        </div>

        <form className=' mx-auto flex w-fit flex-col space-y-2'>
          <div className='flex space-x-2'>
            <input placeholder='Name' className='contactInput' type='text' />
            <input
              placeholder='Email'
              className='contactInput'
              type='email'
              required
            />
          </div>

          <input placeholder='Subject' className='contactInput' type='text' />
          <textarea placeholder='Message' className='contactInput'></textarea>
          <button
            className='rounded-md bg-[#f7ab0a] py-5 px-5 text-center font-bold text-black'
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
