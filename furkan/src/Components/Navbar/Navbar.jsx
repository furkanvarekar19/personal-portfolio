import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
    <h1>FURKAN</h1>
      {/* <img src="https://cdn-icons-png.flaticon.com/128/841/841364.png" alt="logo" /> */}
      <ul className='nav-menu'>
       <li>Home</li>
       <li>About Me</li>
       <li>Services</li>
       <li>Portfolio</li>
       <li>Contact</li>
      </ul>
      <div className="nav-connect">
        Connect With Me
      </div>
    </div>
  )
}

export default Navbar