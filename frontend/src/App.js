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
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import BookingPage from './pages/BookingPage';
import FoodPage from './pages/FoodPage';

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
          <Route path = "/login" exact element={<LoginPage/>}/>
          <Route path = "/register" exact element={<RegisterPage/>}/>
          <Route path = "/profile" exact element={<ProfilePage/>}/>
          <Route path = "/foods/:id" exact element={<FoodPage/>}/>

          <Route path="/book/:id/:fromDate/:toDate" exact element={<BookingPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

