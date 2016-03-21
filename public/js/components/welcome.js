import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'

export default React.createClass({

  getInitialState: function() {
    return {
      word: '',
      def: [],
      pos: '',
      eg: [],
    }
  },

  componentDidMount: function() {   //assign values to getInitialState.
    $.get('/wordnik/wotd').done( data => {
      this.setState({word: data.word});
      var def = [];
      data.definitions.forEach((el, index, arr)=>{
        def.push(data.definitions[index].text);
      })
      this.setState({def: def});
      var eg = [];
      data.examples.forEach((el,index,arr) => {
        eg.push(data.examples[index].text);
      })
      this.setState({eg: eg});
    });
  },

  renderDef: function(el,index, arr) {
    //will give error if key value isn't assign.
    return(
      <DERender key={this.state.def[index]} details={this.state.def[index]} />
    )
  },
  renderEg: function(el, index, arr) {
    //will give error if key value isn't assign.
    return(
      <DERender key={this.state.eg[index]} details={this.state.eg[index]} />
    )
  },

  render: function(){

    return(
      <div>
      <div className="welcome"> <h2>Welcome to Mad Mad Libs! </h2><h4>You can fill out a mad-lib, read other’s completed Mad Libs, create your own Mad Lib or participate in the Meta-Mad Lib. </h4>
      </div>
      <div id="defofday">
        <h2> Word of the day: </h2>
        <h1><strong>{this.state.word}</strong></h1>
        <div>
          <h4>Definitions: </h4>
          {this.state.def.map(this.renderDef)}
        </div>
        <div>
          <h4>Examples: </h4>
          {this.state.eg.map(this.renderEg)}
        </div>
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
