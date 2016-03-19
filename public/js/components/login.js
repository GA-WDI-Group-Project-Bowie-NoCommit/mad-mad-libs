import React from 'react'
import { Link } from 'react-router'
import Firebase from 'firebase'
import $ from 'jquery'

var userRef = new Firebase('https://crackling-torch-879.firebaseio.com/');
var userInfo = new Firebase('https://crackling-torch-879.firebaseio.com/users/');

export default React.createClass({

  getInitialState: function(){
    return {
      user: {}
    }
  },

  componentWillMount: function(){
    if(userRef.getAuth()){
      var currentuser = userRef.getAuth().uid;
      console.log(currentuser);
      userInfo.on('value', (snapshot) => {
        this.setState({user: snapshot.val()[currentuser]});
      });
    }
    this.setState({user: {}});
  },

  componentWillUnmount: function(){
    userInfo.off();
  },

  handleSubmit: function(event) {
    event.preventDefault();
    userRef.authWithPassword({
      email: this.refs.email.value,
      password: this.refs.password.value,
    }, (error, authData) => {
      if(error) {
        console.log('Login Failed.', error);
      } else {
        console.log('Login success.')
      }
    })
    this.refs.loginform.reset();
  },

  renderUser: function(key){
    return(
      <GetUserInfo details={this.state.user}/>
    )
  },

  render: function(){

    if(userRef.getAuth()) {

      return(
        <GetUserInfo details={this.state.user} />
      )
    } else {
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

  }
})

const GetUserInfo = React.createClass({
  render: function(){
    return(
      <div>
        <h3> WelcomE {this.props.details.name} </h3>
      </div>
    )
  }
})
