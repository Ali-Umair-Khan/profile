'use client'
import React from 'react';
import { Element } from 'react-scroll';
import { useSpring, animated } from 'react-spring';

// Import your components here
import ResponsiveMenu from './components/navbar/resMenu2';
import Hero from './components/hero/hero.jsx';
import Abilities from './components/abilities/abilities.jsx';
import Tools from './components/tools/tools.jsx';
import ImageSlider from './components/imageSlider/imageSlider.jsx';
import Carousel from './components/imageCarousel3/imageCarousel3.jsx';
import FaqComponent from './components/faq/faq';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';

import './page.module.css';

const componentsImport = [
  ResponsiveMenu,
  Hero,
  () => (
    <Element name="services">
      <Abilities className="card" />
    </Element>
  ),
  Tools,
  () => (
    <Element name="work">
      <ImageSlider className="card" />
    </Element>
  ),
  Carousel,
  () => (
    <Element name="charging">
      <FaqComponent className="card" />
    </Element>
  ),
  Skills,
  Footer,
];

const AnimatedWrapper = ({ children, index }) => {
  const AnimatedComponent = animated(componentsImport[index]); // Wrap each component with animated

  const props = useSpring({
    opacity: 1,
    y: 100,
    x: 100,
    rotation: 0,
    from: { opacity: 0.5, y:0, x: 0, rotation: -20 },
  });

  return <AnimatedComponent style={props}>{children}</AnimatedComponent>;
};

const App = () => {
  return (
    <main className="main">
      {componentsImport.map((Component, index) => (
          <Component />
      ))}
    </main>
  );
};

export default App;
