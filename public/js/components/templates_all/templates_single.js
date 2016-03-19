import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
//Does not submit yet
  handleSubmit: function(e) {
    e.preventDefault();
    this.firebaseRef.push({
      text: this.state.text
    });
    this.setState({text: ""});
  },

  render: function(){

  var { thing } = this.props.params

    var style = {
      border: '2px solid black',
      padding: '6px'
    }

    return(
      <div style={style}>
        <div>Form</div>
        <div>Title is: {thing}</div>
        <form ref="crudForm" onSubmit={this.handleSubmit}>
          <input ref="noun" type="text" placeholder="Noun" />
          <input ref="verb" type="text" placeholder="Verb" />
          <button type="submit">Form Button</button>
        </form>
        {this.props.children}
      </div>
    )
  }
})
