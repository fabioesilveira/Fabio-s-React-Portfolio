import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    year: 2020,
    title: 'Content Creator',
    duration: '',
    details:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, voluptates.',
  },
  {
    year: 2023,
    title: 'Education',
    duration: '',
    details:
      'Certificate in Full Stack Web Development - University of California - Berkeley ',
      
  },
  {
    year: 2015,
    title: 'Technical Skills',
    duration: '',
    details:
      'JavaScript ES6+, CSS3, HTML5, C#, C, GitHub, MySQL, NoSQL, MongoDB, Express, Node, Handlebars, jQuery, Bootstrap, MATLAB, and Unity',
  },
  {
    year: 2012,
    title: 'Expiriences',
    duration: '',
    details:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, voluptates.',
  },
];
const Work = () => {
  return (

    <div class="bg-violet-400" id='main'>
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl fotn-bold text-center text-[#001b5e]'>Resume</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
    </div>
  );
};

export default Work;
