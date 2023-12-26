'use client'
// import Link from 'next/link';
import { Link } from "react-scroll"
import './style4.css';
// import './navbar.scss';
import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMinimize,
  faBars,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const ResponsiveMenu = () => {
    
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Close the menu when a menu item is clicked
  };


    return(
        <nav>
            <ul className='navbar'>
                <div className='navbar__left' onClick={handleMenuItemClick}>
                    <div className='navbar__left-image'>
                        <img src='/ak.gif' alt=""/>
                    </div>
                    <h2 className='navbar__left-name'>Ali Umair Khan</h2>
                </div>
                {/* <li onClick={handleMenuItemClick} className='navbar__logo'><Link href='/'><img src='ak.gif' alt="" /></Link></li> */}
                <input type='checkbox' id='check' className='navbar__checkbox' checked={menuOpen} onChange={handleMenuToggle}/>
                <span className='navbar__menu'>
                    <li onClick={handleMenuItemClick}>
                      <Link to='me'  smooth={true} duration={500}>
                          <a>Who I am</a>
                      </Link>
                    </li>
                    <li onClick={handleMenuItemClick}>
                      <Link to='work'  smooth={true} duration={500}>
                          <a>Work</a>
                      </Link></li>
                    <li onClick={handleMenuItemClick}>
                      <Link to='services'  smooth={true} duration={500}>
                          <a>Services</a>
                      </Link>
                    </li>
                    <li onClick={handleMenuItemClick}>
                      <Link to='charge'  smooth={true} duration={500}>
                          <a>Charging</a>
                      </Link>
                    </li>
                    <li onClick={handleMenuItemClick}><Link href='/'>Contact <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.5rem', marginLeft:'0.5rem'}} /></Link></li>
                    <label for='check' className='navbar__close'><FontAwesomeIcon icon={faWindowMinimize} style={{ fontSize: '3rem', color:'white'}}/></label>
                </span>
                <label for='check' className='navbar__open'><FontAwesomeIcon icon={faBars} style={{ fontSize: '3rem' }}/></label>
            </ul>
        </nav>
    )
}


export default ResponsiveMenu