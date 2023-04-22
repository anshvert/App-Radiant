import React from 'react';
import { Link } from 'react-router-dom'

function Navbar({ isLoggedIn,user }) {
    return (
        <nav>
        <div className="nav-center">
          <div className="nav-header">
            <h2>App Radiant</h2>
          </div>
          {isLoggedIn ? 
          <ul className='links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/apps'>Apps</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
            <div className="user-icon">{user?.name[0]}</div>
          </ul> :
          <ul className='links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
        </ul> 
          }
        </div>
      </nav>
    )
}
export default Navbar;