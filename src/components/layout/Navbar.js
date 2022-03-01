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
                <li><Link onClick={() => this.setState({isMenuActive: !this.state.isMenuActive})} to='/'>Početna</Link></li>
                <li><Link onClick={() => this.setState({isMenuActive: !this.state.isMenuActive})} to='/onama'>O nama</Link></li>
                <li><Link onClick={() => this.setState({isMenuActive: !this.state.isMenuActive})} to='/galerija'>Galerija</Link></li>
                <li><Link onClick={() => this.setState({isMenuActive: !this.state.isMenuActive})} to='/'>Events</Link></li>
                <li><Link onClick={() => this.setState({isMenuActive: !this.state.isMenuActive})} to='/lokacija'>Lokacija</Link></li>
                <li><Link onClick={() => this.setState({isMenuActive: !this.state.isMenuActive})} to='/kontakt'>Kontakt</Link></li>
            </ul>
            <ul className={this.state.isMenuActive ? 'nav-items-basterd active' : 'nav-items-basterd'}>
                <li><Link to='/meni'>Meni</Link></li>
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