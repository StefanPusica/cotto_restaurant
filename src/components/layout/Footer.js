import React, { Component } from 'react';
import images from '../../constants/images';
import './Footer.css';

import { IoCallOutline } from 'react-icons/io5';
import { IoLocationOutline } from 'react-icons/io5';
import { IoTimeOutline } from 'react-icons/io5';


export default class Footer extends Component {
  render() {
    return (
          <footer>
            <div className='footer-logo'>
                <img src={images.logo} alt='footer-logo' />
            </div>
            <div className='footer-3-cols'>
                <div className='footer-left'>
                    <h3>Kontaktirajte nas</h3>
                    <div className='footer-left-place'>
                        <IoLocationOutline />
                        <p>Bulervar Despota Stefana 85, Beograd</p>
                    </div>
                    <div className='footer-left-call'>
                        <IoCallOutline />
                        <p>06455555</p>
                    </div>
                </div>
                <div className='footer-middle'>
                    <div className='footer-middle-line1'></div>
                    <p>“Mesto dostojno najzahtevnijih poznavalaca i uživalaca u hrani, istovremeno intimno i luksuzno,
                         a dovoljno da zadovolji i one sa najistančanijim ukusom. Verujemo u savršen spoj uparivanja hrane i pića,
                          zato je naš profesionalan tim pažljivo odabrao vinsku kartu sa preko 100 prestižnih italijanskih vina.”
                    </p>
                    <div className='footer-middle-line2'></div>
                </div>
                <div className='footer-right'>
                    <h3>Radno vreme</h3>
                    <div className='footer-right-work-time-Pon-Pet'>
                        <div className='footer-right-work-time1'>
                            <IoTimeOutline />
                            <p>Ponedeljak - Petak</p>
                        </div>
                        <p>08:00am - 12:00pm</p>
                    </div>
                    <div className='footer-right-work-time-Pet-Ned'>
                        <div className='footer-right-work-time1'>
                            <IoTimeOutline />
                            <p>Ponedeljak - Petak</p>
                        </div>
                        <p>08:00am - 12:00pm</p>
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>
                <p>© Cotto 2022. Sva prava zadržana</p>
            </div>
        </footer>
    )
  }
}
