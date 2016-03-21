import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render: function(){

    return(
      <div className="card" className="stories">
        <Link to={`/stories/new/templates/${this.props.template.title}`}>{this.props.template.title}</Link>
      </div>
    )
  }
})
