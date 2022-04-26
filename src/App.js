import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TopNav from './components/layout/TopNav';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './components/Home';
import OnamaHolderComponent from './components/OnamaHolderComponent';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Menu from './components/Menu';
import Contact from './components/Contact';

import ReactWhatsapp from 'react-whatsapp'

import { IoCaretUpOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { Provider } from './context/AboutContext';

function App() {

  return (
    <Provider>
      <Router>
        <div className="App">
          <div className='navigation'>
            <TopNav />
            <Navbar />
          </div>
              <Home />
              <OnamaHolderComponent />
              <Gallery />
              <Location />
              <Contact />
              <Menu />
          <Footer /> 
          <a href='#top'>
            <div className='modal-button-up'>
              <IoCaretUpOutline className='modal-button-up-icons' />
            </div>
            <ReactWhatsapp className="modal-whats-app" number="+381694455451" message="">
              <FaWhatsapp className='modal-whats-app-icons' />
            </ReactWhatsapp>
          </a>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
