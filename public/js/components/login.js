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
        console.log('Login success.') //, authData.uid)
        // userInfo.on('value',(snapshot) => {
        //   this.state.user = snapshot.val()[authData.uid];
        //   console.log(this.state.user);
        // });
        // this.setState({user: this.state.user});
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

      //--test using promist --
      // var currentuser = userRef.getAuth().uid;
      // function getUser(){
      //   var name, def=$.Deferred();
      //   userInfo.on('value', (snapshot) => {
      //     name = (snapshot.val()[currentuser].name);
      //     def.resolve(name);
      //   });
      //   return def.promise();
      // }
      // getUser().then((n) => {
      //   console.log(typeof n);
      //   return(
      //     <div>
      //       <h3> WelcOmE </h3>
      //     </div>
      //   )
      // })

      // var currentuser = userRef.getAuth().uid;
      // var whoami = null;
      // console.log(currentuser);
      // userInfo.on('value', (snapshot) => {
      //   whoami = (snapshot.val()[currentuser].name);
      //   // this.setState({user: this.state.user});
      // })
      // // console.log(currentuser);
      // return(
      //   <div>WelComE</div>
      // )
      // function foo(fn){
      //   userInfo.on('value',(snapshot) => {
      //     fn(snapshot.val()[userRef.getAuth().uid].name);
      //   });
      // }
      // var currentuser = foo(function(name){
      //   return name;
      // })
      // console.log(currentuser);
      // return (
      //   <div> WelCome </div>
      // )
      // return(
      //   <div>
      //     {this.renderUser}
      //   </div>
      // )
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
