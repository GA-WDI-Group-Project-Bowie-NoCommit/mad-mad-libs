import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'

var wotd = 'http://api.wordnik.com:80/v4/words.json/wordOfTheDay?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

export default React.createClass({

  getInitialState: function() {
    return {
      word: '',
      def: [],
      pos: '',
      eg: [],
    }
  },

  componentDidMount: function() {
    $.get(wotd).done( data => {
      console.log(data);
      this.setState({word: data.word});
      var def = [];
      data.definitions.forEach((el, index, arr)=>{
        def.push(data.definitions[index].text);
      })
      // def = def.toString();
      // console.log(def);
      this.setState({def: def});
      var eg = [];
      data.examples.forEach((el,index,arr) => {
        eg.push(data.examples[index].text);
      })
      this.setState({eg: eg});
    });
  },

  renderDef: function(el,index, arr) {
    return(
      <DERender details={this.state.def[index]} />
    )
  },
  renderEg: function(el, index, arr) {
    return(
      <DERender details={this.state.eg[index]} />
    )
  },

  render: function(){

    return(
      <div id="defofday">
        <h1> Word of the day: </h1>
        <h1><strong>{this.state.word}</strong></h1>
        {/*<h3>Definitions: {this.state.def}</h3>*/}
        <div>
          <h4>Definitions: </h4>
          {this.state.def.map(this.renderDef)}
        </div>
        <div>
          <h4>Examples: </h4>
          {this.state.eg.map(this.renderEg)}
        </div>
      </div>
    )
  }
})

const DERender = React.createClass({
  render: function(){
    return(
      <div>
        <p>{this.props.details}</p>
      </div>
    )
  }
})
