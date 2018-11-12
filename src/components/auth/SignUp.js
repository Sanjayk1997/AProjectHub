import React , { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    email : '',
    password : '',
    firstName : '',
    lastName : ''
  }

  handleChange = (e) => {
    this.setState({
       [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.signUp(this.state);
  }

  render() {
    const { auth, authError } = this.props
    if (auth.uid) return <Redirect to = '/' />
    return (
      <div className = 'container'>
        <form className = 'blue-grey lighten-5' onSubmit = { this.handleSubmit }>
          <h5 className = 'grey-text text-darken-3'>Sign Up</h5>
          <div className = 'input-field'>
            <label htmlFor = 'email'>Email</label>
            <input type = 'email' id = 'email' onChange = { this.handleChange }/>
          </div>
          <div className = 'input-field'>
            <label htmlFor = 'password'>Password</label>
            <input type = 'password' id = 'password' onChange = { this.handleChange }/>
          </div>
          <div className = 'input-field'>
            <label htmlFor = 'firstname'>First Name</label>
            <input type = 'text' id = 'firstName' onChange = { this.handleChange }/>
          </div>
          <div className = 'input-field'>
            <label htmlFor = 'lastname'>Last Name</label>
            <input type = 'text' id = 'lastName' onChange = { this.handleChange }/>
          </div>
          <div className = 'input-field'>
            <button className = 'btn brown darken-3 z-depth-0'>Sign Up</button>
              <div className = 'container center'>
                { authError ?
                  <div className = "card-panel red lighten-4 center">
                    <span className = "red-text text-darken-4">{ authError }</span>
                  </div>
                     : null}
              </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
