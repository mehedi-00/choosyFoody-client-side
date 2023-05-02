/* eslint-disable no-unused-vars */
import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import logo from '/assets/cf-logo.png'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='md:px-20 absolute w-full  font-popins  top-5 right-0  z-50 text-white '>
        <Navbar
            fluid={true}
            rounded={true}
             style={{background: 'transparent'}}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src={logo}
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                
            </Navbar.Brand>
            <div className="flex md:order-2">
               
                   <span className='btn-primary'>Login</span>
               
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