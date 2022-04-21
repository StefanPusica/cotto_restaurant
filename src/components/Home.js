import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='Home' id='pocetna'>
        <div className='banner'>
            <h1>Hedonizam & Renesansa</h1>
            <p>Mesto dostojno najzahtevnijih poznavalaca i
               uživalaca u hrani, istovremeno intimno i luksuzno, a dovoljno da zadovolji i one sa najistančanijim ukusom. 
               Gastronomska ponuda najvećeg tržnog centra u zemlji i na Balkanu, Galerija BW  bogatija je za novi ekskluzivan 
               restoran autentičnog koncepta italijanske kuhinje i stek ponude - COTTO.
            </p>
            <a href='#onama'className='homeBtn'>Detaljnije</a>
        </div>
      </div>
    )
  }
}

export default Home;