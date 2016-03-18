import React from 'react'
import { Link } from 'react-router'
import Firebase from 'firebase'

var ref = new Firebase('https://crackling-torch-879.firebaseio.com/');


export default React.createClass({

  handleClick: function(event) {
    event.preventDefault();
    if(ref.getAuth()){
      ref.unauth();
      console.log('Successfully logged out');
    } else {
      console.log('You need to log in to log out');
    }
  },

  render: function(){

    if(!ref.getAuth()){
      console.log('You need to login');
    } else {
      console.log('Welcome ' + ref.getAuth().uid);
    }


    return(
      <div>
        <div><Link to="/">Home</Link></div>
        <div>
          <button ref="logout" onClick={this.handleClick}>Logout </button>
        </div>
      </div>
    )
  }
})
