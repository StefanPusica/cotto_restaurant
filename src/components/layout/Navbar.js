import React, { Component } from 'react'
import './Navbar.css';
import images from '../layout../../../constants/images';

import { GiForkKnifeSpoon } from 'react-icons/gi';
import { GiKnifeFork } from 'react-icons/gi';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    isMenuActive: false
  }

  render() {
    return (
      <div className='Navbar'>
          <div className='navbar-container'>
            <div className='nav-logo'>
                <img src={images.logo} alt='logo' />
            </div>
            <ul className={this.state.isMenuActive ? 'nav-items active' : 'nav-items'}>
                <li><a href='#pocetna' onClick={() => this.setState({isMenuActive: !this.state.isMenuActive})}>Početna</a></li>
                <li><a href='#onama' onClick={() => this.setState({isMenuActive: !this.state.isMenuActive})} >O nama</a></li>
                <li><a href='#galerija' onClick={() => this.setState({isMenuActive: !this.state.isMenuActive})} >Galerija</a></li>
                <li><a href='#pocetna' onClick={() => this.setState({isMenuActive: !this.state.isMenuActive})}>Events</a></li>
                <li><a href='#lokacija' onClick={() => this.setState({isMenuActive: !this.state.isMenuActive})}>Lokacija</a></li>
                <li><a href='#kontakt' onClick={() => this.setState({isMenuActive: !this.state.isMenuActive})}>Kontakt</a></li>
            </ul>
            <ul className={this.state.isMenuActive ? 'nav-items-basterd active' : 'nav-items-basterd'}>
                <li><a href='#meni' onClick={() => this.setState({isMenuActive: !this.state.isMenuActive})}>Meni</a></li>
            </ul>
            <div className='hamburger'>
              {
                this.state.isMenuActive ?
                  <GiKnifeFork className='hamburgerX' onClick={() => this.setState({isMenuActive: !this.state.isMenuActive})} /> :
                  <GiForkKnifeSpoon className='hamburgerIcon' onClick={() => this.setState({isMenuActive: !this.state.isMenuActive})} />
              }
            </div>
          </div>
      </div>
    )
  }
}

export default Navbar;