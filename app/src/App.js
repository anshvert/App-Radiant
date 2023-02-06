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
              <a href="index.html">home</a>
            </li>
            <li>
              <a href="./login.html">Login</a>
            </li>

            <li>
              <a href="about.html">about</a>
            </li>
            <li>
              <a href="projects.html">projects</a>
            </li>
            <li>
              <a href="contact.html">contact</a>
            </li>
          </ul>
  
          <ul class="social-icons">
            <li>
              <a href="">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-linkedin"></i>
              </a>
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
