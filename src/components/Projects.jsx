import React from 'react';
import ProjectItem from './ProjectItem';
import ProjectItem2 from './ProjectItem2';
import ProjectItem3 from './ProjectItem3';
import ProjectItem4 from './ProjectItem4';
import ProjectItem5 from './ProjectItem5';
import ProjectItem6 from './ProjectItem6';
import TheClassicBlog1 from '../assets/TheClassicBlog1.png';
import WeatherDashboard from '../assets/WeatherDashboard.png';
import HypeRadar from '../assets/HypeRadar.png';
import WorkDay from '../assets/WorkDay.png';
import Password from '../assets/Password.png';
import TrackSaver from '../assets/TrackSaver.png'

const Projects = () => {
  return (

    <div class="bg-violet-400">
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='text-center py-8 text-lg' >
       Projects help us to achieve goals, learn new skills, and create something meaningful. I invite you to check out my projects below. Hove over each project and click over Githublink or DeployedLink and be redirected to my Github or Deployed aplication for each project.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={WeatherDashboard} title='Weather Dashboard' />
        <ProjectItem2 img={TheClassicBlog1} title='The Classic Blog' />
        <ProjectItem3 img={HypeRadar} title='Hype Radar' />
        <ProjectItem4 img={WorkDay} title='Work Day Scheduler' />
        <ProjectItem5 img={Password} title='Password Generator' />
        <ProjectItem6 img={TrackSaver} title='Track Saver' />
      </div>
      
    </div>
    </div>
  );
};

export default Projects;
