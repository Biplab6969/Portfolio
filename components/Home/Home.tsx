"use client";
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Skills from './Slills/Skills'
import Contact from './Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  },[])
  return (
    <div className='overflow-hidden'>
      <div id='hero'><Hero /></div>
      <div id='services'><Services /></div>
      <div id='education'><Resume /></div>
      <div id='projects'><Projects /></div>
      <div id='skills'><Skills /></div>
      <div id='contacts'><Contact /></div>
    </div>
  );
}

export default Home
