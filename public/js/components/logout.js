import React from 'react'
import { Link } from 'react-router'
import Firebase from 'firebase'

var userRef = new Firebase('https://crackling-torch-879.firebaseio.com/');
var userInfo = new Firebase('https://crackling-torch-879.firebaseio.com/users/')


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
  },

  componentWillUnmount: function(){
    userInfo.off();
  },

  handleClick: function(event) {
    event.preventDefault();
    if(userRef.getAuth()){
      userRef.unauth();
      console.log('Successfully logged out');
    } else {
      console.log('You need to log in to log out');
    }
  },

  render: function(){

    if(!userRef.getAuth()){
      return(
        <div>
          <h3>You need to log in</h3>
        </div>
      )
    };
    // userInfo.on('value', (snapshot) => {
    //   this.state.userInfo = snapshot.val()[userRef.getAuth().uid];
    //   this.setState({userInfo: this.state.userInfo})
    // })

    // function currentUser(valueAssigned){
    //   var iam;
    //   userInfo.on('value', (snapshot) => {
    //     iam = (snapshot.val()[userRef.getAuth().uid].name);
    //     valueAssigned(iam);
    //   })
    // };
    // function onComplete(iam){
    //   return (iam)
    // }

    // console.log(currentUser(onComplete))

    return(
      <div>
        <div><Link to="/">Home</Link></div>
        <div><h1>Welcome {this.state.user.name}</h1></div>
        <div>
          <button ref="logout" onClick={this.handleClick}>Logout </button>
        </div>
      </div>
    )


  }
})
