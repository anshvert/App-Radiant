import './App.css';
import { Home, Login, SignUp, Logout, Apps, Navbar } from './components/Components';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/')
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn')
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />}/>
        <Route path="/logout" element={<Logout handleLogout={handleLogout} />}/>
        <Route path="/signup" element={<SignUp handleLogin={handleLogin} />} />
        <Route path="/apps" element={<Apps />} />
      </Routes>
    </div>
  );
}

export default App;
