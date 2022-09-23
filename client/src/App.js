import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup.jsx';
import Signin from './pages/Signin/Signin.jsx';
import Home from './pages/Home/Home.jsx';
import History from './pages/History/History';
import NavBar from './components/NavBar/NavBar';
import CookieConsent from 'react-cookie-consent';


function App() {

  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/history' element={<History />}/>
    </Routes>
    <CookieConsent debug={true}>Oiga mi loco etamo usando galleticas si me entiende parse?</CookieConsent>
    </div>
  );
}

export default App;
