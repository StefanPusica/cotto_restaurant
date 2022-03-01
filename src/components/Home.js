import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='banner'>
            <h1>Hedonizam & Renesansa</h1>
            <p>Mesto dostojno najzahtevnijih poznavalaca i
               uživalaca u hrani, istovremeno intimno i luksuzno, a dovoljno da zadovolji i one sa najistančanijim ukusom. 
               Gastronomska ponuda najvećeg tržnog centra u zemlji i na Balkanu, Galerija BW  bogatija je za novi ekskluzivan 
               restoran autentičnog koncepta italijanske kuhinje i stek ponude - COTTO.
            </p>
            <Link to='/onama'className='homeBtn'>Detaljnije</Link>
        </div>
      </div>
    )
  }
}

export default Home;