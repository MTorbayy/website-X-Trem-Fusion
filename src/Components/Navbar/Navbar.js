import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from './logoMains.png'


export default function Navbar() {
  
  
    return (
  <nav>
      <Link to="/">
        <img src={logo} alt="erreur photo" style={{width: "80px"}} />
        </Link>  

      <div className="menu">
      <NavLink
      to="/"
      className={({isActive}) => isActive ? "activeLink" : ""}
      >
        X-TREM FUSION
      </NavLink>
      <NavLink
      to="/creations"
      className={({isActive}) => isActive ? "activeLink" : ""}
      >
        Nos activités
      </NavLink>
      <NavLink
      to="/galery"
      className={({isActive}) => isActive ? "activeLink" : ""}
      >
        Communication
      </NavLink>
      <NavLink
      to="/"
      className={({isActive}) => isActive ? "activeLink" : ""}
      >
        Contact
      </NavLink>
      </div>
  </nav>
  )
}
