import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import logo from './logoMains.png'
import './Navbar.css'


export default function Navbar() {
  
    const [toggle, setToggle] = useState(false)

    return (
  <nav>
      <Link to="/">
        <img className="logo" src={logo} alt="erreur photo" style={{width: "97px"}} />
      </Link>  

      <ul className="menu">

        {/* Partie visible */}
      <li className="item">  
          <Link
          to="/#compagnie"
          className={toggle ? "link activeLink" : "link"}
          onMouseEnter={() => setToggle(true)}
          onMouseLeave={() => setToggle(false)}
          >
            X-TREM FUSION
          </Link>


        {/* Partie à faire apparaître */}
          <ul 
          onMouseEnter={() => setToggle(true)}
          onMouseLeave={() => setToggle(false)}
          className={toggle ? "x-trem" : "x-trem-hidden"}>
            <li><Link to="/#compagnie" className='visible'>Compagnie</Link></li>
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
          <Link
          to='/#contact'
          className="link"
          >
            Contact 
          </Link>
        </li>
      </ul>


      
  </nav>
  )
}
