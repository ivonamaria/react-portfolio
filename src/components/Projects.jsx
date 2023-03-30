import React from 'react';
import mentalmap from '../assets/portfolio/mentalmap.png';
import weather from '../assets/portfolio/weather.png';
import password from '../assets/portfolio/password.png';


const Projects = () => {
  const projects = [
    {
      id: 1,
      src: weather,
      demoLink: 'https://ivonamaria.github.io/MyWeatherApplicationDashboard/',
      codeLink: 'https://github.com/ivonamaria/MyWeatherApplicationDashboard',
    },
    {
      id: 2,
      src: password,
      demoLink: 'https://ivonamaria.github.io/password-creator/',
      codeLink: 'https://github.com/ivonamaria/password-creator',
    },
    {
      id: 3,
      src: mentalmap,
      demoLink: 'https://mental-health-map.netlify.app/',
      codeLink: 'https://github.com/ivonamaria/mental-map',
    },
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-700 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
        <h1 className="text-4xl font-bold mb-6 inline border-b-4 border-gray-500">PROJECTS</h1>

          <p className="py-6">Check out my portfolio</p>
        </div>
        

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-between">
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                </a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

