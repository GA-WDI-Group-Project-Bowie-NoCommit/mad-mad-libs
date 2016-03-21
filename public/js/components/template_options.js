import React from 'react'
import { Link } from 'react-router'
import TemplatesA from './templates_all.js'
export default React.createClass({



  render: function(){

    return(
      <div>
        <div>A list of options to either fill in nouns and verbs in a story, OR read everyones story OR read your own stories (which would then give options to let you edit delete) </div>

        <div className="everyonesstories"> <Link to="/stories">Everyone’s stories</Link>  </div>
        <div className="mystories"> <Link to="/stories/mine">My stories</Link>  </div>
        <div><TemplatesA /> </div>


      </div>
    )
  }
})
