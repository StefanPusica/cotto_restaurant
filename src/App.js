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

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/onama" element={<OnamaHolderComponent />} />
            <Route exact path="/galerija" element={<Gallery />} />
            <Route exact path="/lokacija" element={<Location />} />
            <Route exact path="/kontakt" element={<Contact />} />
            <Route exact path="/meni" element={<Menu />} />
          </Routes>
        <Footer />  
      </div>
    </Router>
  );
}


export default App;
