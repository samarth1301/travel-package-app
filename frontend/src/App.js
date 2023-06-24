import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" exact element={<LandingPage/>}/>
          <Route path = "/home" exact element={<HomePage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
