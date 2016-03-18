import React from 'react'
import { Link } from 'react-router'

export default React.createClass({



  render: function(){

    return(
      <div>
      <div><Link to="/">Home</Link></div>
        <div>Logout component</div>

      </div>
    )
  }
})
