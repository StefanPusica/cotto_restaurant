import React, { Component } from 'react';
// import MenuMenu from './MenuMenu';
import MenuCards from './MenuCards';
import MenuText from './MenuText';

import './Menu.css'
import DownloadMenu from './DownloadMenu';


 class Menu extends Component {
  render() {
    return (
      <div className='Menu' id='meni'>
          <MenuText />
          <DownloadMenu />
          {/* <MenuCards /> */}
          {/* <MenuMenu /> */}
      </div>
    )
  }
}

export default Menu;
