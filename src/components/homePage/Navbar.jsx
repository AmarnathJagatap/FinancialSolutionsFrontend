import { Button } from '@mui/material';
import React, { useState,useContext,useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-scroll';
import { UserContext } from '../../Context/UserContext';

const Navbar = () => {
  const navigate=useNavigate();
  const [nav, setNav] = useState(false);
  const context = useContext(UserContext)
  const { getuser, userloggedin } = context;
  const Logout = () =>{
    localStorage.removeItem('accesstoken');
    localStorage.removeItem('refreshtoken');
    navigate("/login")
  }
  useEffect(() => {
    getuser();
    console.log(userloggedin)
  }, [userloggedin])
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Financial Solutions</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 cursor-pointer'><Link to="Hero"  spy={true} smooth={true}>Home</Link></li>
        <li className='p-4 cursor-pointer'><Link to="Analytics"  spy={true} smooth={true}>Company</Link></li>
        <li className='p-4 cursor-pointer'><Link to="Know" spy={true} smooth={true}>Know</Link></li>
        <li className='p-4 cursor-pointer'><Link to="Services" spy={true} smooth={true}>Services</Link></li>
        {userloggedin?
        <li className='p-4 cursor-pointer'><Button variant='contained' color="success" onClick={()=>{navigate("/dashboard")}}>Dashboard</Button></li>
        :
        <li className='p-4 cursor-pointer'><Button variant='contained' color="success" onClick={()=>{navigate("/login")}}>Login</Button></li>}
         {userloggedin?
        <li className='p-4 cursor-pointer'><Button variant='outlined' color="error" onClick={()=>{Logout()}}>Logout</Button></li>
        :
        <></>}
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <li className='p-4 border-b border-gray-600'><Link to="Hero">Home</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="Analytics">Company</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="Know">Know</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="Services">Services</Link></li>
          {userloggedin?
        <li className='p-4 cursor-pointer'><Button variant='contained' color="success" onClick={()=>{navigate("/dashboard")}}>Dashboard</Button></li>
        :
        <li className='p-4 cursor-pointer'><Button variant='contained' color="success" onClick={()=>{navigate("/login")}}>Login</Button></li>}
         {userloggedin?
        <li className='p-4 cursor-pointer'><Button variant='outlined' color="error" onClick={()=>{Logout()}}>Logout</Button></li>
        :
        <></>}
      </ul>
    </nav>
  );
};

export default Navbar;
