import React from 'react'
import { Link } from 'react-router'
import Firebase from 'firebase'

var ref = new Firebase('https://crackling-torch-879.firebaseio.com/');
var users = ref.child('users');

export default React.createClass({

  handleSubmit: function(event){
    event.preventDefault();
    var userinfo = {
      email : this.refs.email.value,
      password : this.refs.password.value,
      name : this.refs.name.value,
    }
    console.log(userinfo);
    this.refs.signupform.reset();
    ref.createUser({email: userinfo.email, password: userinfo.password}, (error, userData) => {
      if(error){
        console.log('Error creating user.', error);
      } else {
        console.log('Welcome ' + userinfo.name);
        users.child(userData.uid).set({
          name: userinfo.name,
          email: userinfo.email,
        });
      }
    })

  },

  render: function(){

    return(
      <div>
      <div><Link to="/">Home</Link></div>
        <div>
          <form ref="signupform" onSubmit={this.handleSubmit}>
            <input ref="email" placeholder="email" /><br/>
            <input ref="password" type="password" placeholder="password" /><br/>
            <input ref="name" placeholder="Name" /><br/>
            <input type="submit" value="Submit" />
          </form>
        </div>

      </div>
    )
  }
})
