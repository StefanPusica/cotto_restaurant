import React, { Component } from 'react';
import './ONamaPart2.css';

 class ONamaPart2 extends Component {
  render() {
    return (
      <div className='ONamaPart2'>
          <div className='ONamaPart2-Banner'>
                <div className='ONamaPart2-Banner-holder'>
                    <h1>Šta drugi kažu o nama?</h1>
                    <div className='ONamaPart2-Banner-holder-imageAndText'>
                        <img src='https://scontent.fbeg2-1.fna.fbcdn.net/v/t39.30808-6/280364262_5712342278781979_1266290559999769379_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=0debeb&_nc_ohc=WkuYFsvMAuEAX-_3Hlz&_nc_ht=scontent.fbeg2-1.fna&oh=00_AT9RYQUE1XJGtjXWLe8aMQXnm6cXtjwsHcksFVNR5p8QVw&oe=6281DE1C' alt='Slika' />
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
