import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import logo from './logoMains.png'
import './Navbar.css'


export default function Navbar() {
  
    const [toggleX, setToggleX] = useState(false)
    const [toggleAct, setToggleAct] = useState(false)
    const [toggleCom, setToggleCom] = useState(false)

    const [navScroll, setNavScroll] = useState(true)

    useEffect(() => {
      window.addEventListener('scroll', navScroll)
      let lastScrollValue = 0

      function navScroll() {
        let top = document.documentElement.scrollTop
        if(lastScrollValue < top) {
          setNavScroll(false)
        } else {
          setNavScroll(true)
        }
        lastScrollValue = top
      }
    }, [])

      console.log(toggleAct)

    return (
  <nav
  className={navScroll ? "" : "nav-hidden"}
  >
      <Link to="/">
        <img className="logo" src={logo} alt="erreur photo" style={{width: "97px"}} />
      </Link>  

      <ul className="menu">

        {/* Partie visible */}
      <li className="item">  
          <Link
          to="/#compagnie"
          className={toggleX ? "link activeLink" : "link"}
          onMouseEnter={() => setToggleX(true)}
          onMouseLeave={() => setToggleX(false)}
          >
            X-TREM FUSION
          </Link>


        {/* Partie à faire apparaître */}
          <ul 
          onMouseEnter={() => {
            if(toggleX) {
              setToggleX(true)
            }       
          }}
          onMouseLeave={() => setToggleX(false)}
          className={toggleX ? "subMenu" : "subMenu-hidden"}>
            <li><Link to="/#compagnie" className='visible' onClick={() => setToggleX(false)}>Compagnie</Link></li>
            <li><Link to="/members" className='visible'>Membres</Link></li>
          </ul>
      </li>

        <li className="item">
          <NavLink
          to="/creations"
          className={toggleAct ? "link activeLink" : "link"}
          onMouseEnter={() => setToggleAct(true)}
          onMouseLeave={() => setToggleAct(false)}
          >
            Nos activités
          </NavLink>

          {/* Partie à faire apparaître */}
          <ul 
          onMouseEnter={() => {
            if(toggleAct) {
              setToggleAct(true)
            }       
          }}
          onMouseLeave={() => setToggleAct(false)}
          className={toggleAct ? "subMenu" : "subMenu-hidden"}>
            <li><Link to="/creations" className='visible'>Créations</Link></li>
            <li><Link to="/actions" className='visible'>Actions sociales et pédagogiques</Link></li>
          </ul>

        </li>
        <li className="item">
          <NavLink
          to="/galery"
          className={toggleCom ? "link activeLink" : "link"}
          onMouseEnter={() => setToggleCom(true)}
          onMouseLeave={() => setToggleCom(false)}
          >
            Communication
          </NavLink>

          {/* Partie à faire apparaître */}
          <ul 
          onMouseEnter={() => {
            if(toggleCom) {
              setToggleCom(true)
            }       
          }}
          onMouseLeave={() => setToggleCom(false)}
          className={toggleCom ? "subMenu" : "subMenu-hidden"}>
            <li><Link to="/news" className='visible'>Actualités</Link></li>
            <li><Link to="/galery" className='visible'>Galerie Photos</Link></li>
            <li><Link to="/about" className='visible'>On parle de nous...</Link></li>
          </ul>

        </li>
        <li className="item">
          <NavLink
          to='/#contact'
          className="link"
          >
            Contact 
          </NavLink>
        </li>
      </ul>


      
  </nav>
  )
}
