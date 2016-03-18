import React from 'react'
import { Link } from 'react-router'
import Firebase from 'firebase'

var ref = new Firebase('https://crackling-torch-879.firebaseio.com/');

export default React.createClass({

  handleSubmit: function(event) {
    event.preventDefault();
    ref.authWithPassword({
      email: this.refs.email.value,
      password: this.refs.password.value,
    }, (error, authData) => {
      if(error) {
        console.log('Login Failed.', error);
      } else {
        console.log('Login success: ', authData.uid)
      }
    })
    this.refs.loginform.reset();
  },

  render: function(){

    return(
      <div>
        <div><Link to="/">Home</Link></div>
        <div>
          <form ref="loginform" onSubmit={this.handleSubmit}>
            <input ref="email" placeholder="email" /><br/>
            <input ref="password" placeholder="password" type="password" /><br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
})
