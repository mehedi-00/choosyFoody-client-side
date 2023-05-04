/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/cf-logo.png';
import { FaFacebook, FaInstagram, FaTwitter, FaYahoo, FaYoutube } from "react-icons/fa";
import { Card, Label, TextInput } from 'flowbite-react';
const Footers = () => {
  return (
    <footer className='md:px-20 '>

      <div className="grid md:grid-cols-3 gap-8 bg-slate-800 p-8 xs:mb-10">
        <div className='flex flex-col items-center md:items-start'>
          <Link>
            <img src={logo} alt="" />
          </Link>

          <div className='mt-auto'>
            <h4 className='my-5 text-lime-50'>AROUND THE WEB</h4>
            <ul className='flex space-x-2'>
              <li>
                <FaFacebook className='w-5 h-5 text-lime-50' />
              </li>
              <li>
                <FaTwitter className='w-5 h-5 text-lime-50' />
              </li>
              <li>
                <FaYahoo className='w-5 h-5 text-lime-50' />
              </li>
              <li>
                <FaYoutube className='w-5 h-5 text-lime-50' />
              </li>
              <li>
                <FaInstagram className='w-5 h-5 text-lime-50' />
              </li>
            </ul>
          </div>

        </div>
        <div className='flex flex-col items-center md:items-start'>
          <ul>
            <li className='my-8'>
              <Link to='/' className='text-lime-50 font-popins font-medium '>Home </Link>
            </li>
            <li className='mb-8'>
              <Link to='/blog' className='text-lime-50'>Blog </Link>
            </li>
            <li>
              <p className='text-lime-50'>About </p>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <h2 className='text-lime-100 mt-8 font-popins font-bold text-lg mb-8'>SubScribe Here</h2>

            <button  className='btn-primary '>Subscribe</button>
          
        </div>
      </div>
      <div className=' bg-slate-600  '>
        <h6 className='py-8 text-center text-lime-100 font-popins'>@copy write by <small className='font-vibes text-primary '>Mehedi</small></h6>
      </div>
    </footer>
  );
};

export default Footers;