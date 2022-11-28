import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    formState,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { message: '', subject: '', name: '', email: '' },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ message: '', subject: '', name: '', email: '' });
    }
  }, [formState, reset]);

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-evenly text-center'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[15px] text-gray-500 '>
        Contact
      </h3>

      <div className='mt-36 flex flex-col space-y-9 md:mt-10 md:flex-row'>
        <div className='mt-10 space-y-5 px-10 text-justify'>
          <h4 className='text-center text-2xl font-semibold'>
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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mx-auto flex w-fit flex-col space-y-2 px-[15%] md:px-0'
        >
          <input
            placeholder='Name'
            className='contactInput'
            type='text'
            {...register('name', { required: 'Name is required!' })}
          />
          <ErrorMessage
            errors={errors}
            name='name'
            render={({ message }) => (
              <p className='p-2 text-right text-red-500'>{message}</p>
            )}
          />

          <input
            placeholder='Email'
            className='contactInput'
            type='email'
            {...register('email', { required: 'Email is required!' })}
          />
          <ErrorMessage
            errors={errors}
            name='email'
            render={({ message }) => (
              <p className='p-2 text-right text-red-500'>{message}</p>
            )}
          />

          <textarea
            placeholder='Message'
            className='contactInput'
            {...register('message', { required: 'Message is required!' })}
          ></textarea>
          <ErrorMessage
            errors={errors}
            name='message'
            render={({ message }) => (
              <p className='p-2 text-right text-red-500'>{message}</p>
            )}
          />
          <button
            className='rounded-md bg-[#f7ab0a] py-5 px-5 text-center font-bold uppercase text-black'
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
