import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return(
    <ul className = 'right deep-purple-text text-lighten-4'>
      <li><NavLink to = '/signup' className = 'deep-purple-text text-lighten-5'>Sign Up</NavLink></li>
      <li><NavLink to = '/login' className = 'deep-purple-text text-lighten-5'>Log In</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks;
