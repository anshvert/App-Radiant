import './App.css';
import {
  Home,
  Login,
  SignUp,
  Apps
} from './components/Components';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login handleLogin={handleLogin} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/apps" element={<Apps />} />
      </Routes>
    </Router>
  );
}

export default App;
