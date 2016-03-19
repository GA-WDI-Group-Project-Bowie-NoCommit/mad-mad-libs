import React from 'react'
import { Link } from 'react-router'

import Signup from './signup.js'
import Login from './login.js'
import Logout from './logout.js'

// let Auth = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <div><Link to="/signup"> Sign Up </Link></div>
//         <div><Link to="/login"> Login </Link></div>
//         <div><Link to="/logout"> Logout </Link></div>
//         {this.props.children}
//       </div>
//     )
//   }
// })

export default React.createClass({

  handleSubmit: function(event){
    event.preventDefault()

    var crud = {

    }

  },

  render: function(){

    var style = {
      border: '2px solid black',
      padding: '6px'
    }

    return(
      <div style={style}>
        <div>Authorization Stuff Here!</div>
        {/*<div><Route path="/signup" component={Signup}/></div>
        <div><Route path="/login" component={Login} /></div>
        <div><Route path="/logout" component={Logout} /></div>*/}
      </div>
    )
  }
})
