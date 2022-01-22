import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from './logoMains.png'
import './Navbar.css'


export default function Navbar() {
  
  
    return (
  <nav>
      <Link to="/">
        <img className="logo" src={logo} alt="erreur photo" style={{width: "80px"}} />
      </Link>  

      <ul className="menu">
      <li className="item">  
          <NavLink
          to="/"
          className="link"
          >
            X-TREM FUSION
          </NavLink>

          <ul className="x-trem">
            <li><Link to="/" className='visible'>Compagnie</Link></li>
            <li><Link to="/members" className='visible'>Membres</Link></li>
          </ul>

      </li>

        <li className="item">
          <NavLink
          to="/creations"
          className={({isActive}) => isActive ? "link activeLink" : "link"}
          >
            Nos activités
          </NavLink>
        </li>
        <li className="item">
          <NavLink
          to="/galery"
          className={({isActive}) => isActive ? "link activeLink" : "link"}
          >
            Communication
          </NavLink>
        </li>
        <li className="item">
          <NavLink
          to="/"
          className="link"
          >
            Contact
          </NavLink>
        </li>
      </ul>

      
      
  </nav>
  )
}
