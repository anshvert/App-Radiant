import './App.css';
import { Home, Login, SignUp, Logout, Apps, Navbar } from './components/Components';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/')
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />}/>
        <Route path="/logout" element={<Logout handleLogout={handleLogout} />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/apps" element={<Apps />} />
      </Routes>
    </div>
  );
}

export default App;
