import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import FabioPic from '../assets/Fabio1.png';

const Main = () => {
  return (
    <div class= "bg-violet-400" id='main'>
      <img 
        className='w-64 h-screen object-cover '
        src='https://media1.thehungryjpeg.com/thumbs2/ori_3741598_di6dqcwxee2mbzywde6sfqg6xcbz3tucsfusdivm_motherboard-tech-backgrounds-1.jpg'
        alt=''
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/5'>
        <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl front-bold text-gray-800'>
            I'm Fabio Silveira
          </h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            I'm a
            <TypeAnimation
              sequence={[
                'Student', // Types 'One'
                2000, // Waits 1s
                'Student of Coding', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Future Developer!', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaTwitter className='cursor-pointer' size={20} /> 
            <FaFacebookF className='cursor-pointer' size={20} />
            <FaInstagram className='cursor-pointer' size={20} />
            <FaLinkedinIn className='cursor-pointer' size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
