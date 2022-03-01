import React, { Component } from 'react'
// import images from '../constants/images';
import './Gallery.css';

import { IoArrowBack } from 'react-icons/io5';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { IoCloseOutline } from 'react-icons/io5';


class Gallery extends Component {
  state = {
    data: [
      {
        id: 1,
        imgSrc: require('../assets/gallery/1.jpg'),
        className: 'img-1',
      },
      {
        id: 2,
        imgSrc: require('../assets/gallery/2.jpg'),
        className: 'img-2'
      },
      {
        id: 3,
        imgSrc: require('../assets/gallery/3.jpg'),
        className: 'img-3'
      },
      {
        id: 4,
        imgSrc: require('../assets/gallery/4.jpg'),
        className: 'img-4'
      }
    ],

    isModalActive: false,

    selectedImg: '',

    whichImage: ''

  }


  render() {

    const getImg = (imgSrc, index) => {
      this.setState({isModalActive: !this.state.isModalActive})
      this.setState({selectedImg: imgSrc})
    }

    return (
      <div className='Gallery'>
          <h1 className='page-heading'>Galerija</h1>
          <div className='gallery-holder'>
            {
              this.state.data.map((image, index) => (
                <img src={image.imgSrc} onClick={() => getImg(image.imgSrc, index) } key={index} className={image.className} alt={image.className} />
              ))
            }
            <div className={this.state.isModalActive ? 'gallery-modal on' : 'gallery-modal'}>
              <IoArrowBack className='gallery-arrows' />
              <div className='modal-img'>
                <img src={this.state.selectedImg} alt='im'></img>
              </div>
              <IoArrowForwardOutline className='gallery-arrows' />
              <div className='close-modal'>
                <IoCloseOutline className='close-modal-icon' onClick={() => this.setState({isModalActive: !this.state.isModalActive})} />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Gallery;
