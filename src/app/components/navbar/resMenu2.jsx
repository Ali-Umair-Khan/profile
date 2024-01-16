'use client'
// import Link from 'next/link';
import { Link } from "react-scroll";
// import {Link as NextLink} from 'next/link';
import './style4.scss';
// import './navbar.scss';
import React, {useState, useRef} from 'react';
import { useClickAway } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMinimize,
  faBars,
  faUser,
  faDollarSign,
  faHurricane,
  faAddressBook,
  faWrench
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
  // style={{ mask: 'url(#curved-mask)' }}

  // Ref to store a reference to the DOM element
  const ref = useRef(null);

  // Custom hook to detect clicks outside of the navigation and close it
  useClickAway(ref, handleMenuItemClick);

    return(
        <nav>
            {/* <svg width="0" height="0" style={{ position: 'absolute', visibility: 'hidden' }}>
            {/* <defs>
              <mask id="curved-mask" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
                <rect width="1" height="1" fill="white" />
                <rect width="1" height="0.8" x="0" y="0.2" fill="black" />
                <circle cx="0.2" cy="0.2" r="0.2" fill="white" />
              </mask>
            </defs> */}
            {/* </svg>  */}
            <ul className='navbar'>
                <div className='navbar__left' onClick={handleMenuItemClick}>
                    <div className='navbar__left-image'>
                        <img src='/ak.gif' alt="AUK"/>
                    </div>
                    <h2 className='navbar__left-name'>Ali Umair Khan</h2>
                </div>
                {/* <li onClick={handleMenuItemClick} className='navbar__logo'><Link href='/'><img src='ak.gif' alt="" /></Link></li> */}
                <input type='checkbox' id='check' className='navbar__checkbox' checked={menuOpen} onChange={handleMenuToggle}/>
                <span className='navbar__menu' ref={ref}>
                    {/* <li onClick={handleMenuItemClick}>
                      <Link to='me'  smooth={true} duration={500}>
                          <a onClick={handleMenuItemClick}>Who I am</a>
                      </Link>
                    </li> */}
                    <li onClick={handleMenuItemClick} className='navbar__menu-item'>
                      <Link to='work'  smooth={true} duration={1000}>
                          <a onClick={handleMenuItemClick}>Work <FontAwesomeIcon icon={faHurricane} style={{ fontSize: '1.5rem', marginLeft:'0.5rem'}} /></a>
                          <div className='dropdown-menu'>
                            <p>page1</p>
                            <p>page2</p>
                            <p>page3</p>
                            <p>page4</p>
                          </div>
                      </Link>
                    </li>
                    <li onClick={handleMenuItemClick} className='navbar__menu-item'>
                      <Link to='services'  smooth={true} duration={1000}>
                          <a onClick={handleMenuItemClick}>Services <FontAwesomeIcon icon={faWrench} style={{ fontSize: '1.5rem', marginLeft:'0.5rem'}} /></a>
                          <div className='dropdown-menu'>
                            <p>page1</p>
                            <p>page2</p>
                            <p>page3</p>
                            <p>page4</p>
                          </div>
                      </Link>
                    </li>
                    <li onClick={handleMenuItemClick} className='navbar__menu-item'>
                      <Link to='charging' smooth={true} duration={1000}>
                          <a onClick={handleMenuItemClick}>Charging <FontAwesomeIcon icon={faDollarSign} style={{ fontSize: '1.5rem', marginLeft:'0.5rem'}} /></a>
                          <div className='dropdown-menu'>
                            <p>page1</p>
                            <p>page2</p>
                            <p>page3</p>
                            <p>page4</p>
                          </div>
                      </Link>
                    </li>
                    <li onClick={handleMenuItemClick}><a href={linkUrl} target="_blank" rel="noopener noreferrer" onClick={handleMenuItemClick}>Contact <FontAwesomeIcon icon={faAddressBook} style={{ fontSize: '1.5rem', marginLeft:'0.5rem'}} /></a></li>
                    <label htmlFor='check' className='navbar__close'><FontAwesomeIcon icon={faWindowMinimize} style={{ fontSize: '3rem', color:'white'}}/></label>
                </span>
                <label htmlFor='check' className='navbar__open'><FontAwesomeIcon icon={faBars} style={{ fontSize: '3rem' }}/></label>
            </ul>
        </nav>
    )
}


export default ResponsiveMenu