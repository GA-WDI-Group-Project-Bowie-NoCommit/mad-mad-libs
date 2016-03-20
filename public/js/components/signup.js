import React from 'react'
import { Link } from 'react-router'
import Firebase from 'firebase'

var userRef = new Firebase('https://crackling-torch-879.firebaseio.com/');
var userInfo = new Firebase('https://crackling-torch-879.firebaseio.com/users/');
var users = userRef.child('users');

export default React.createClass({

  getInitialState: function(){
    return{
      user: {}
    }
  },

  componentWillMount: function(){
    if(userRef.getAuth()){
      var currentuser = userRef.getAuth().uid;
      userInfo.on('value', (snapshot) => {
        this.setState({user: snapshot.val()[currentuser]});
      });
    }
    this.setState({user:{}});
  },

  componentWillUnmount: function() {
    userInfo.off();
  },

  handleSubmit: function(event){
    event.preventDefault();
    var userinfo = {
      email : this.refs.email.value,
      password : this.refs.password.value,
      name : this.refs.name.value,
    }
    console.log(userinfo);
    this.refs.signupform.reset();
    userRef.createUser({email: userinfo.email, password: userinfo.password}, (error, userData) => {
      if(error){
        console.log('Error creating user.', error);
      } else {
        console.log('Welcome ' + userinfo.name);
        users.child(userData.uid).set({
          name: userinfo.name,
          email: userinfo.email,
        });
        userRef.authWithPassword({
          email: userinfo.email,
          password: userinfo.password,
        }, (error, authData) => {
          if(error){
            console.log('Login Failed. Please try again.', error);
          }
          console.log('Login success.')
        });

      }
    })

  },

  render: function(){

    if(userRef.getAuth()){
      return(
        <div>
          <h3>Welcome {this.state.user.name}</h3>
        </div>
      )
    };

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
