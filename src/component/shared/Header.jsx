/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import logo from '/assets/cf-logo.png';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Loader from './Loader';

const Header = ({ login }) => {
    
    const { user, logOut ,loading } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    };
    if (loading) {
        return <Loader/>
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
                        alt=""
                    />
                </Link>

                <div className="flex md:order-2">
                    { user?
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="user" img={user?.photoURL} rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {
                                    user?.displayName
                                }
                            </span>
                            <span className="block truncate text-sm font-medium">
                            {user?.email}
                            </span>
                        </Dropdown.Header>
                        
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            <button onClick={handleLogOut}>Sign out</button>
                        </Dropdown.Item>
                    </Dropdown> :
                     <Link to='/login' className='btn-primary'>Login</Link>
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




// <Navbar
//   fluid={true}
//   rounded={true}
// >
//   <Navbar.Brand href="https://flowbite.com/">
//     <img
//       src="https://flowbite.com/docs/images/logo.svg"
//       className="mr-3 h-6 sm:h-9"
//       alt="Flowbite Logo"
//     />
//     <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
//       Flowbite
//     </span>
//   </Navbar.Brand>
//   <div className="flex md:order-2">
//     <Dropdown
//       arrowIcon={false}
//       inline={true}
//       label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
//     >
//       <Dropdown.Header>
//         <span className="block text-sm">
//           Bonnie Green
//         </span>
//         <span className="block truncate text-sm font-medium">
//           name@flowbite.com
//         </span>
//       </Dropdown.Header>
//       <Dropdown.Item>
//         Dashboard
//       </Dropdown.Item>
//       <Dropdown.Item>
//         Settings
//       </Dropdown.Item>
//       <Dropdown.Item>
//         Earnings
//       </Dropdown.Item>
//       <Dropdown.Divider />
//       <Dropdown.Item>
//         Sign out
//       </Dropdown.Item>
//     </Dropdown>
//     <Navbar.Toggle />
//   </div>
//   <Navbar.Collapse>
//     <Navbar.Link
//       href="/navbars"
//       active={true}
//     >
//       Home
//     </Navbar.Link>
//     <Navbar.Link href="/navbars">
//       About
//     </Navbar.Link>
//     <Navbar.Link href="/navbars">
//       Services
//     </Navbar.Link>
//     <Navbar.Link href="/navbars">
//       Pricing
//     </Navbar.Link>
//     <Navbar.Link href="/navbars">
//       Contact
//     </Navbar.Link>
//   </Navbar.Collapse>
// </Navbar>






















// 