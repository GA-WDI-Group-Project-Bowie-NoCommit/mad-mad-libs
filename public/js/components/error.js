// require('dotenv').config();
import React from 'react'
import $ from 'jquery'

// var randomWord = 'http://api.wordnik.com:80/v4/words.json/randomWord?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

export default React.createClass({

  getInitialState: function(){
    return {
      rword: '',
    }
  },

  componentDidMount: function(){
    // console.log(process.env.API)
    // $.get(randomWord).done( data=> {
    //   this.setState({rword: data.word})
    // })
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
