import './App.css';
import {
  Home,
  Login,
  SignUp
} from './components/Components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>

      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <h2>App Radiant</h2>
          </div>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>

    </Router>
  )
}
export default App;
