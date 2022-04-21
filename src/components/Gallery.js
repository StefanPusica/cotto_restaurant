import React, { Component } from 'react'
// import images from '../constants/images';
import './Gallery.css';

import { IoArrowBack } from 'react-icons/io5';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { IoCloseOutline } from 'react-icons/io5';


class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
          id: 2,
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
  
      selectedImg: {
        id: 0,
        imgSrc: ''
      }
  
    }


  }
  


  render() {
    const openImage = ( index) => {
      this.setState({
        isModalActive: !this.state.isModalActive
      })
      let newID = index + 1;
      let path = require(`../assets/gallery/${newID}.jpg`)
      this.setState({
        selectedImg: {
          id: newID,
          imgSrc: path
        }
      })
    }

    const getNextImg = () => {
      let path = require(`../assets/gallery/${this.state.selectedImg.id + 1}.jpg`);
      
        this.setState(prevState => ({
          selectedImg: {
            ...prevState.selectedImg,
            id: this.state.selectedImg.id + 1,
            imgSrc: path
          }
        }))
      
    }

    const getPrevImg = () => {
      let path = require(`../assets/gallery/${this.state.selectedImg.id - 1}.jpg`);
      
      this.setState(prevState => ({
        selectedImg: {
          ...prevState.selectedImg,
          id: this.state.selectedImg.id - 1,
          imgSrc: path
        }
      }))

    }

    
    return (
      <div className='Gallery' id='galerija'>
          <h1 className='page-heading'>Galerija</h1>
          <div className='gallery-holder'>
            {
              this.state.data.map((image, index) => (
                
                  <img src={image.imgSrc}  key={index} className={image.className} onClick={() => openImage(index)} alt={image.className} />
              ))
            }

            <div className={this.state.isModalActive ? 'gallery-modal on' : 'gallery-modal'}>
             {this.state.selectedImg.id !== 1 && (<IoArrowBack className='gallery-arrows' onClick={() => getPrevImg()} />)}
              <div className='modal-img'>
                <img src={this.state.selectedImg.imgSrc} alt='im'></img>
              </div>
              {this.state.selectedImg.id !== 4 && (<IoArrowForwardOutline className='gallery-arrows' onClick={() => getNextImg()} />)}
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
