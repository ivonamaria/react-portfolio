import React from 'react'
import heroimg from '../heroimg.png';
import { MdOutlineArrowForward } from 'react-icons/md';

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-indigo-900'>

      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Frontend Developer</h2>
          <p className='text-gray-500 py-4 max-m-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam vitae ipsum.</p>
          <button className='group text-white w-fit px-6 py-3 my-2 flex items-centers rounded-md bg-gradient-to-r from-indigo-200 to-indigo-500 cursor-pointer'>Projects
            <span className='group-hover:rotate-90 duration-300'> <MdOutlineArrowForward size={25} className='ml-1' /> </span>
          </button>
        </div>
        <div>
          <img src={heroimg} alt="profile" className='rounded-3xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  );
};

export default Home
