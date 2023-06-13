import React from 'react';
import {Link} from 'react-router-dom';
import Home from './Home';
import News from './News';
import Contact from './Contact';
import About from './About';
const Navbar = () => {
  return (
    <div className='Nav'>
 <ul>
   
    <li className="li3"> <Link to="/">  Home</Link></li>
    <li className="li3"><Link to ="/contact"> Contact</Link> </li>
    <li className="li3"> <Link to="/news"> News</Link></li>
    <li className="li3"> <Link to="/about">About</Link> </li>
    
    {/* <a href='#!'>  Customers  Profiles</a> */}

    {/* <li className="li3"><a href='/nrc'>  Customers  Profiles</a> </li> */}
 </ul>
    </div>
  )
}

export default Navbar