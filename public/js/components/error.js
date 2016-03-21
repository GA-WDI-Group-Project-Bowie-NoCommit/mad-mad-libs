// require('dotenv').config();
import React from 'react'
import $ from 'jquery'

export default React.createClass({

  getInitialState: function(){
    return {
      rword: '',
    }
  },

  componentDidMount: function(){  //using backend to get random word.
    $.get('/wordnik/randomerror').done( data => {
      this.setState({rword: data.word})
    })
  },

  render: function() {
    return(
      <div>
        <h1>This page doesn’t exist. Here is a random word for your effort.</h1>
        <h1>{this.state.rword}</h1>
      </div>
    )
  }

})
