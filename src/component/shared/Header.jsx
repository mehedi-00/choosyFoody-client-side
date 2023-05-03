/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import logo from '/assets/cf-logo.png';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
const Header = ({ login }) => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = ()=>{
        logOut()
    }
    return (
        
        <div style={login && { background: 'black', top: '0' }} className="md:px-20  w-full absolute  font-popins text-white top-5 right-0  z-50">
            <Navbar
                fluid={true}
                rounded={true}
                style={{ background: 'transparent' }}
            >
                <Link to='/'>
                    <img
                        src={logo}
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                </Link>

                <div className="flex md:order-2">
                    {
                            user ? <>
                             <button onClick={handleLogOut} className='btn-primary'>logOUt</button>
                            </>:<Link to='/login' className='btn-primary'>Login</Link>

                    }

                    

                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse >
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'text-primary text-xl' : ' text-xl')}>
                        Home
                    </NavLink>
                    <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-primary text-xl' : ' text-xl')}>
                        Blog
                    </NavLink>

                </Navbar.Collapse>
            </Navbar>

        </div>

    );
};

export default Header;