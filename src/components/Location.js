import React, { Component } from 'react';
import './Location.css';

import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";

 class Location extends Component {
  render() {
    return (
      <div className='Location' id='lokacija'>
          <div className='location-holder'>
                <h1 className='page-heading'>Kako do nas?</h1>
                <p className='describe-text'>-Beograd na vodi, Galerija BW - Sava Avenija</p>
                <p className='two-texts'>Galerija je uspela da za kratko vreme, nadmaši sva očekivanja koja smo do sada imali vezane za tržne centre. 
                    Galerija je mnogo više od toga. Ulice i trgovi ispunjeni su ekskluzivnim ponudama kako u svetu shoppinga tako 
                    i u svetu gastronomije.
                </p>
                <p className='two-texts'>
                    U prizemlju, u delu tržnog centra Sava Avenija od marta 2022. godine možete doživeti pravo gastronomsko iskustvo 
                    restorana COTTO.
                </p>
          </div>
          <div className='location-cards'>
              <div className='location-cards-holder'>
                <div className='location-card l-card-1'>
                    <p className='location-card-text'>Bulevar Vudro<br></br> Vilsona 12</p>
                    <IoLocationOutline className='location-icon-group' />
                </div>
                <div className='location-card l-card-2'>
                    <p className='location-card-text'>064555555</p>
                    <IoCallOutline className='location-icon-group' />
                </div>
                <div className='location-card l-card-3'>
                    <p className='location-card-text'>info@cotto.rs</p>
                    <IoMailUnreadOutline className='location-icon-group' />   
                </div>
                <div className='location-card l-card-3'>
                    <p className='location-card-text'>Pon - Ned</p>
                    <p>10:00h - 22:00h</p>
                    <IoTimeOutline className='location-icon-group' />   
                </div>
              </div>
          </div>
          <div className='map-holder'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.8731725817743!2d20.443798215406737!3d44.80377327909878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aab643a15a3%3A0x2bc6caec856ef17f!2zQnVsZXZhciBWdWRyb2EgVmlsc29uYSAxMiwg0JHQtdC-0LPRgNCw0LQgMTEwMDA!5e0!3m2!1ssr!2srs!4v1646058372881!5m2!1ssr!2srs" style={{ allowFullScreen: "", loading: "lazy"}}  ></iframe>
          </div>
      </div>
    )
  }
}

export default Location
