import React from 'react'
import Hero from '../Hero/Hero'
import './Contact.css'
import { NavLink } from 'react-router-dom'
const Contact = () => {
  
  return (
    <>
    <Hero cName="hero-mid" 
    heroImg="https://images.pexels.com/photos/3769120/pexels-photo-3769120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    title="CONTACT" btnClass="hide"
    />
    <div className='form-container'>
      <h1>Send a message to us!</h1>
      <form>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
        <input type="tel" placeholder='Phone number' />
        <textarea name="message"rows="4" placeholder='Message'/>
        <NavLink to='/success'><button>Submit</button></NavLink>
      </form>
    </div>
  </>
  )
}

export default Contact