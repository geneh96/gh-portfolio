import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import ProPic from '../assets/profile-pic.png'

const Home = () => {

  return (
    <div name='home' className='w-full h-screen bg-[#4FB7FF]'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 py-19 flex flex-col justify-center h-full'>

            <div className='max-w-[1000px] w-full grid grid-auto-cou sm:grid-cols-2 gap-8 px-4'>
              <div>
              <p className='text-white'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white'>Gene Hernandez</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#0000009d]'>I'm a Software Engineer</h2>
                <p className='text-[#0000009d] py-4 max-w-[700px]'>I'm looking to grow more as a developer and seeking out 
                oppurtunites to evolve my skillset. 
                I love learning and collaborating with others!</p>
              </div>  
              <div className='py-12 px-14'>
                <img className='hidden md:flex' src={ProPic}/>
              </div>
            </div>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#3c87bd] hover:border-[#4FB7FF]'>
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                      <HiArrowNarrowRight className='ml-3'/>
                </span> 
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home