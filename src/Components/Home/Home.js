import React from 'react'
import Hero from '../Hero/Hero'
import Destination from '../Hero/Destination'
import { HomeDetails, HomeTourDetails } from '../Data/Data'


const Home = () => {
  return (
    <div>      
      <Hero cName="hero" 
      heroImg="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      title="Your Journey Your Story"
       text="Choose Your Favourite Destination" 
       url="/places" btnClass="show" buttonText="Travel Plan" />      
      
      <Destination data1={HomeDetails} data2={HomeTourDetails}/>
    </div>
  )
}

export default Home