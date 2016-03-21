import React from 'react'
import { Link } from 'react-router'
import TemplatesA from './templates_all.js'
export default React.createClass({



  render: function(){

    return(
      <div>
        <div>Read everyone’s stories or your own!</div>

        <div className="everyonesstories"> <Link to="/stories/all">Everyone’s stories</Link>  </div>
        <div className="mystories"> <Link to="/stories/mine">My stories</Link>  </div>
        <div className ="cardscontainer"><TemplatesA /> </div>


      </div>
    )
  }
})
