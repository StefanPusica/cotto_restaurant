import React, { Component } from 'react';
import images from '../constants/images';

import './MenuText.css';

 class MenuText extends Component {
  render() {
    return (
      <div className='MenuText'>
        <h1 className='menu-header'>Za potpuni užitak</h1>
        <p className='menu-describe-text'> - Uživajte u sveže spremljenim specijalitetima svakog dana </p>
        <div className='MenuText-line'>
          <img src={images.spoon} alt='spoon' />
        </div>
        <div className='MenuText-two-texts'>
          <p>Naš profesionalni tim je otišao i korak dalje, sa ciljem da naša 
            autentična ponuda bude prepoznata, kako od strane vrsnih poznavatelja
            do ljubitelja kvalitetne kuhinje i originalnih koncepata. Svaki specijalitet
            je sa velikom pažnjom serviran, na jedan moderan i sofistiran način kako bi sva čula bila zadovoljena!</p>
          <p>Na meniju su specijaliteti koji se oslanjaju na italijansku tradiciju spremanja jela po posebnim recepturama 
            i selekcija ponude stekova koji su odležali u dry age frižiderima, poštujući standarde i vreme u njihovom pripremanju.</p>
        </div>
        <div className='MenuText-two-texts2'>    
          <p>Sa ciljem da upotpunimo vaš svaki zalogaj, pogledajte pažljivo odabranu vinsku kartu italijanskih vina.
            Naravno, na našem meniju postoji selekcija različitih aperitiva.
          </p>
          <div className='lastP'>
            <p>Pažljivo pogledajte naš meni. </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuText;
