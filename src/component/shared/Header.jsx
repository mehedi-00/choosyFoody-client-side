/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import logo from '/assets/cf-logo.png'
import { Link, NavLink } from 'react-router-dom';
const Header = ({login}) => {
    
    return (
        // <div className='md:px-20 absolute w-full  font-popins  top-5 right-0  z-50 '>
        <div style={login && {background:'black', top: '0'}} className="md:px-20  w-full absolute  font-popins text-white top-5 right-0  z-50">
        <Navbar
            fluid={true}
            rounded={true}
             style={{background: 'transparent'}}
        >
            <Link to='/'>
                <img
                    src={logo}
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                </Link>
            
            <div className="flex md:order-2">
               
                   <Link to='/login' className='btn-primary'>Login</Link>
               
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse >
               <NavLink to='/' className={({ isActive }) =>(isActive ? 'text-primary text-xl' : ' text-xl') }>
                Home
                </NavLink>
               <NavLink to='/blog' className={({ isActive }) =>(isActive ? 'text-primary text-xl' : ' text-xl') }>
                Blog
                </NavLink>
               
            </Navbar.Collapse>
        </Navbar>
        
        </div>

    );
};

export default Header;