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
                        <a href='tel:+381 69 4455451'><IoCallOutline className='icons-top-nav' /></a>
                        <a href='tel:+381 69 4455451'><p>+381 69 4455451</p></a>
                    </div>
                </div>
                <div className='top-nav-holder-right-side'>
                    <div className='top-nav-holder-right-side-instagram'>
                        <a href='https://www.instagram.com/cotto_restoran/' className='top-nav-holder-right-side-instagram-a'>
                            <IoLogoInstagram className='icons-top-nav' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
