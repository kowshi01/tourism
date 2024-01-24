import React from 'react'
import Hero from '../Hero/Hero'
import Destination from '../Hero/Destination'
import {aboutData, aboutTourData } from '../Data/Data'
const About = () => {
  return (
    <>
      <Hero cName="hero-mid" 
      heroImg="https://www.hillpeaktours.com/wp-content/uploads/2023/06/florian-haun-nj-FumAB6dI-unsplash-2048x1365.jpg"
      title="ABOUT" btnClass="hide"
      />
      <Destination data1={aboutData} data2={aboutTourData}/>
    </>
  )
}

export default About