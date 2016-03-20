import React from 'react'
import { Link } from 'react-router'

export default React.createClass({



  render: function(){

    return(
      <div>
        <div>A view of just my stories that I have finished. I will be able to click on one and then look at it, maybe have an option to redo it or something?</div>
  <div> <Link to="/story/:id">Links to view one story</Link>  </div>
        <p></p>

      </div>
    )
  }
})
