import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

/**
 * Navigation component that sticks on the top with all navigation links
 * 
 * @author [Ehtesham Mohammed]
 */
export default class NavigationMain extends React.Component {
  render () {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <span className='navbar-brand'>Toist</span>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/'>
                  <span className='nav-link'>Dashboard</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/profile'>
                  <span className='nav-link'>Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
