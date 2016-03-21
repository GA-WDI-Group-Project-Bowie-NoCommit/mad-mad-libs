import React from 'react'
import { Link } from 'react-router'
import TemplatesM from './templates_mine.js'
export default React.createClass({



  render: function(){

    return(
      <div>
        <div>A list of options to either create a new template or read your own stories (which would then give options to let you edit delete) - that route would be templates_edit.js and  templates/:id/edit</div>
        <div className="newtemplate"> <Link to="/templates/new">Create a new story</Link>  </div>
        <div className="mytemplates"> <Link to="/templates/:id/edit">My stories</Link>  </div>

        <div className ="cardscontainer"><TemplatesM /> </div>


      </div>
    )
  }
})
