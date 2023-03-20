import { Fragment } from 'react';
import './App.css';

function App() {
  return (
    <Fragment>
      
      {/* Navbar */}
      <nav>
        <div class="nav-center">
          <div class="nav-header">
            <h2>App Radiant</h2>
          </div>
          
          <ul class="links">
            <li>
              <a href="/#">home</a>
            </li>
            <li>
              <a href="/#">Login</a>
            </li>

            <li>
              <a href="/#">about</a>
            </li>
            <li>
              <a href="/#">contact</a>
            </li>
          </ul>
        </div>
      </nav>

    <div className="button-container" style={{display: "flex; justify-content: center; align-items: center"}}>
        <button className = "button" id="get_users"> Get me all users </button>
        <button className = "button" id="add_user"> Add User</button>
        <button className = "button" id="update_user"> Update User</button>
    </div>
  
    </Fragment>
  )
}
export default App;
