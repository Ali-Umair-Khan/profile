import Image from 'next/image'
import styles from './page.module.css';
// import Navbar from './components/navbar/navbar.jsx';
import ResponsiveMenu from './components/navbar/resMenu2';
import Hero from './components/hero/hero.jsx';
import Abilities from './components/abilities/abilities.jsx';
import Tools from './components/tools/Tools.jsx';
import ImageSlider from './components/imageSlider/imageSlider.jsx';
// import ImageCarousel from './components/imageCarousel/imageCarousel.jsx';
// import Carousel from './components/imageCarousel2/imageCarousel2.jsx';
import Carousel from './components/imageCarousel3/imageCarousel3.jsx';
import FaqComponent from './components/faq/faq';
import Skills from './components/skills/skills'
import Footer from './components/footer/footer'







import './page.module.css'

export default function Home() {
  return (
  <main className='main'>
      <ResponsiveMenu/>
      {/* <Navbar/> */}
      <Hero/>
      <Abilities/>
      <Tools/>
      <ImageSlider/>
      {/* <ImageCarousel/> */}
      <Carousel/>
      <FaqComponent/>
      <Skills/>
      <Footer/>

  </main>
  )
}