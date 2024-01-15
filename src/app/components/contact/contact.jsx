'use client'
// import Link from 'next/link';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faWindowMinimize,
//   faBars,
//   faUser,
//   faDollarSign,
//   faHurricane,
//   faAddressBook,
//   faWrench
// } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react';
import './contact.scss'
const linkUrl = 'https://calendly.com/aliumairkhan/30min';
const X__link = 'https://twitter.com/Ali_ariens';
const github__link = 'https://github.com/Ali-Umair-Khan';
const gmail__link = "mailto:rexexpert@gmail.com";

const Contact = () => {
    const [readMore, setReadMore]= useState(false);
    const text = `My stack is MERN/Next. I am actively looking for collaboration on challenges related to this tech, particularly those found on platforms. 
    I am also open to joining projects focusing on the meticulous development of web apps, sophisticated landing pages, and websites. 
    I usually follow component based approach, where each section/component of webpage is provided with separate folders having separate files for
    code and styling, I style using sass. If you share similar interests, I am eager to explore potential collaborative opportunities.`;
    return(
        <section className='contact'>
            <h1 className='contact__h1'>
             {!readMore  ? <div className='contact__h1-short'><h3 style={{display:'inline', fontSize:'2.4rem'}}>{text.slice(0,(text.length)*0.5)}...</h3> <button className='text__btn' onClick={()=>setReadMore(!readMore)}>Read more</button></div> : <div className='contact__h1-full'><h3 style={{display:'inline', fontSize:'2.4rem'}}>{text}</h3> <button className='text__btn' onClick={()=>setReadMore(!readMore)}>Read less</button> </div> }
            </h1>
            <ul className='contact__socials'>
                <a href={X__link} target="_blank" rel="noopener noreferrer"><img src='/banner/twitter4.png' alt='twitter'/></a>
                <a href={gmail__link} target="_blank" rel="noopener noreferrer"><img src='/banner/gmail3.png' alt='rexexpert@gmail.com'/></a>
                <a href={github__link} target="_blank" rel="noopener noreferrer"><img src='/banner/github3.png' alt='github'/></a>
                {/* <img src='/banner/github3.png' alt='github'/>
                <img src='/banner/github3.png' alt='github'/>
                <img src='/banner/github3.png' alt='github'/>
            <a href={linkUrl} target="_blank" rel="noopener noreferrer"related to><img src='/banner/github3.png' alt='github'/></a> */}
            </ul>
        </section>
    )
}

export default Contact






// const linkUrl = 'https://calendly.com/aliumairkhan/30min';

{/* <li onClick={handleMenuItemClick}><a href={linkUrl} target="_blank" rel="noopener noreferrer" onClick={handleMenuItemClick}>Contact <FontAwesomeIcon icon={faAddressBook} style={{ fontSize: '1.5rem', marginLeft:'0.5rem'}} /></a></li> */}
