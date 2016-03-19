import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render: function(){
    return(
      <div>
        <Link to='/templates/:id/story/new'>Click this</Link>
        {this.props.templates}
        {this.props.children}
      </div>
    )
  }
})
