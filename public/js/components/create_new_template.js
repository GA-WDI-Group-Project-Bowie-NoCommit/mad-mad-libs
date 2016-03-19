import React from 'react'
import { Link } from 'react-router'

export default React.createClass({



  render: function(){

    return(
      <div>
      <div><Link to="/">Home</Link></div>
        <div>
        This is where a user can create a template
        <p></p>
        <div><Link to="/form">Form</Link></div>
        </div>

      </div>
    )
  }
})
