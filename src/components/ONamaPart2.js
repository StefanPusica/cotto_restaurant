import React, { Component } from 'react';
import images from '../constants/images';
import './ONamaPart2.css';

 class ONamaPart2 extends Component {
  render() {
    return (
      <div className='ONamaPart2'>
          <div className='ONamaPart2-Banner'>
                <div className='ONamaPart2-Banner-holder'>
                    <h1>Šta drugi kažu o nama?</h1>
                    <div className='ONamaPart2-Banner-holder-imageAndText'>
                        <img src={images.human1} alt='Slika' />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                            make a type specimen book.
                        </p>
                    </div>
                    <div className='circle-navigator'>
                        <div className='circle circle1 active'>

                        </div>
                        <div className='circle circle1'>

                        </div>
                        <div className='circle circle1'>

                        </div>
                    </div>  
                </div>
          </div>
      </div>
    )
  }
}

export default ONamaPart2;
