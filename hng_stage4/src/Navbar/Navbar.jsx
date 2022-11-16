import React from 'react'
import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.svg'
import menu from '../images/hambg.svg'
import close from '../images/Vector.svg'
import './navbar.css'

const Navbar = ({setIsOpen}) => {
    const [isShowing, setIsShowing] = useState(false);
    
  return (
    <nav>
      <div className="container nav__container">
        <div className='nav_items'>
          <Link to='/'>
            <img src={Logo} alt="Metabnb logo" className='logo'/>
          </Link>

          <Link to='/' className='connect' onClick={() => setIsOpen(true)}>
              Connect wallet
          </Link>

          <ul className='mobile'>
              <li>
                <NavLink to='/' className='nav_items'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='../places' className='nav_items'>
                  Places to stay
                </NavLink>
              </li>
              <li>
                <NavLink to='/' className='nav_items'>
                  NFTs
                </NavLink>
              </li>
              <li>
                <NavLink to='/' className='nav_items'>
                  Community
                </NavLink>
              </li>
          </ul>
          <Link to='/' className='wallet' onClick={() => setIsOpen(true)}>
                 Connect wallet
          </Link>

          <button className="nav__toggle btn" onClick={() => setIsShowing(prev => !prev)}>
            {
              isShowing ? <img src={close} alt='close nav items'/> : <img src={menu} alt='Nav items'/>
            }
          </button>
          </div>
          
          <ul className={`nav__links ${isShowing ? 'show__nav' : 'hide__nav'}`}>
              <li>
                <NavLink to='/' className='nav__links' onClick={() => setIsShowing(prev => !prev)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='../places' className='nav__links' onClick={() => setIsShowing(prev => !prev)}>
                  Places to stay
                </NavLink>
              </li>
              <li>
                <NavLink to='/' className='nav__links' onClick={() => setIsShowing(prev => !prev)}>
                  NFTs
                </NavLink>
              </li>
              <li>
                <NavLink to='/' className='nav__links' onClick={() => setIsShowing(prev => !prev)}>
                  Community
                </NavLink>
              </li>
              <Link to='/' className='nav__connect'>
                 Connect wallet
              </Link>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar