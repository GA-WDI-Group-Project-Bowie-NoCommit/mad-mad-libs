// require('dotenv').config();
import React from 'react'
import $ from 'jquery'

var randomWord = 'http://api.wordnik.com:80/v4/words.json/wordOfTheDay?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

export default React.createClass({

  // getInitialState: function(){
  //   return {
  //     rword: {}
  //   }
  // },
  //
  // componentDidMount: function(){
  //   console.log(process.env.API)
  //   $.get(randomWord).done( data=> {
  //     console.log(data);
  //   })
  // },

  render: function() {
    return(
      <div>
        <h1> 404 not found </h1>
      </div>
    )
  }

})
