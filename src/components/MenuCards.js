import React, { Component } from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { IoStar } from 'react-icons/io5';
import { IoStarHalf } from 'react-icons/io5';

import './MenuCard.css';

 class MenuCards extends Component {
  render() {
    return (
      <div className='MenuCards' id='BuonAppetito'>
        <div className='MenuCards-holder'>
          <div className='cardd cardd1'>
            <div className='card-image'></div>
            <div className='card-text-content'>
              <h1>Francuski biftek sa soya sosom</h1>
              <div className='card-time'>
                <IoTimeOutline />
                <p>10min</p>
              </div>
              <div className='rating-stars'>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStarHalf />
              </div>
            </div>
          </div>
          <div className='cardd cardd2'>
            <div className='card-image'>
              <div className='card-image-overlay'>
                <p>IZDVAJAMO</p>
              </div>
            </div>
            <div className='card-text-content'>
              <h1>Palačinka sa svežim šljivama</h1>
              <div className='card-time'>
                <IoTimeOutline />
              <p>10min</p>
              </div>
              <div className='rating-stars'>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStarHalf />
              </div>
            </div>
          </div>
          <div className='cardd cardd3'>
            <div className='card-image'></div>
            <div className='card-text-content'>
              <h1>Burger La Casa</h1>
              <div className='card-time'>
                <IoTimeOutline />
              <p>10min</p>
              </div>
              <div className='rating-stars'>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStarHalf />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuCards;