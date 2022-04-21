import React, { Component } from 'react';
import MenuMenu from './MenuMenu';
import MenuCards from './MenuCards';
import MenuText from './MenuText';

import './Menu.css'


 class Menu extends Component {
  render() {
    return (
      <div className='Menu' id='meni'>
          <MenuText />
          <MenuCards />
          <MenuMenu />
      </div>
    )
  }
}

export default Menu;
