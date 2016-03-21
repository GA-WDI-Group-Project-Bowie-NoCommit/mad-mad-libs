import React from 'react'
import { Link } from 'react-router'

export default React.createClass({



  render: function(){

    return(
      <div>
        <div>A list of completed stories for people to view</div>
        <div> <Link to="/story/:id">Links to view one story</Link>  </div>
      </div>
    )
  }
})
