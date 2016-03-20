import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render: function(){

    return(
      <div>
        <Link to={`/form/${this.props.template.title}`}>{this.props.template.title}</Link>
        {this.props.children}
      </div>
    )
  }
})
