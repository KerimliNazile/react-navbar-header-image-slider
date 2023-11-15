import React from 'react'
import './index.css'

const Header = () => {
  return (
    <>
      <div className='header'>
      <nav className='navbar'>
        <div className='site_logo'>
            <h2>
                Pulse
                <span className='logo_color'>.</span>
            </h2>
        </div>
        <div className='main_navbar'>
        <ul className='menu'>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About us</a>
            </li>
            <li>
                <a href="#">Resturant</a>
            </li>
            <li>
                <a href="#">News</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            
        </ul>
        </div>
        <div className='reserve'>
            <p>
                <span className='reserve_color'>Reservations</span>
            
            <i class="fa-solid fa-phone"></i>
            +123 456 789
            </p>
        </div>
      </nav>
        <div className='header_title' >
          <h1>  Food and more
            <span className='food_color'>.</span>
          </h1>
          <p>By Chef Francis Smith</p>
        </div>
      </div>
    </>
  )
}

export default Header
