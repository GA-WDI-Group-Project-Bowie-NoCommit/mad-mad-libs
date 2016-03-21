import React from 'react'
import { Link } from 'react-router'

export default React.createClass({



  render: function(){

    return(
      <div className="templates">
        <div>A view of just my templates that I have created. I will be able to click on one and then look at it, and from that view of one, edit or delete it</div>
  <div className="templatescolortest"> <Link to="/templates/:id/edit">Links to view one story: STUB just for routing until component is complete</Link>  </div>
        <p></p>

      </div>
    )
  }
})
