import React from 'react'
import {Link} from 'react-router-dom'

const NavBar:React.FC = () => {
  return (
   <nav className='bg-gray-800 p-4'>
    <ul className='flex space-x-4'>
    <li className='text-white'><Link to="/">Home</Link></li>
    <li className='text-white'><Link to="/myprofile">My Profile</Link></li>
    <li className='text-white'><Link to="/contactus">Contact Us</Link></li>
    <li className='text-white'><Link to="/login">Login</Link></li>
    <li className='text-white'><Link to="/signup">Sign Up</Link></li>
    </ul>
   </nav>
  )
}

export default NavBar