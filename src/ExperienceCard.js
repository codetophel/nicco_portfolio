import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = () => {
  return (
    <article className='flex h-[fit-content] w-[500px] flex-shrink-0 snap-center flex-col items-center space-y-7 rounded-lg bg-[#292929] p-10 text-center opacity-40 hover:opacity-100 md:w-[600px] xl:w-[900px]'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=' h-32 w-32 rounded-full object-cover object-center  xl:h-[200px] xl:w-[200px] '
        src='https://firebasestorage.googleapis.com/v0/b/insta-clone-d89df.appspot.com/o/posts%2FrHA3YnXNrIBhKnV9FFgh%2Fimage?alt=media&token=84b3f591-89ac-43c2-9517-a1d3744ee027'
        alt='nicco_pic'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-3       xl font-light'>Frontend Developer</h4>
        <p className='mt-1 text-2xl font-bold'>At Fireswitch Technologies</p>
        <div className='my-2 flex space-x-3'>
          {/* tech used */}
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.cdnlogo.com/logos/t/58/tailwindcss.svg'
            alt='tailwindcss_logo'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.cdnlogo.com/logos/m/56/materialize-css.svg'
            alt='materilaize_logo'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.cdnlogo.com/logos/c/18/css.svg'
            alt='css_logo'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.cdnlogo.com/logos/h/90/html-5.svg'
            alt='html_logo'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxms_89DVmV1TlKo0oH9r3DxXe4o7fpez3Uk84kZ1GyiucnpoqR9IJUwbPWBGifosp7PY&usqp=CAU'
            alt='mongoDb'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.cdnlogo.com/logos/j/69/javascript.svg'
            alt='javascript_logo'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmO962KmJdNhGGZubJ92-ZNzW3sXUYMqYdffbCc0j0cn4A9R-ANdM0B15cz8nonwVnxBw&usqp=CAU'
            alt=''
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
            alt='react_icon'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://e7.pngegg.com/pngimages/205/650/png-clipart-node-js-javascript-software-developer-express-js-computer-software-node-js-logo-nodejs-thumbnail.png'
            alt='nodejs'
          />
        </div>
        <img
          className='h-10 w-10 rounded-full'
          src='https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png'
          alt=''
        />
        <p className='py-5 uppercase text-gray-500'>Started: 2021 - present</p>

        <ul className='ml-5 list-none space-y-4 text-justify text-lg'>
          <li>Things I did there</li>
          <li>Things I did there</li>
          <li>Things I did there</li>
          <li>Things I did there</li>
          <li>Things I did there</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
