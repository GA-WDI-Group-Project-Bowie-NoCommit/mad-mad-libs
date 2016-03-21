import React from 'react'
import { Link } from 'react-router'
import TemplatesM from './templates_mine.js'
export default React.createClass({



  render: function(){

    return(
      <div>
        <div className="newtemplate"> <Link to="/templates/new">Create a new story</Link>  </div>
        <div className="mytemplates"> <Link to="/templates/:id/edit">My stories</Link>  </div>

        <div className ="cardscontainer"><TemplatesM /> </div>


      </div>
    )
  }
})
