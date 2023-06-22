import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter as Router , Route ,Link, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" exact element={<LandingPage/>}/>
        </Routes>
      </Router>



    </div>
  );
}

export default App;
