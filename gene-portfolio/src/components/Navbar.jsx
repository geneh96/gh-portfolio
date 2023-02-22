import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll'; //Allows for scrolling to other sections when interacting with navbar

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0097FF] text-white'>

      {/*menu*/}
      <ul className='hidden md:flex'> {/*md:flex allows to shown when hitting a break point width*/}
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact Me
          </Link>
        </li>
      </ul>
      {/*hamburger*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/*mobile menu*/}
      <ul className=
        {!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#4FB7FF] flex flex-col justify-center items-center'
      }>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick}  to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick}  to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick}  to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>
            Contact Me
          </Link>
        </li>
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