import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const auth = props.auth;
  const { profile } = props;
  const links = auth.uid ? <SignedInLinks profile = { profile }/> :   <SignedOutLinks />;
  return(
    <nav className = 'nav-wrapper brown darken-3'>
      <div className = 'container'>
        <Link to = '/' className = 'brand-logo left deep-purple-text text-lighten-5'>RetroSpect</Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);
