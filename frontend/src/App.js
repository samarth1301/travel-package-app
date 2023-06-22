import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter as Router , Route ,Link, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" exact element={<LandingPage/>}/>
        </Routes>
      </Router>



    </div>
  );
}

export default App;
