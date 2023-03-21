import React from 'react'
import heroimg from '../heroimg.jpeg';
import { MdOutlineArrowForward } from 'react-icons/md';

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-amber-800 '>

      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div>
          <h2>I'm a Frontend Developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div>
          <button>Portfolio
            <span> <MdOutlineArrowForward/> </span>
              </button>
        </div>
      </div>
    </div>
  );
};

export default Home