import './App.css';
import { Home, Login, SignUp, Logout, Apps, Navbar } from './components/Components';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user,setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    const userData = localStorage.getItem('userData');
    
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData))
    }
  }, []);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData)
    navigate('/')
    console.log(userData)
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData',JSON.stringify(userData))
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn')
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} user={user} />
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
