import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render: function(){

    return(
      <div className="card" className="stories">
        <Link to={`templates/${this.props.template.title}/story/new`}>{this.props.template.title}</Link>

      </div>
    )
  }
})
