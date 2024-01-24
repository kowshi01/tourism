import React from 'react'
import Hero from '../Hero/Hero'
import Destination from '../Hero/Destination'
import { HomeDetails, HomeTourDetails } from '../Data/Data'
const Service = () => {
  return (
    <>
    <Hero cName="hero-mid" 
    heroImg="https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    title="PLACES" btnClass="hide"
    />
    <Destination data1={HomeDetails} data2={HomeTourDetails}/>
  </>
  )
}

export default Service