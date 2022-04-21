import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ONama.css';
import { HiArrowNarrowRight } from "react-icons/hi";


 class ONama extends Component {
  render() {
    return (
        <div className='ONama'>
          <div className='ONama-holder'>
            <div className='left-side'>
                <div className='left-side-images-holder'>
                    <div className='onama-card card1'></div>
                    <div className='onama-card card2'></div>
                    <div className='onama-card card3'></div>
                    <div className='onama-card card4'></div>
                </div>
            </div>
            <div className='right-side'>
                <h1>Naša priča</h1>
                <p className='firstP'>Novi ekskluzivni koncept za sve ljubitelje italijanske kuhinje i velike gurmane za koje
                 spremamo najfinije stekove u srcu Beograda na vodi. Mesto dostojno najzahtevnijih poznavalaca i uživalaca u hrani,
                  istovremeno intimno i luksuzno, a dovoljno da zadovolji i one sa najistančanijim ukusom. Verujemo u savršen spoj uparivanja 
                  hrane i pića, zato je naš profesionalan tim pažljivo odabrao vinsku kartu sa preko 100 prestižnih italijanskih vina. 
                </p>
                <p className='firstP'>Gastronomska ponuda najvećeg tržnog centra u zemlji i na Balkanu, Galerija BW  bogatija je za novi ekskluzivan restoran
                 autentičnog koncepta italijanske kuhinje i stek ponude - COTTO. 
                </p>
                <p className='firstP'>Za potrebe i komfor gostiju, restoran sa prijatnim ambijentom i baštom na promenadi Beograda na vodi, sa pažljivo izabranim detaljima, 
                predstavlja pravi hedonistički izazov na obali Save. Uz poštovanje fine dinning koncepta, COTTO pruža gostima istinsko uživanje u hrani i potpuni gastronomski doživljaj,
                 sa akcentom na kvalitet namirnica, način serviranja i uparivanje hrane i vina.
                </p>
                <p className='lastP'>
                Sa autentičnim konceptom italijanske kuhinje i stek ponude sa premium selekcijom vina, COTTO će veoma brzo postati sinonim za pravo gastronomsko iskustvo u srcu Beograda.
                </p>
                <div className='onama-btn-hodler'>
                    <a href='#BuonAppetito' className='onamaBtn'>Buon appetito</a>
                    <HiArrowNarrowRight />
                </div>
                
            </div>
          </div>
        </div>
    )
  }
}

export default ONama;