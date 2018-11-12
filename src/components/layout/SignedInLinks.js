import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return(
    <ul className = 'right'>
      <li><NavLink to = '/create' className = 'deep-purple-text text-lighten-5'>New Project</NavLink></li>
      <li><a onClick = { props.signOut } className = 'deep-purple-text text-lighten-5'>Log Out</a></li>
      <li><NavLink to = '/' className = 'btn btn-floating brown lighten-3'>{ props.profile.initials }</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
