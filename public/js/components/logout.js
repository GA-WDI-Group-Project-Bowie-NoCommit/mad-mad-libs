import React from 'react'
import { Link } from 'react-router'
import Firebase from 'firebase'

var userRef = new Firebase('https://crackling-torch-879.firebaseio.com/');
var userInfo = new Firebase('https://crackling-torch-879.firebaseio.com/users/')


export default React.createClass({

  getInitialState: function(){    //set initial state.
    return{
      user: {}
    }
  },

  componentWillMount: function(){   //load from userInfo.
    if(userRef.getAuth()){
      var currentuser = userRef.getAuth().uid;
      userInfo.on('value', (snapshot) => {
        this.setState({user: snapshot.val()[currentuser]});
      });
    }
    this.setState({user: {}});
  },

  componentWillUnmount: function(){   //disable connection?
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
