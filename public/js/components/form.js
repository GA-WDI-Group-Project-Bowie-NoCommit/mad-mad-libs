import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  handleSubmit: function(event){
    event.preventDefault()

    var whatevs = {

    }



  },

  render: function(){

    var style = {
      border: '2px solid black',
      padding: '6px'
    }

    return(
      <div style={style}>

        <div>Form</div>
        <form ref="crudForm" onSubmit={this.handleSubmit}>
          <input ref="name" type="text" placeholder="name" />
          <input ref="description" type="text" placeholder="Description" />
          <button type="submit">Form Button</button>
        </form>
      </div>
    )
  }
})
