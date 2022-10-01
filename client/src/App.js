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
import NotFound from './pages/NotFound/NotFound';
import UserLogged from './helpers/UserLogged/UserLooged';
import Statistics from './pages/Statistics/Statistics';
import About from './pages/About/About.jsx';
import backimg from './media/500x500Circle.png';

function App() {
  const { pathname } = useLocation()

  return (
    <div className="App">
      <div className='backimg'>
        <img src={backimg} alt='' />
      </div>
      {
        pathname.toLowerCase() === '/signin' || pathname.toLocaleLowerCase() === '/signup' ?
        <></>
        : <NavBar/>
      }
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route element={<UserLogged />} >
          <Route path='/home' element={<Home />}/>
          <Route path='/history' element={<History />}/>
          <Route path='/statistics' element={<Statistics />} />
          <Route path='/about' element={<About />} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <CookieConsent disableStyles={true} contentClasses='cookieContent' buttonClasses='cookieButton' containerClasses='cookieContainer' >FinnApp use cookies to improve your experience</CookieConsent>
      <Toaster />
    </div>
  );
}

export default App;
