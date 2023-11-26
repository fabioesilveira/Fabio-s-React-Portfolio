import React from 'react';

const ProjectItem = ({ img, title }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
      <img src={img} alt='/' className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>Server-Side APIs: 5 Day Weather Dashboard</p>
        <a href='https://github.com/fabioesilveira/Weather-Prediction'>
          <p className='text-center p-3 rounded-ld bg-white text-gray-700 font-bold cursor-pointer text-lg'>
            GithubLink
          </p>
        </a>
        
        <a href='https://fabioesilveira.github.io/Weather-Prediction/'>
          <p className='text-center p-3 rounded-ld bg-white text-gray-700 font-bold cursor-pointer text-lg'>
            DeployedLink
          </p>
        </a>
        
      </div>
    </div>

    
  );
};



export default ProjectItem;


