'use client'
// import Link from 'next/link';
import { Link } from "react-scroll";
// import {Link as NextLink} from 'next/link';
import './style4.scss';
// import './navbar.scss';
import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMinimize,
  faBars,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const ResponsiveMenu = () => {
  const linkUrl = 'https://calendly.com/aliumairkhan/30min';

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    // setTimeout(() => {
      setMenuOpen(false);
    // }, 50); // Adjust the delay time as needed

  //   Events.scrollEvent.register('end', () => {
  //   setMenuOpen(false);
  // });

   };

  // onChange={handleMenuToggle}
    return(
        <nav>
            <ul className='navbar'>
                <div className='navbar__left' onClick={handleMenuItemClick}>
                    <div className='navbar__left-image'>
                        <img src='/ak.gif' alt="AUK"/>
                    </div>
                    <h2 className='navbar__left-name'>Ali Umair Khan</h2>
                </div>
                {/* <li onClick={handleMenuItemClick} className='navbar__logo'><Link href='/'><img src='ak.gif' alt="" /></Link></li> */}
                <input type='checkbox' id='check' className='navbar__checkbox' checked={menuOpen} onChange={handleMenuToggle}/>
                <span className='navbar__menu'>
                    {/* <li onClick={handleMenuItemClick}>
                      <Link to='me'  smooth={true} duration={500}>
                          <a onClick={handleMenuItemClick}>Who I am</a>
                      </Link>
                    </li> */}
                    <li onClick={handleMenuItemClick}>
                      <Link to='work'  smooth={true} duration={500}>
                          <a onClick={handleMenuItemClick}>Work</a>
                      </Link></li>
                    <li onClick={handleMenuItemClick}>
                      <Link to='services'  smooth={true} duration={500}>
                          <a onClick={handleMenuItemClick}>Services</a>
                      </Link>
                    </li>
                    <li onClick={handleMenuItemClick}>
                      <Link to='charging' smooth={true} duration={500}>
                          <a onClick={handleMenuItemClick}>Charging</a>
                      </Link>
                    </li>
                    <li onClick={handleMenuItemClick}><a href={linkUrl} target="_blank" rel="noopener noreferrer" onClick={handleMenuItemClick}>Contact <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.5rem', marginLeft:'0.5rem'}} /></a></li>
                    <label for='check' className='navbar__close'><FontAwesomeIcon icon={faWindowMinimize} style={{ fontSize: '3rem', color:'white'}}/></label>
                </span>
                <label for='check' className='navbar__open'><FontAwesomeIcon icon={faBars} style={{ fontSize: '3rem' }}/></label>
            </ul>
        </nav>
    )
}


export default ResponsiveMenu