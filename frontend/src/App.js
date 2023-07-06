import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage.js';
import FaQ from './pages/FaQ';
import AboutPage from './pages/AboutPage';
import PlacePage from './pages/PlacePage';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" exact element={<LandingPage/>}/>
          <Route path = "/home" exact element={<HomePage/>}/>
          <Route path = "/contact" exact element={<ContactPage/>}/>
          <Route path = "/about" exact element={<AboutPage/>}/>
          <Route path = "/faq" exact element={<FaQ/>}/>
          <Route path="/rooms/:name" exact element={<PlacePage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

