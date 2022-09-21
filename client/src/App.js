import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup.jsx';
import Signin from './pages/Signin/Signin.jsx';
import Home from './pages/Home/Home.jsx';
import History from './pages/History/History';
function App() {

  return (
    <div className="App">
    <Routes>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/history' element={<History />}/>
    </Routes>
    </div>
  );
}

export default App;
