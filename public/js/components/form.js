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
      <div className="form" style={style}>
        <form ref="crudForm" onSubmit={this.handleSubmit}>
          <input ref="name" type="text" placeholder="your name" />
          <input ref="description" type="text" placeholder="Story Title" />
          <textarea ref="test" rows="5"> Testing what is here can we put something in dynamically for editing later? </textarea>
          <button type="submit">Form Button</button>
        </form>
      </div>
    )
  }
})
