'use client'
import Image from 'next/image'
import styles from './page.module.css';
// import Navbar from './components/navbar/navbar.jsx';
import ResponsiveMenu from './components/navbar/resMenu2';
import Hero from './components/hero/hero.jsx';
import Abilities from './components/abilities/abilities.jsx';
import Tools from './components/tools/tools.jsx';
import ImageSlider from './components/imageSlider/imageSlider.jsx';
// import ImageCarousel from './components/imageCarousel/imageCarousel.jsx';
// import Carousel from './components/imageCarousel2/imageCarousel2.jsx';
import Carousel from './components/imageCarousel3/imageCarousel3.jsx';
import FaqComponent from './components/faq/faq';
import Skills from './components/skills/skills'
import Footer from './components/footer/footer'
import {Element} from 'react-scroll';







import './page.module.css'

export default function Home() {
  return (
  <main className='main'>
      <ResponsiveMenu/>
      <Hero/> 
      <Element name='services'>
          <Abilities/>
      </Element>
      <Tools/>
      <Element name='work'>
        <ImageSlider/>
      </Element> 
       <Carousel/>
      <Element name='charging'>
        <FaqComponent/>
      </Element>
      <Skills/>
      <Footer/> 

  </main>
  )
}
      

// /* <ImageCarousel/> */

//       /* <Navbar/> */
