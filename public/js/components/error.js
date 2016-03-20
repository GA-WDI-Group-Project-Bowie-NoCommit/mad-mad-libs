import React from 'react'
import $ from 'jquery'

var randomWord = 'http://api.wordnik.com:80/v4/words.json/wordOfTheDay?';

export default React.createClass({

  getInitialState: function(){
    return {
      wotd: {}
    }
  },

  componentDidMount: function(){
    $.get(randomWord+process.env.API).done( data=> {
      console.log(data);
    })
  }

  render: function() {
    return(
      <div>
        <h1> 404 not found </h1>
      </div>
    )
  }

})
