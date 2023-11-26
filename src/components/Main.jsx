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
    <div class="grid grid-cols-3 gap-0">
    
    <div class="bg-violet-400" id='main'>
      
      <div class="grid grid-col-span-2 ">
  
  <div className="relative bg-primary m-auto p-10 rounded-lg drop-shadow-lg" 
                >
                   <img 
                        alt="profile"
                        className="brightness-90 hover:filter-none transition duration-500 z-10 w-full max-w-[100px] md:max-w-[280px]"
                        src= {FabioPic}
                    />
                </div>

                <p className="mt-10 mb-7 text-sm text-center text-xl dark:bg-black">
                  ABOUT ME:
                </p>

                <p className="mt-10 mb-7 text-sm text-center text-base">
                Fabio Silveira is a web coding student at the University of California at Berkeley. He came to the United States from Brazil in 2019, at the age of 24, to pursue his education and improve his English skills. He decided to advance his career and follow his passion for web development. After living in Silicon Valley, the center of technology and innovation, for several years, he decided to attend UC Berkeley for web coding. He is currently studying how to design and develop websites and applications using various tools and languages. He is a hard-working and motivated learner who seeks new challenges and opportunities to excel.  
            </p>
                
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
                  'Future Software Developer!', // Deletes 'One' and types 'Two'
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
        </div></div></div>
  
        <div class="grid grid-2 bg-violet-400">

        
  
  
  
</div>
      

<div class="grid grid-3">
  <img
          className=' h-screen object-cover '
          src='https://media1.thehungryjpeg.com/thumbs2/ori_3741598_di6dqcwxee2mbzywde6sfqg6xcbz3tucsfusdivm_motherboard-tech-backgrounds-1.jpg'
          alt=''
        />
  
  
</div>
        
      



    </div>
   
  );
};

export default Main;
