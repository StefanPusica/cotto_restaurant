import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { IoCallOutline } from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa';

import './TopNav.css';

export default function TopNav() {
  return (
    <div className='TopNav' id='top'>
        <div className='container-top-nav'>
            <div className='top-nav-holder'>
                <div className='top-nav-holder-left-side'>
                    <div className='top-nav-holder-left-side-work-time'>
                        <IoTimeOutline className='icons-top-nav' />
                        <p>10:00h - 22:00h</p>
                    </div>
                    <div className='top-nav-holder-left-side-phone'>
                        <a href='tel:064555555'><IoCallOutline className='icons-top-nav' /></a>
                        <a href='tel:064555555'><p>064555555</p></a>
                    </div>
                </div>
                <div className='top-nav-holder-right-side'>
                    <div className='top-nav-holder-right-side-instagram'>
                        <IoLogoInstagram className='icons-top-nav' />
                        <FaFacebookF />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
