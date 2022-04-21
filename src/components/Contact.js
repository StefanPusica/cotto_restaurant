import React, { Component } from 'react';
import './Contact.css';

 class Contact extends Component {
  render() {
    return (
      <div className='Contact' id='kontakt'>
          <div className='contact-holder'>
            <h1 className='page-heading'>Kontakt</h1>
            <div className='form-holder'>
                <form className='form'>
                    <div className='fullName'>
                        <input type='text' name='fname' placeholder='Ime' />
                        <input type='text' name='lname' placeholder='Prezime' />
                    </div>  
                    <input type='email' name='email' placeholder='Email' />
                    <input type='text' name='subject' placeholder='Naslov' />
                    <textarea type='text' name='textA' placeholder='Tekst poruke' />
                    <button type='submit' className='contactBtn'>Pošalji</button>
                </form>
            </div>
          </div>
      </div>    
    )
  }
}

export default Contact;
