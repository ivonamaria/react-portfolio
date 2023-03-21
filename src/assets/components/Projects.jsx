import React from 'react'
import arrayDestruct from './src/assets/portfolio/arrayDestruct'
import installNode from '../portfolio/installNode.jpg'
import navbar from '../portfolio/navbar.jpg'
import reactParallax from '../portfolio/reactParallax.jpg'
import reactSmooth from '../portfolio/reactSmooth.jpg'
import reactWeather from '../portfolio/reactWeather.jpg'

const Projects = () => {
    return (
    <div name='projects' className='bg-gradient-to-b from-black to-indigo-900 w-full text-white md:h-screen'>
<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
        <p className='py-6'>Check out my porfolio right here</p>
    </div>

<div className='grid sm:grid-cpls-2 md:gird-cols-3 gap-8 px-12 sm:px0'>
    <div className='shadow-md shadow-gray-600 rounded-lg'>
        <img src="{reactWeather}" alt=" " className='rounded-md duration-200 hover:scale-105' />
        <div>
            <button>Demo</button>
            <button>Code</button>
        </div>
    </div>
</div>

</div>


    </div>
    );
  
};

export default Projects