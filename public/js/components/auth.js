import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  handleSubmit: function(event){
    event.preventDefault()

    var crud = {

    }

  },

  render: function(){

    var style = {
      border: '2px solid black',
      padding: '6px'
    }

    return(
      <div style={style}>
      <div><Link to="/">Home</Link></div>
        <div>Authorization Stuff Here!</div>

      </div>
    )
  }
})
