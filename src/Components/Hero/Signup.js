import React from 'react'
import '../Contact/Contact.css'
import Success from './Success'
import { NavLink } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='form-container'>
      <h1>Fill the details!</h1>
      <form onSubmit={<Success/>}>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Password' />
        <NavLink to='/success'><button>Submit</button></NavLink>
      </form>
    </div>
  )
}

export default Signup