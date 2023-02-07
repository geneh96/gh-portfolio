import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#4FB7FF] text-white'>
      <div> 
        <img src={Logo} alt="Logo Image" style={{width: '50px'}}/> {/*Logo 1 placeholder*/}
      </div>

      {/*menu*/}
      <ul className='hidden md:flex'> {/*md:flex allows to shown when hitting a break point width*/}
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Contact Me</li>
      </ul>
      {/*hamburger*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/*mobile menu*/}
      <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#4FB7FF] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Experience</li>
        <li className='py-6 text-4xl'>Contact Me</li>
      </ul>

      {/*social icons*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li id='social-icon' className='w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00000050]'>
            <a className='flex justify-between items-center w-full'
              href="/">Linkedin<FaLinkedin size={30}/>
            </a>
          </li>
          <li id='social-icon' className='w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00000050]'>
            <a className='flex justify-between items-center w-full'
              href="/">Email<HiOutlineMail size={30}/>
            </a>
          </li>
          <li id='social-icon' className='w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00000050]'>
            <a className='flex justify-between items-center w-full'
              href="/">Resume<BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>

    </div>

  )
}

export default Navbar