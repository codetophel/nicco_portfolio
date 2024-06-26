import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = () => {
  return (
    <article className='mx-auto flex flex-shrink-0 flex-col items-center space-y-7 rounded-lg bg-[whitesmoke] p-10 text-center opacity-80 hover:opacity-100 dark:bg-[#292929]  md:w-[600px] xl:w-[900px]'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=' h-32 w-32 rounded-full object-cover object-center  xl:h-[200px] xl:w-[200px] '
        src='/img/nicco.jpeg'
        alt='nicco_pic'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-lg font-light md:text-3xl'>Frontend Developer</h4>
        <p className='text-md mt-1 font-bold md:text-2xl'>
          At Fireswitch Technologies
        </p>
        <div className='grid grid-cols-5 place-items-center gap-3 space-y-4  py-2 md:px-10'>
          <img
            className='h-7 w-7 rounded-full md:h-20 md:w-20'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
            alt='react_icon'
          />
          <img
            className='h-7 w-7 rounded-full md:h-20 md:w-20'
            src='https://cdn.cdnlogo.com/logos/m/56/materialize-css.svg'
            alt='materilaize_logo'
          />
          <img
            className='h-7 w-7 rounded-full md:h-20 md:w-20'
            src='https://cdn.cdnlogo.com/logos/t/58/tailwindcss.svg'
            alt='tailwindcss_logo'
          />
          <img
            className='h-7 w-7 rounded-full md:h-20 md:w-20'
            src='https://cdn.cdnlogo.com/logos/c/18/css.svg'
            alt='css_logo'
          />
          <img
            className='h-7 w-7 rounded-full md:h-20 md:w-20'
            src='https://cdn.cdnlogo.com/logos/h/90/html-5.svg'
            alt='html_logo'
          />
          <img
            className='h-7 w-7 rounded-full md:h-20 md:w-20'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxms_89DVmV1TlKo0oH9r3DxXe4o7fpez3Uk84kZ1GyiucnpoqR9IJUwbPWBGifosp7PY&usqp=CAU'
            alt='mongoDb'
          />
          <img
            className='h-7 w-7 rounded-full md:h-20 md:w-20'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmO962KmJdNhGGZubJ92-ZNzW3sXUYMqYdffbCc0j0cn4A9R-ANdM0B15cz8nonwVnxBw&usqp=CAU'
            alt=''
          />
          <img
            className='h-7 w-7 rounded-full md:h-20 md:w-20'
            src='https://cdn.cdnlogo.com/logos/j/69/javascript.svg'
            alt='javascript_logo'
          />

          <img
            className='h-7 w-7 rounded-full md:h-20 md:w-20'
            src='https://e7.pngegg.com/pngimages/205/650/png-clipart-node-js-javascript-software-developer-express-js-computer-software-node-js-logo-nodejs-thumbnail.png'
            alt='nodejs'
          />
          <img
            className='h-7 w-7 rounded-full md:h-20 md:w-20'
            src='https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png'
            alt=''
          />
        </div>
        <p className='py-5 uppercase text-gray-500'>Started: 2021 - present</p>

        <ul className='ml-5 list-disc space-y-4 px-0 text-left text-sm md:px-10'>
          <li>
            Developed full-stack web applications which processed, analyzed, and
            rendered data visually.
          </li>
          <li>
            Followed documentation to always remain up-to-speed on what needs to
            be updated in response to new release versions.
          </li>
          <li>
            Introduced Nextjs with React and Node.js for web applications,
            decreasing load times by implementing server side routing
          </li>
          <li>Implemented React Hooks to promote better component lifecycle</li>
          <li>Used Redux for state management of heavy web applications</li>
          <li>
            Planned, wrote, and debugged web applications and software with
            complete accuracy using latest React resources.
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
