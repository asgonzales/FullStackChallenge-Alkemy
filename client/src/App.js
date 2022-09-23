import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Signup from './pages/Signup/Signup.jsx';
import Signin from './pages/Signin/Signin.jsx';
import Home from './pages/Home/Home.jsx';
import History from './pages/History/History';
import Landing from './pages/Landing/Landing';
import NavBar from './components/NavBar/NavBar';
import CookieConsent from 'react-cookie-consent';
import { Toaster } from 'react-hot-toast';

function App() {
  const { pathname } = useLocation()

  return (
    <div className="App">
      {
        pathname !== '/signup' && pathname !== '/signin' && pathname !== '/' ?
        <NavBar/>
        : <></>
      }
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/signup' element={<Signup />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/history' element={<History />}/>
    </Routes>
    <CookieConsent debug={true}>Oiga mi loco etamo usando galleticas si me entiende parse?</CookieConsent>
    <Toaster />
    </div>
  );
}

export default App;
